import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data } from "react-router";

const Game = () => {
	const canvasRef = useRef(null);

	const [ballColor, setBallColor] = useState("");
	const [paddleColor, setPaddleColor] = useState("");
	const [tableColor, setTableColor] = useState("");

	useEffect(() => {
		const setgameinfo = async () => {
			const response = await fetch("http://e3r7p17.1337.ma:3000/settings/gameinfo", {
				credentials: 'include'
			});
			if (response.ok) {
				const data = await response.json() as { ball_color: string, paddle_color: string, table_color: string };
				setBallColor(data.ball_color);
				setPaddleColor(data.paddle_color);
				setTableColor(data.table_color);
			}
		}
		setgameinfo();
	}, []);

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		const width = canvas.width;
		const height = canvas.height;

		let ball = {
			x: width / 2,
			y: height / 2,
			radius: 10,
			dx: 3,
			dy: 2,
		};

		const paddle = {
			width: 10,
			height: 100,
			leftX: 10,
			rightX: width - 20,
			leftY: height / 2 - 50,
			rightY: height / 2 - 50,
			speed: 4,
		};

		// Which paddle is currently moving? 'left' or 'right'
		let movingPaddle = 'right';

		const draw = () => {
			ctx.fillStyle = tableColor;
			ctx.fillRect(0, 0, width, height);

			ctx.fillStyle = paddleColor;
			// Left paddle
			ctx.fillRect(paddle.leftX, paddle.leftY, paddle.width, paddle.height);
			// Right paddle
			ctx.fillRect(paddle.rightX, paddle.rightY, paddle.width, paddle.height);

			// Ball
			ctx.beginPath();
			ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
			ctx.fillStyle = ballColor;
			ctx.fill();
			ctx.closePath();
		};

		const update = () => {
			ball.x += ball.dx;
			ball.y += ball.dy;

			// Bounce top and bottom walls
			if (ball.y + ball.radius > height || ball.y - ball.radius < 0) {
				ball.dy *= -1;
			}

			// Paddle collision detection
			// Left paddle collision
			if (
				ball.x - ball.radius <= paddle.leftX + paddle.width &&
				ball.y >= paddle.leftY &&
				ball.y <= paddle.leftY + paddle.height &&
				ball.dx < 0
			) {
				ball.dx *= -1;
				movingPaddle = 'right'; // After left paddle hits ball, right paddle moves next
			}

			// Right paddle collision
			if (
				ball.x + ball.radius >= paddle.rightX &&
				ball.y >= paddle.rightY &&
				ball.y <= paddle.rightY + paddle.height &&
				ball.dx > 0
			) {
				ball.dx *= -1;
				movingPaddle = 'left'; // After right paddle hits ball, left paddle moves next
			}

			// Reset ball if missed (goes past paddle)
			if (ball.x < 0 || ball.x > width) {
				ball.x = width / 2;
				ball.y = height / 2;
				ball.dx = 3 * (Math.random() > 0.5 ? 1 : -1);
				ball.dy = 2 * (Math.random() > 0.5 ? 1 : -1);
				movingPaddle = 'right'; // Reset moving paddle
			}

			// Move only the paddle whose turn it is
			if (movingPaddle === 'left') {
				// Move left paddle toward ball's y position
				if (ball.y < paddle.leftY + paddle.height / 2) {
					paddle.leftY -= paddle.speed;
				} else if (ball.y > paddle.leftY + paddle.height / 2) {
					paddle.leftY += paddle.speed;
				}
				// Clamp
				paddle.leftY = Math.max(0, Math.min(height - paddle.height, paddle.leftY));
			} else {
				// Move right paddle toward ball's y position
				if (ball.y < paddle.rightY + paddle.height / 2) {
					paddle.rightY -= paddle.speed;
				} else if (ball.y > paddle.rightY + paddle.height / 2) {
					paddle.rightY += paddle.speed;
				}
				// Clamp
				paddle.rightY = Math.max(0, Math.min(height - paddle.height, paddle.rightY));
			}
		};

		const loop = () => {
			draw();
			update();
			requestAnimationFrame(loop);
		};

		loop();
	}, [ballColor, paddleColor, tableColor]);

	const sendData = async (e: any) => {
		e.preventDefault();
		const body = {
			ball_color: ballColor,
			paddle_color: paddleColor,
			table_color: tableColor,
		};
		const response = await fetch("http://e3r7p17.1337.ma:3000/settings/game", {
			method: 'PUT',
			credentials: "include",
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(body),
		});
		if (response.ok) {
			toast.success("done !");
		} else {
			toast.error("there is a problem !");
		}
	};

	const resetDefault = async (e: any) => {
		e.preventDefault();
		setBallColor("#FF0000");
		setPaddleColor("#0000FF");
		setTableColor("#EEEEEE");
	}

	return (
		<div className="flex flex-col space-y-8 font-russo text-base sm:text-lg px-4 sm:px-10">
			<div className="flex justify-start">
				<h1 className="text-white">Preview</h1>
			</div>
			<div className="flex justify-center">
				<canvas ref={canvasRef} width={600} height={400} className="w-full max-w-[600px] h-auto border-white border-2" />
			</div>

			<div className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-2 sm:gap-0">
				<div className="flex-1 sm:pl-10 text-white font-semibold">
					<label>Ball Color</label>
				</div>
				<div className="flex-1 sm:pr-10 flex justify-start sm:justify-end">
					<input type="color" className="w-12 h-10 rounded-lg border-2 border-white cursor-pointer transition-transform hover:scale-110" value={ballColor} onChange={(e) => setBallColor(e.target.value)} />
				</div>
			</div>
			<div className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-2 sm:gap-0">
				<div className="flex-1 sm:pl-10 text-white font-semibold">
					<label>Paddle Color</label>
				</div>
				<div className="flex-1 sm:pr-10 flex justify-start sm:justify-end">
					<input type="color" className="w-12 h-10 rounded-lg border-2 border-white cursor-pointer transition-transform hover:scale-110" value={paddleColor} onChange={(e) => setPaddleColor(e.target.value)} />
				</div>
			</div>
			<div className="flex flex-col sm:flex-row w-full items-center sm:items-start gap-2 sm:gap-0">
				<div className="flex-1 sm:pl-10 text-white font-semibold">
					<label>Table Color</label>
				</div>
				<div className="flex-1 sm:pr-10 flex justify-start sm:justify-end">
					<input type="color" className="w-12 h-10 rounded-lg border-2 border-white cursor-pointer transition-transform hover:scale-110" value={tableColor} onChange={(e) => setTableColor(e.target.value)} />
				</div>
			</div>
			<div className="flex flex-col sm:flex-row justify-end sm:pr-10 pt-7 gap-4 text-white">
				<button className="w-full sm:w-[201px] h-[41px] border border-transparent bg-blue-600 rounded-[10px] hover:text-[#0077FF] hover:bg-transparent hover:border-[#0077FF] transition" onClick={resetDefault}>
					Reset Default
				</button>
				<button className="w-full sm:w-[133px] h-[41px] border border-transparent bg-blue-600 rounded-[10px] hover:text-[#0077FF] hover:bg-transparent hover:border-[#0077FF] transition" onClick={sendData}>
					Save
				</button>
			</div>
		</div>

	);
};

export default Game;
