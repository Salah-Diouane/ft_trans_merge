import { resetBallProps, gameStateProps } from "./interfaces";

export function resetBall(resetBallData:resetBallProps) {
	resetBallData.leftScored = false;
    resetBallData.state.ball = {
      x: resetBallData.baseWidth / 2,
      y: resetBallData.baseHeight / 2,
      dx: resetBallData.leftScored ? -resetBallData.ballSpeed : resetBallData.ballSpeed,
      dy: resetBallData.ballSpeed,
    };
}
  
// export function normalizeBallSpeed(ball, targetSpeed) {
//     const magnitude = Math.sqrt(ball.dx ** 2 + ball.dy ** 2);
//     const scale = targetSpeed / magnitude;
//     ball.dx *= scale;
//     ball.dy *= scale;
//   }
  