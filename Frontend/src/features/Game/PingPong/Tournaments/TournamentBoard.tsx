import React, { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { HiUsers, HiOutlineSparkles } from "react-icons/hi2";
import { BsFillTrophyFill, BsAward } from "react-icons/bs";
import { FaPlay, FaTrash } from "react-icons/fa";
import { LuCrown, LuTarget, LuSwords } from "react-icons/lu";
import { PiTimer, PiStarFourBold } from "react-icons/pi";
import toast from "react-hot-toast";
import socket from '../../../Chat/services/socket';
import type { Tournament, Match } from "./types";

interface TournamentBoardProps {
  onStartNextRound?: () => void;
}
const TournamentBoard: React.FC<TournamentBoardProps> = ({ onStartNextRound }) => {
  const { tournamentId } = useParams<{ tournamentId: string }>();
  const [tournament, setTournament] = useState<Tournament | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const userRef = useRef<string | null>(null);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [timerStarted, setTimerStarted] = useState(false);
  const [players, setPlayers] = useState<string[]>([]);
  const [completionCountdown, setCompletionCountdown] = useState<number | null>(null);
  const navigate = useNavigate();
  // Custom color palette styles (unchanged as per request)
  const customStyles = {
    primaryBg: { backgroundColor: '#007cf700' },
    secondaryBg: { backgroundColor: '#383e4500' },
    tertiaryBg: { backgroundColor: '#21283000' },
  };
  // Fetch tournament data from backend
  const fetchTournament = () => {
    if (!tournamentId)
      return;
    setLoading(true);
    fetch(`http://e3r10p10.1337.ma:3000/api/tournaments/${tournamentId}`, {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) {
          const errData = await res.text();
          throw new Error(errData || "Failed to fetch tournament");
        }
        const text = await res.text();
        if (!text) {
          throw new Error("Empty response from the server.");
        }
        const data = JSON.parse(text);
        return data;
      })
      .then((data: { tournament: Tournament }) => {
        setTournament(data.tournament);
        setCountdown(data.tournament.countdown || null);
        if (data.tournament.participants === null) {
          setPlayers([...data.tournament.players]);
        } else {
          setPlayers([...data.tournament.participants]);
        }
        if (data.tournament?.status === 'completed' && data.tournament?.countdown === 0) {
          console.log("Tournament completed");
          socket.emit('game:over', data.tournament.id);
          setCompletionCountdown(data.tournament.countdown);
        }
        setLoading(false);
        console.log("Fetched tournament data:", data.tournament);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setLoading(false);
      });
  };
  // Fetch tournament data when component mounts or when tournamentId changes
  useEffect(() => {
    fetchTournament();
  }, [tournamentId]);
  // Fetch user profile and socket setup
  useEffect(() => {
    socket.connect();
    socket.emit("get-my-profile");
    
    const onProfile = (user: any) => {
      if (user?.user) {
        setUserId(user.user);
        userRef.current = user.user;
      }
    };

    socket.on("profile-data", onProfile);

    const handleTournamentUpdated = (updatedTournament: Tournament) => {
      if (updatedTournament.id === tournamentId) {
        setTournament(updatedTournament);
        setCountdown(updatedTournament.countdown || null);
        if (updatedTournament.countdown) {
          setTimerStarted(true);
        }
        if (updatedTournament?.status === 'completed' && updatedTournament?.countdown === 0) {
          console.log("Tournament completed");
          socket.emit('game:over', updatedTournament.id);
          setCompletionCountdown(updatedTournament.countdown);
        }
      }
    };

    // Add tournament deletion listener
    const handleTournamentDeleted = (data: { message: string; tournamentId: string }) => {
      if (data.tournamentId === tournamentId) {
        // Show toast notification
        toast.error(data.message || "Tournament has been deleted.", {
          duration: 3000,
          position: 'top-center',
          style: {
            background: '#ef4444',
            color: 'white',
            fontWeight: 'bold',
            borderRadius: '12px',
            padding: '16px',
          },
          icon: '🏆',
        });
        
        // Short delay to let users see the notification, then navigate
        setTimeout(() => {
          navigate('/game/ping-pong/tournament-game/tournament-join');
        }, 2000); // Much shorter - 2 seconds instead of 10
      }
    };

    socket.emit("join-tournament-room", tournamentId);
    socket.on("tournament-updated", handleTournamentUpdated);
    socket.on("tournament-deleted", handleTournamentDeleted); // Add this listener

    socket.on('readyToPlay', (payload) => {
      socket.emit("addToRoom", userRef.current);
      navigate(`/game/ping-pong/tournament-game/tournament/${payload.matchId}/game`);
    });

    return () => {
      socket.emit("leave-tournament-room", tournamentId);
      socket.off("tournament-updated", handleTournamentUpdated);
      socket.off("tournament-deleted", handleTournamentDeleted); // Clean up listener
      socket.off("profile-data", onProfile);
      socket.off("readyToPlay");
    };
  }, [tournamentId]);
  // Countdown handling from backend
  useEffect(() => {
    socket.on("tournament-starting", (countdownDuration: number) => {
      setCountdown(countdownDuration);
      setTimerStarted(true);
    });
    socket.on("countdown", (countdown: number) => {
      setCountdown(countdown);
      setTimerStarted(true);
    });
    socket.on("tournament-started", () => {
      setTimerStarted(false);
      setCountdown(null);
    });
    return () => {
      socket.off("tournament-starting");
      socket.off("countdown");
      socket.off("tournament-started");
    };
  }, []);
  // Start Tournament Button
  const handleStartTournament = async () => {
    try {
      const response = await fetch(`http://e3r10p10.1337.ma:3000/api/tournaments/${tournamentId}/start`, {
        method: "POST",
        credentials: "include",
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to start tournament");
      }
      const data = await response.json();
      setCountdown(180);
      setTimerStarted(true);
      socket.emit("tournament-starting", 180);
    } catch (error) {
      setError(error.message || "Unknown error");
    }
  };

  // Delete Tournament Button
  const handleDeleteTournament = async () => {
    const confirmed = window.confirm(`Are you sure you want to delete the tournament "${tournament.name}"? This action cannot be undone.`);
    
    if (!confirmed) return;

    try {
      const response = await fetch(`http://e3r10p10.1337.ma:3000/api/tournaments/${tournamentId}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to delete tournament");
      }

      // Redirect to tournaments page after successful deletion
      navigate('/game/ping-pong/tournament-game/tournament-join');
    } catch (error) {
      setError(error.message || "Unknown error");
    }
  };

  useEffect(() => {
    if (tournament) {
      // Use players array until tournament starts, then use participants
      const displayPlayers = tournament.status === 'waiting' ? 
        tournament.players : 
        (tournament.participants || tournament.players);
      setPlayers(displayPlayers);
    }
  }, [tournament]);

  useEffect(() => {
    socket.on('tournaments_updated', (updatedTournaments) => {
      // If current tournament is not in the updated list, redirect to tournaments page
      if (!updatedTournaments.find(t => t.id === tournamentId)) {
        navigate('/game/ping-pong/tournament-game/tournament-join');
      }
    });

    return () => {
      socket.off('tournaments_updated');
    };
  }, [tournamentId, navigate]);

  useEffect(() => {
    socket.on('tournament:state', (updatedTournament: Tournament) => {
      if (updatedTournament.id === tournamentId) {
        setTournament(updatedTournament);
        setCompletionCountdown(updatedTournament.countdown || null);
      }
    });

    return () => {
      socket.off('tournament:state');
    };
  }, [tournamentId]);

  const matchesByRound = (tournament?.matches ?? []).reduce<Record<number, Match[]>>((acc, game) => {
    // Use game.round instead of game.state?.round since round is on the game object
    const round = game.round ?? 1;
    if (!acc[round]) acc[round] = [];
    acc[round].push({
      id: game.roomId || '',
      round: round,
      players: [
        // Use the original player names from tournament.players if available
        tournament?.players.find(p => p === game.players[0]) || game.players[0] || 'TBD',
        tournament?.players.find(p => p === game.players[1]) || game.players[1] || 'TBD',
      ],
      status: game.progress === 'in_progress' ? 'playing' : game.progress === 'completed' ? 'finished' : 'pending',
      winner: game.winner || null,
      roomId: game.roomId,
      score: {
        [game.players[0] || 'TBD']: game.state.score.left,
        [game.players[1] || 'TBD']: game.state.score.right,
      },
    });
    return acc;
  }, {});

  const rounds = Object.keys(matchesByRound)
    .map(Number)
    .sort((a, b) => a - b);

  // Helper function to get round name based on tournament structure
  const getRoundName = (round: number, totalRounds: number, maxPlayers: number) => {
    const roundsFromEnd = totalRounds - round + 1;
    
    // Calculate what this round represents based on max players
    if (roundsFromEnd === 1) return "Final";
    if (roundsFromEnd === 2) return "Semi-Final";
    if (roundsFromEnd === 3) return "Quarter-Final";
    if (roundsFromEnd === 4) return "Round of 16";
    return `Round ${round}`;
  };

  const generateMatchPreview = (players: string[]) => {
    const pairs = [];
    for (let i = 0; i < players.length; i += 2) {
      const p1 = players[i];
      const p2 = players[i + 1] || "Awaiting Challenger";
      pairs.push([p1, p2]);
    }
    return pairs;
  };

  const hasMatches = Array.isArray(tournament?.matches) && tournament.matches.length > 0;
  const matchPreviews = !hasMatches ? generateMatchPreview(tournament?.players || []) : [];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={customStyles.tertiaryBg}>
        <div className="relative z-10 text-center space-y-4">
          <BsFillTrophyFill className="w-20 h-20 mx-auto text-blue-400 animate-pulse-slow" />
          <h2 className="text-3xl font-bold text-white">Loading Arena...</h2>
          <p className="text-white/60">Preparing the stage for battle.</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-96 h-96 bg-gradient-to-r from-blue-500/20 to-[#7fb4ed]/20 rounded-full blur-3xl animate-blob"></div>
        </div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={customStyles.tertiaryBg}>
        <div className="relative z-10 max-w-sm w-full text-center p-8 rounded-3xl backdrop-blur-xl border border-red-500/30">
          <LuTarget className="w-16 h-16 mx-auto mb-4 text-red-400" />
          <h3 className="text-2xl font-bold text-white mb-2">Error</h3>
          <p className="text-white/70">{error}</p>
          <button onClick={() => {navigate('/')}} className="mt-6 px-6 py-3 rounded-full text-sm font-semibold text-white bg-red-600/50 hover:bg-red-600/70 transition-colors">
            Go Home
          </button>
        </div>
      </div>
    );
  }
  if (!tournament) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={customStyles.tertiaryBg}>
        <div className="text-center">
          <BsFillTrophyFill className="w-20 h-20 mx-auto mb-6 text-purple-400" />
          <h2 className="text-2xl font-bold text-white mb-2">Tournament Not Found</h2>
          <p className="text-white/60">This tournament has vanished into the aether.</p>
        </div>
      </div>
    );
  }
  const isOwner = userId === tournament.owner;

  return (
    <div className="relative w-full" style={customStyles.tertiaryBg}>
      <div className="relative overflow-y-scroll max-h-[90vh] custom-scroll">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full sm:w-2/3 sm:h-2/3 bg-gradient-to-r from-blue-500/10 via-[#318cf1]/20 to-[#7fb4ed]/5 rounded-full blur-3xl animate-blob"></div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          <div className="relative inline-block">
            <BsFillTrophyFill className="w-24 h-24 mx-auto text-transparent bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 bg-clip-text" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mt-4">
            <span className="bg-gradient-to-r from-blue-500 via-[#318cf1] to-[#7fb4ed] bg-clip-text text-transparent">
              {tournament.name}
            </span>
          </h1>
          <p className="text-white/60 text-lg mt-2">
            An elite championship of skill and glory.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-white/80">
              <HiUsers className="w-5 h-5 text-blue-400" />
              <span className="font-semibold">{tournament.players.length} / {tournament.maxPlayers} Players</span>
            </div>
          </div>
        </div>
        {/* Countdown & Owner Controls Section */}
        {timerStarted && countdown !== null && (
          <div className="mb-12 max-w-lg mx-auto p-8 rounded-3xl backdrop-blur-xl border border-white/20 text-center transition-all duration-500" style={customStyles.secondaryBg}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <PiTimer className="w-8 h-8 text-orange-400 animate-ping-slow" />
              <h3 className="text-2xl font-bold text-orange-400">Battle Commencing</h3>
            </div>
            <div className="text-6xl sm:text-7xl font-mono font-black text-white/90">
              {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, "0")}
            </div>
            <p className="text-white/70 mt-2">Prepare for glory!</p>
          </div>
        )}
        {(tournament.status === "completed" && tournament.winners.length === 1) && (
          <div className="mb-12 max-w-lg mx-auto p-8 rounded-3xl backdrop-blur-xl border border-white/20 text-center transition-all duration-500" style={customStyles.secondaryBg}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <BsAward className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-yellow-400">
                {tournament.status === "completed" ? "Tournament Concluded" : "Champion Crowned!"}
              </h3>
            </div>
            {tournament.winners.length > 0 ? (
              <div className="text-white/90">
                <p className="text-lg">Champion:</p>
                <h2 className="text-3xl font-bold">{tournament.winners[0]}</h2>
                {completionCountdown !== null && tournament.status === "completed" && (
                  <p className="mt-4 text-white/60">
                    Tournament ending in: {completionCountdown}s
                  </p>
                )}
              </div>
            ) : (
              <p className="text-white/70">No champion was determined.</p>
            )}
          </div>
        )}
        {isOwner && tournament.status === "waiting" && (
          <div className="mb-12 max-w-lg mx-auto p-8 rounded-3xl backdrop-blur-xl border border-white/20 transition-all duration-500 text-center" style={customStyles.secondaryBg}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <LuCrown className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-yellow-400">Tournament Master</h3>
            </div>
            <div className="space-y-4">
              {tournament.players.length === tournament.maxPlayers ? (
                <button 
                  onClick={handleStartTournament} 
                  className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white font-semibold group hover:scale-[1.02] transition-transform duration-300"
                >
                  <FaPlay className="w-6 h-6 text-green-400 group-hover:animate-spin-slow" />
                  <span className="text-lg">Start Tournament</span>
                </button>
              ) : (
                <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-yellow-400 text-sm">
                    Waiting for {tournament.maxPlayers - tournament.players.length} more players to join
                  </p>
                </div>
              )}
              
              <button 
                onClick={handleDeleteTournament}
                className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-3 px-6 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-600/20 text-white font-semibold group hover:scale-[1.02] transition-transform duration-300 border border-red-500/30"
              >
                <FaTrash className="w-5 h-5 text-red-400" />
                <span className="text-base">Delete Tournament</span>
              </button>
            </div>
          </div>
        )}
        {isOwner && tournament.status === "in_progress" && tournament.winners.length !== 1 && !countdown && (
          <div className="mb-12 max-w-lg mx-auto p-8 rounded-3xl backdrop-blur-xl border border-white/20 transition-all duration-500 text-center" style={customStyles.secondaryBg}>
            <div className="flex items-center justify-center gap-3 mb-4">
              <LuCrown className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl font-bold text-yellow-400">Tournament Master</h3>
            </div>
            <button onClick={handleStartTournament} className="w-full relative overflow-hidden flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white font-semibold group hover:scale-[1.02] transition-transform duration-300">
              <FaPlay className="w-6 h-6 text-green-400 group-hover:animate-spin-slow" />
              <span className="text-lg">Start Next Round</span>
            </button>
          </div>
        )}
        {/* Players Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Players
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {players.map((player, index) => (
              <div key={index} className="relative p-4 rounded-xl border border-white/20 backdrop-blur-sm group hover:border-blue-400/50 transition-colors duration-300" style={customStyles.primaryBg}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-[#7fb4ed]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-[#7fb4ed] flex items-center justify-center text-white font-bold">
                    #{index + 1}
                  </div>
                  <span className="flex-1 text-white font-semibold truncate">{player}</span>
                  {tournament.winners.includes(player) && <span className="text-green-400">Active</span>}
                  {tournament.losers.includes(player) && <span className="text-red-400">Eliminated</span>}
                  {player === userId && <PiStarFourBold className="w-4 h-4 text-yellow-400 animate-pulse" />}
                </div>
              </div>
            ))}
            {tournament.status === 'waiting' && Array.from({ length: tournament.maxPlayers - players.length }).map((_, index) => (
              <div key={`empty-${index}`} className="relative p-4 rounded-xl border-2 border-dashed border-white/20 backdrop-blur-sm flex items-center justify-center" style={customStyles.tertiaryBg}>
                <span className="text-white/50 text-sm">Awaiting Warrior</span>
              </div>
            ))}
          </div>
        </div>
        {/* Matches/Bracket Section */}
        {rounds.length > 0 && (
          <div className="space-y-8">
            {rounds.map((round) => {
              const totalRounds = rounds.length;
              const roundName = getRoundName(round, totalRounds, tournament.maxPlayers);
              const roundMatches = matchesByRound[round];
              
              return (
                <div key={round} className="p-6 sm:p-8 rounded-3xl backdrop-blur-xl border border-white/20 transition-all duration-500" style={customStyles.secondaryBg}>
                  <div className="flex items-center gap-4 mb-6">
                    <BsAward className="w-8 h-8 text-orange-400" />
                    <h3 className="text-2xl font-bold text-white">Round {round}</h3>
                    <span className="text-sm text-white/60">({roundMatches.length} matches)</span>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {roundMatches.map((match, matchIndex) => (
                      <Link
                        key={match.id}
                        to={`/game/ping-pong/tournament-game/tournament/${tournament.id}/match/${match.id}`}
                        className="group p-4 rounded-xl border border-white/20 backdrop-blur-sm hover:border-orange-400/50 transition-colors duration-300"
                        style={customStyles.primaryBg}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-semibold text-orange-400">Match {matchIndex + 1}</span>
                          {match.status === 'finished' && <span className="text-xs text-green-400 font-medium">✓ Completed</span>}
                          {match.status === 'playing' && <span className="text-xs text-blue-400 font-medium">🎮 Live</span>}
                          {match.status === 'pending' && <span className="text-xs text-yellow-400 font-medium">⏳ Pending</span>}
                        </div>
                        <div className="flex items-center justify-between text-white font-semibold">
                          <span className={`truncate ${match.winner === match.players[0] ? 'text-green-400' : match.winner ? 'text-red-400' : ''}`}>
                            {match.players[0]}
                          </span>
                          <LuSwords className="w-4 h-4 mx-2 text-white/60" />
                          <span className={`truncate ${match.winner === match.players[1] ? 'text-green-400' : match.winner ? 'text-red-400' : ''}`}>
                            {match.players[1]}
                          </span>
                        </div>
                        {match.winner && (
                          <div className="mt-2 text-xs text-center text-green-400">
                            Winner: {match.winner}
                          </div>
                        )}
                        {/* Show current score if game is in progress */}
                        {match.status === 'playing' && (
                          <div className="mt-2 text-xs text-center text-blue-400">
                            Score: {match.score[match.players[0]]} - {match.score[match.players[1]]}
                          </div>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      </div>
    </div>
  );
};
export default TournamentBoard;