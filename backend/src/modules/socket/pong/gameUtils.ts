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
  
// export function normalizeBallSpeed(ball, targetSpeed) {
//     const magnitude = Math.sqrt(ball.dx ** 2 + ball.dy ** 2);
//     const scale = targetSpeed / magnitude;
//     ball.dx *= scale;
//     ball.dy *= scale;
//   }
