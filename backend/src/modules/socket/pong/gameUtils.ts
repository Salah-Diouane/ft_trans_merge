import { resetBallProps, gameStateProps } from "./interfaces";

export function resetBall({
  state,
  leftScored,
  baseWidth,
  baseHeight,
  ballSpeed,
}: {
  state: any;
  leftScored: boolean;
  baseWidth: number;
  baseHeight: number;
  ballSpeed: number;
}) {
  state.ball = {
    x: baseWidth / 2,
    y: baseHeight / 2,
    dx: leftScored ? ballSpeed : -ballSpeed, // Direction based on who scored
    dy: 2 * (Math.random() > 0.5 ? 1 : -1), // Random vertical direction
  };
}

export const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function checkPaddleCollision(
  prevX: number,
  currX: number,
  ballY: number,
  ballR: number,
  paddleRect: { top: number; bottom: number; left: number; right: number },
  goingLeft: boolean
) {
  const passedFront = goingLeft
    ? prevX - ballR >= paddleRect.right && currX - ballR <= paddleRect.right
    : prevX + ballR <= paddleRect.left && currX + ballR >= paddleRect.left;

  const withinY =
    ballY + ballR >= paddleRect.top && ballY - ballR <= paddleRect.bottom;

  return passedFront && withinY;
}

// New function to handle tournament updates
export function updateTournamentOnGameEnd(
  tournaments: any,
  roomId: string,
  winner: string,
  loser: string,
  io: any
) {
  const tournament = Object.values(tournaments).find((t: any) =>
    t.matches.some((m: any) => m.roomId === roomId)
  );
  
  if (!tournament) return;

  const match = (tournament as any).matches.find((m: any) => m.roomId === roomId);
  if (match) {
    match.winner = winner;
    match.loser = loser;
    match.progress = 'completed';
  }

  // Update winners and losers arrays
  if ((tournament as any).winners.includes(loser)) {
    const index = (tournament as any).winners.findIndex((player: string) => player === loser);
    if (index !== -1) {
      (tournament as any).winners.splice(index, 1);
      (tournament as any).losers.push(loser);
    }
  }

  if (!(tournament as any).winners.includes(winner)) {
    (tournament as any).winners.push(winner);
  }

  io.to(`tournament:${(tournament as any).id}`).emit('tournament-updated', tournament);
  console.log(`Tournament ${(tournament as any).id} updated with match result.`);
  
  if ((tournament as any).winners.length === 1) {
    (tournament as any).status = 'completed';
  }
}

// New function to handle game over logic
export function handleGameOver(
  game: any,
  roomId: string,
  winner: string,
  loser: string,
  io: any,
  tournaments: any,
  games: Map<string, any>,
  paddleDirections: Map<string, any>
) {
  console.log(`Game Over. ${winner} wins.`);
  io.to(roomId).emit('gameOver', { winner });

  if (game.gameType === "tournament") {
    const gameOverTournamentEvent = { roomId, winner, loser };
    console.log("Handling gameOverTournament event for room:", roomId, gameOverTournamentEvent);
    
    game.progress = 'completed';
    game.winner = winner;
    game.loser = loser;

    // Update tournament
    updateTournamentOnGameEnd(tournaments, roomId, winner, loser, io);

    // Update tournament store with game copy
    const copy = JSON.parse(JSON.stringify(game));
    const tour = Object.values(tournaments).find((t: any) =>
      t.matches.some((m: any) => m.roomId === roomId)
    );
    
    if (tour) {
      const match = (tour as any).matches.find((m: any) => m.roomId === roomId);
      if (match) {
        match.winner = copy.winner;
        match.loser = copy.loser;
        match.progress = 'completed';
      }
      
      if (!(tour as any).winners.includes(copy.winner)) {
        (tour as any).winners.push(copy.winner);
      }
      
      if (!(tour as any).losers.includes(copy.loser)) {
        (tour as any).losers.push(copy.loser);
      }
    }
  }

  // Cleanup
  paddleDirections.delete(roomId);
  games.delete(roomId);
}

// New function to handle scoring
export function handleScoring(
  ball: any,
  state: any,
  game: any,
  roomId: string,
  baseWidth: number,
  baseHeight: number,
  initialBallSpeed: number,
  io: any,
  tournaments: any,
  games: Map<string, any>,
  paddleDirections: Map<string, any>
): boolean {
  let gameEnded = false;

  // Left side scoring (ball.x < 0) - Right player scores
  if (ball.x < 0) {
    state.score.right++;
    if (state.score.right === 7) {
      const winner = game.players[1] || 'right';
      const loser = game.players[0] || 'left';
      handleGameOver(game, roomId, winner, loser, io, tournaments, games, paddleDirections);
      gameEnded = true;
    } else {
      resetBall({
        state,
        leftScored: false, // Right player scored, so ball goes toward left
        baseWidth,
        baseHeight,
        ballSpeed: initialBallSpeed,
      });
    }
  }
  
  // Right side scoring (ball.x > baseWidth) - Left player scores
  else if (ball.x > baseWidth) {
    state.score.left++;
    if (state.score.left === 7) {
      const winner = game.players[0] || 'left';
      const loser = game.players[1] || 'right';
      handleGameOver(game, roomId, winner, loser, io, tournaments, games, paddleDirections);
      gameEnded = true;
    } else {
      resetBall({
        state,
        leftScored: true, // Left player scored, so ball goes toward right
        baseWidth,
        baseHeight,
        ballSpeed: initialBallSpeed,
      });
    }
  }

  return gameEnded;
}
