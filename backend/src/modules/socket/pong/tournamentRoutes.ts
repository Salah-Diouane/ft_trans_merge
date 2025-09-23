import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { v4 as uuidv4 } from "uuid";
import { tournaments, Tournament } from "./tournamentStore";
import { games, createGame, addPlayerToGame, getGame, Game } from "./gameManager";
import { getUserName } from "../../../utils/userauth.utils";

interface CreateTournamentBody {
  name: string;
  maxPlayers: number;
  ownerName: string;
  ownerPlays: boolean;
}

interface JoinTournamentParams {
  id: string;
}

interface JoinTournamentBody {
  user: string;
}

export default async function tournamentRoutes(app: FastifyInstance) {
  // 🔹 CREATE TOURNAMENT
  app.post('/tournament', async (
    req: FastifyRequest<{ Body: CreateTournamentBody }>,
    res: FastifyReply
  ) => {
    const { name, maxPlayers, ownerName, ownerPlays } = req.body;

    if (!name || maxPlayers !== 4) {
      return res.status(400).send({ error: "Tournament name and at least two players are required." });
    }

    if (ownerPlays && Object.values(tournaments).some(t => t.players.includes(ownerName))) {
      return res.status(400).send({ error: "Player already in a tournament." });
    }

    const id = uuidv4();
    const players: string[] = ownerPlays ? [ownerName] : [];

    const tournament: Tournament = {
      id,
      name,
      owner: ownerName || "unknown",
      ownerPlays,
      maxPlayers,
      players: players,
      participants: null,  // Now valid with updated interface
      winners: players,
      losers: [],
      currentPlayers: players.length,
      countdown: null,
      roundes: 0,
      matches: [],
      status: "waiting",
    };

    // Assign the round number

    tournament.roundes = 0;
    // let playersNumber = tournament.maxPlayers;
    // while (playersNumber % 2 == 0) {
    //   tournament.roundes++;
    //   playersNumber /= 2;
    // }

    tournaments[id] = tournament;

    app.io.emit('tournaments_updated', Object.values(tournaments));

    console.log(tournaments)

    return res.status(201).send({ tournament });
  });

  // 🔹 JOIN TOURNAMENT (PRIVATE ROOM EMIT)
  app.post('/tournaments/:id/join', async (
    req: FastifyRequest<{ Params: JoinTournamentParams; Body: JoinTournamentBody }>,
    res: FastifyReply
  ) => {
    const { id } = req.params;
    const { user } = req.body;
    if (Object.values(tournaments).some(t => t.players.includes(user))) {
      return res.status(400).send({ error: "Player already in a tournament." });
    }
    const tournament = tournaments[id];
    if (!tournament) {
      return res.status(404).send({ error: "Tournament not found." });
    }

    if (tournament.status !== "waiting") {
      return res.status(400).send({ error: "Tournament already started." });
    }

    if (tournament.players.includes(user)) {
      return res.status(400).send({ error: "Player already joined." });
    }

    if (tournament.players.length >= tournament.maxPlayers) {
      return res.status(400).send({ error: "Tournament is full." });
    }

    if (!tournament.players.includes(user)) {
      tournament.players.push(user);
      tournament.winners = tournament.players;
      tournament.currentPlayers = tournament.players.length;
    }

    if (tournament.players.length === tournament.maxPlayers) {
      tournament.status = "in_progress";
    }

    app.io.emit('tournaments_updated', Object.values(tournaments));
    app.io.to(`tournament:${id}`).emit('tournament-updated', tournament);

    return res.status(200).send(tournament);
  });

  // 🔹 LEAVE TOURNAMENT
  app.post('/tournaments/:id/leave', async (
    req: FastifyRequest<{ Params: JoinTournamentParams; Body: JoinTournamentBody }>,
    res: FastifyReply
  ) => {
    const { id } = req.params;
    const { user } = req.body;

    const tournament = tournaments[id];
    if (!tournament) {
      return res.status(404).send({ error: "Tournament not found." });
    }
    
    if (tournament.status !== "waiting") {
      return res.status(400).send({ error: "Tournament already started." });
    }
    
    const index = tournament.players.indexOf(user);
    if (index === -1) {
      return res.status(400).send({ error: "Player not in tournament." });
    }
    tournament.players.splice(index, 1);
    tournament.currentPlayers = tournament.players.length;
    
    app.io.emit('tournaments_updated', Object.values(tournaments));
    app.io.to(`tournament:${id}`).emit('tournament-updated', tournament);
    return res.status(200).send(tournament);
  });

  // 🔹 GET TOURNAMENT BY ID
  app.get('/tournaments/:id', async (
    req: FastifyRequest<{ Params: JoinTournamentParams }>,
    res: FastifyReply
  ) => {
    const { id } = req.params;
    const tournament = tournaments[id];

    if (!tournament) {
      return res.status(404).send({ error: "Tournament not found." });
    }
    return res.status(200).send({ tournament });
  });

  // 🔹 GET ALL TOURNAMENTS
  app.get('/tournaments', async (_req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send(Object.values(tournaments));
  });
  // GET ALL USERS BY IDS
  app.post('/users', async (req: FastifyRequest<{ Body: { ids: string[] } }>, res: FastifyReply) => {
    const { ids } = req.body;
    
    const users : string[] = [];
    for (const id of ids) {
      const userName = await getUserName(app, id);
      users.push(userName || "");
    }
    return res.status(200).send({ users });
  });

  // 🔹 START TOURNAMENT WITH TIMER

  app.post('/tournaments/:id/start', async (
    req: FastifyRequest<{ Params: JoinTournamentParams }>,
    res: FastifyReply
  ) => {
    const { id } = req.params;
    const tournament = tournaments[id];
  
    if (!tournament) {
      return res.status(404).send({ error: "Tournament not found." });
    }
  
    if (tournament.status !== "in_progress") {
      return res.status(400).send({ error: "Tournament cannot start until players are filled." });
    }
    console.log("TOURNAMENT: -->", tournament);
  
    // Initialize participants array at tournament start
    tournament.participants = [...tournament.players];
    const players = tournament.winners;
    
    // Rest of your start logic...
  
    // Group players into pairs and create game rooms
    let playerPairs: string[][] = [];
    // const players =  tournament.winners;

    // if (tournament.roundes === null) {
    //   tournament.roundes = 0;
    //   let players = tournament.maxPlayers;
    //   while (players % 2 == 0) {
    //     tournament.roundes++;
    //     players /= 2;
    //   }
    // } else {

    // }
    if (!tournament.participants)
      tournament.participants = [...tournament.players];
    // if (tournament.roundes)
    //   tournament.roundes--;
    // if (tournament.roundes) tournament.roundes++;
    tournament.roundes = (tournament.roundes || 0) + 1;
    // Ensure there's an even number of players, or handle the odd player case
    for (let i = 0; i < players.length; i += 2) {
      const pair = players.slice(i, i + 2);
      if (pair.length === 2) {
        playerPairs.push(pair);
      } else {
        // Handle the odd player case, e.g., give them a bye
        playerPairs.push([pair[0], "BYE"]);
      }
    }

  
    // Create a game room for each pair
    playerPairs.forEach(pair => {
      const roomId = uuidv4(); // Generate a unique room ID for each match
  
      // Create the game with initial state
      createGame(roomId);
  
      // Add players to the game
      pair.forEach(player => {
        addPlayerToGame({ roomId, playerName: player, socketId: player }); // You may need to adjust how socketId is handled
      });

      
      // Emit tournament-starting event for each match, with a 3-minute countdown
      app.io.to(roomId).emit('game-starting', { countdown: 180, roomId });
      let game = getGame(roomId)
      if (game) {
        game.gameType = 'tournament';
        game.roomId = roomId;
        game.progress = 'in_progress';
        game.round = tournament.roundes || 0;
        tournament.matches.push(game);
      }
      
      // Countdown and start game
      let countdown = 13; // 3 minutes in seconds
      const interval = setInterval(() => {
        if (countdown <= 0) {
          clearInterval(interval);

          if (game)
            game.ready = true;
          app.io.to(roomId).emit('game-start', { roomId, players: pair });
          setTimeout(() => {
            if (app.io.of("/").adapter.rooms.get(roomId)?.size != 2) {
              let playerName = game?.readyPlayers.includes(game?.players[0]) ? game?.players[1] : game?.players[0];
              app.io.to(roomId).emit('playerLeft', { id: playerName });
              console.log("ONLY ONE!!!")
            }
          }, 1500);
        } else {
          // Broadcast countdown updates to each match room
          app.io.to(roomId).emit('countdown', countdown - 3);
          countdown--;
        }
      }, 1000);
    });

    console.log(tournament.matches, tournament.roundes);
  
    // Broadcast tournament countdown for overall tournament
    let tournamentCountdown = 10; // 3 minutes in seconds
    app.io.to(`tournament:${id}`).emit('tournament-starting', tournamentCountdown);
  
    const tournamentInterval = setInterval(() => {
      tournament.countdown = tournamentCountdown;
      if (tournamentCountdown <= 0) {
        clearInterval(tournamentInterval);
        app.io.to(`tournament:${id}`).emit('readyToPlay', { matchId: id });
        app.io.to(`tournament:${id}`).emit('tournament-started', tournament);
      } else {
        app.io.to(`tournament:${id}`).emit('countdown', tournamentCountdown);
        tournamentCountdown--;
      }
    }, 1000);
  
    return res.status(200).send({ message: "Tournament is starting", tournament });
  });

  // DELETE endpoint for the torunament before it starts (only by the owner)
  app.delete('/tournaments/:id', async (
    req: FastifyRequest<{ Params: JoinTournamentParams }>,
    res: FastifyReply
  ) => {
    const { id } = req.params;
    const tournament = tournaments[id];
  
    if (!tournament) {
      return res.status(404).send({ error: "Tournament not found." });
    }
  
    // Only allow deletion if tournament is in waiting state
    if (tournament.status !== "waiting") {
      return res.status(400).send({ error: "Tournament can only be deleted when in waiting state." });
    }
  
    // Get user profile to check if they're the owner
    // You'll need to implement this based on your auth system
    // For now, assuming you have access to user info from cookies/session
    
    // if (tournament.owner !== currentUser) {
    //   return res.status(403).send({ error: "Only the tournament owner can delete it." });
    // }

    // Remove all players from tournament room
    app.io.to(`tournament:${id}`).emit('tournament-deleted', { 
      message: 'Tournament has been deleted by the owner.',
      tournamentId: id 
    });
  
    // Remove tournament from storage
    delete tournaments[id];
  
    // Broadcast updated tournaments list
    app.io.emit('tournaments_updated', Object.values(tournaments));
  
    console.log(`Tournament ${id} (${tournament.name}) deleted by owner ${tournament.owner}`);
  
    return res.status(200).send({ message: "Tournament deleted successfully." });
  });

}
