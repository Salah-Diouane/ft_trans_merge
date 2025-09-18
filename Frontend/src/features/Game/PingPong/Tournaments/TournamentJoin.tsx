// src/features/Game/PingPong/Tournaments/TournamentJoin.tsx
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import socket from '../../../Chat/services/socket';
import type { Tournament, Game } from "./types";

const TournamentJoin: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const userRef = useRef<string | null>(null);
  const [playerJoinedTournament, setPlayerJoinedTournament] = useState(false);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false); 
  const navigate = useNavigate();

  // Load profile
  useEffect(() => {
    socket.connect();
    socket.emit("get-my-profile");

    const onProfile = (user: any) => {
      if (user?.user) {
        setUserId(user.user);
        userRef.current = user.user;
        setIsProfileLoaded(true);
      }
    };
    socket.on("profile-data", onProfile);
    return () => {socket.off("profile-data", onProfile);}
  }, []);

  // Fetch tournaments
  const fetchTournaments = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments`, {
        credentials: "include",
      });
      const data: Tournament[] = await res.json();
      if (playerJoinedTournament === false)
        data.some(t => {
          console.log(t, userRef.current);
          if (userRef.current && t.players.includes(userRef.current)) {
            setPlayerJoinedTournament(true);
            console.log("User is in a tournament");
            return true;
          }
          return false;
        });
    setTournaments(data);
    } catch (err) {
      console.error("Failed to fetch tournaments:", err);
    }
  };

  useEffect(() => {
    fetchTournaments();

    const onAdded = (t: Tournament) => {
      setTournaments((prev) => [...prev, t]);
      setPlayerJoinedTournament(t.players.includes(userRef.current || "") || (t.owner === userRef.current));
    }
    const onUpdated = (updated: Tournament) => {
      setTournaments((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
      setPlayerJoinedTournament(updated.players.includes(userRef.current || "") || (updated.owner === userRef.current));
    }
    const onStarted = (updated: Tournament) => 
      setTournaments((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));

    socket.on("tournament:added", onAdded);

    const onTournamentsUpdate = (data: any) => {
      if (Array.isArray(data)) {
        setTournaments(data);
      } else {
        console.error("Expected array, got:", data);
        setTournaments([]); // fallback to prevent `.map` error
      }
    };
  
    socket.on("tournaments_updated", onTournamentsUpdate);
    socket.on("tournament:started", onStarted);

    // When a match is started from backend start flow
    socket.on("tournament:matchStarted", (payload: { tournamentId: string; matchId: string; round: number; players: [string, string] }) => {
      // Navigate to the tournament game route (nested under /game)
      navigate(`/game/ping-pong/tournament-game/tournament/${payload.matchId}/game`);
    });

    return () => {
      socket.off("tournament:added", onAdded);
      socket.off("tournaments_updated", onUpdated);
      socket.off("tournament:started", onStarted);
      socket.off("tournament:matchStarted");
    };
  }, [navigate, isProfileLoaded]);

  const handleJoin = async (t: Tournament) => {
    if (!userId) return alert("User not loaded yet");
    const alreadyJoined = t.players.includes(userId);
    if (alreadyJoined) return alert("You are already in this tournament!");
    if (t.currentPlayers >= t.maxPlayers) return alert("Tournament is full!");
    if (t.status !== "waiting") return alert("Tournament already started");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments/${t.id}/join`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userId }),
      });
      if (!res.ok) {
        const err = await res.json();
        return alert(err.message || "Error joining tournament");
      }
      const updated: Tournament = await res.json();
      setTournaments((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
      setPlayerJoinedTournament(true);
    } catch (e: any) {
      alert(e?.message || "Error joining tournament");
    }
  };

  const handleLeave = async (t: Tournament) => {
    if (!userId) return alert("User not loaded yet");

    const isParticipant = t.players.includes(userId) || (t.ownerPlays && t.owner === userId);
    if (!isParticipant) return alert("You are not part of this tournament!");
    if (t.status !== "waiting") return alert("Tournament already started");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments/${t.id}/leave`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userId }),
      });
      if (!res.ok) {
        const err = await res.json();
        return alert(err.message || "Error leaving tournament");
      }
      console.log(res);
      const updated: Tournament = await res.json();
      setTournaments((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
      setPlayerJoinedTournament(false);
    } catch (e: any) {
      alert(e?.message || "Error leaving tournament");
    }
  };

  const handleStart = async (t: Tournament) => {
    if (!userId) return alert("User not loaded yet");
    if (t.owner !== userId) return alert("Only the owner can start");
    if (t.status !== "waiting") return alert("Tournament already started");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tournaments/${t.id}/start`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: userId }),
      });
      if (!res.ok) {
        const err = await res.json();
        return alert(err.message || "Error starting tournament");
      }
      const updated: Tournament = await res.json();
      setTournaments((prev) => prev.map((x) => (x.id === updated.id ? updated : x)));
      // Backend will emit tournament:matchStarted for each R1 match with 2 players; listener above will navigate.
    } catch (e: any) {
      alert(e?.message || "Error starting tournament");
    }
  };

  return (
    <div className="relative overflow-y-scroll max-h-[90vh] custom-scroll" style={{ backgroundColor: '#21283000' }}>
      {/* Background gradient blob */}
      <div className="relative inset-0 flex items-center justify-center">
        <div className="w-full h-full sm:w-2/3 sm:h-2/3 bg-gradient-to-r from-blue-500/10 via-[#318cf1]/20 to-[#7fb4ed]/5 rounded-full blur-3xl animate-blob"></div>
      </div>
      
      {/* Content container */}
      <div className="relative w-full max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-blue-500 via-[#318cf1] to-[#7fb4ed] bg-clip-text text-transparent">
              Tournament Arena
            </span>
          </h1>
          <p className="text-white/60 text-lg mt-2">
            Join competitive tournaments and prove your skills
          </p>
        </div>

        {/* Tournament Grid */}
        {tournaments.length === 0 ? (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#383e4500' }}>
              <span className="text-2xl sm:text-3xl">🏆</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              No Tournaments Available
            </h3>
            <p className="text-white/60">Check back later for new tournaments</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
            {tournaments.map((t) => {
              const isJoined = (!!userId && t.players.includes(userId));
              const isOwner = !!userId && t.owner === userId;
              const isFull = t.currentPlayers >= t.maxPlayers;
              const canJoin = !isJoined && !isFull && t.status === "waiting" && !playerJoinedTournament;
              const canLeave = isJoined && t.status === "waiting";

              const statusConfig = {
                waiting: { color: 'text-yellow-400', bg: 'bg-yellow-400/10', dot: 'bg-yellow-400' },
                in_progress: { color: 'text-blue-400', bg: 'bg-blue-400/10', dot: 'bg-blue-400' },
                completed: { color: 'text-green-400', bg: 'bg-green-400/10', dot: 'bg-green-400' },
              }[t.status] || { color: 'text-gray-400', bg: 'bg-gray-400/10', dot: 'bg-gray-400' };

              return (
                <div
                  key={t.id}
                  className="group relative backdrop-blur-xl border border-white/20 rounded-3xl p-4 sm:p-6 hover:border-white/30 transition-all duration-500"
                  style={{ backgroundColor: '#383e4500' }}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusConfig.bg} ${statusConfig.color}`}>
                      <div className={`w-2 h-2 rounded-full ${statusConfig.dot}`}></div>
                      <span className="text-xs font-medium capitalize">
                        {t.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>

                  {/* Tournament Header */}
                  <div className="mb-4 sm:mb-6 pr-16 sm:pr-20">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 truncate">
                      {t.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                      {isOwner && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-400/10 text-yellow-400 text-xs font-medium">
                          👑 Owner
                        </span>
                      )}
                      {isJoined && !isOwner && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-green-400/10 text-green-400 text-xs font-medium">
                          ✓ Joined
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Player Count */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6 p-3 rounded-lg" style={{ backgroundColor: '#21283000' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">👥</span>
                      <span className="text-white font-medium text-sm sm:text-base">Players</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm sm:text-base">
                        {t.currentPlayers}/{t.maxPlayers}
                      </span>
                      {isFull && (
                        <span className="px-2 py-1 bg-red-400/10 text-red-400 text-xs rounded-lg">
                          Full
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {t.description && (
                    <p className="text-white/60 text-sm mb-4 sm:mb-6 line-clamp-2">
                      {t.description}
                    </p>
                  )}

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                      {/* Join/Leave Button */}
                      {!isJoined ? (
                        <button
                          onClick={() => handleJoin(t)}
                          disabled={!canJoin}
                          className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                            canJoin
                              ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-white hover:scale-[1.02] transition-transform duration-300"
                              : "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {isFull ? "Full" : "Join Tournament"}
                        </button>
                      ) : (
                        <button
                          onClick={() => handleLeave(t)}
                          disabled={!canLeave}
                          className={`flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                            canLeave
                              ? "bg-gradient-to-r from-red-500/20 to-red-600/20 text-white hover:scale-[1.02] transition-transform duration-300 border border-red-500/30"
                              : "bg-gray-700/50 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          Leave
                        </button>
                      )}

                      {/* View Button */}
                      <Link
                        to={`/game/ping-pong/tournament-game/tournament/${t.id}/view`}
                        className="flex justify-center items-center sm:flex-none py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-white rounded-xl font-medium text-sm transition-all duration-200 hover:scale-[1.02] text-center border border-purple-500/30"
                      >
                        View Board
                      </Link>
                    </div>

                    {/* Status Message */}
                    {!canJoin && !isJoined && (
                      <div className="text-center py-2 px-3 rounded-lg" style={{ backgroundColor: '#21283000' }}>
                        <span className="text-white/60 text-xs">
                          {isFull ? "Tournament is full" : 
                          t.status !== "waiting" ? "Already started" :
                          playerJoinedTournament ? "Already in another tournament" : "Cannot join"}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default TournamentJoin;
