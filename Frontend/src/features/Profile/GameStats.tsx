import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  ChartTypeRegistry,
} from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

type game_state = {
  win: number;
  lose: number;
  draw: number;
  rank?: number;
};

const Gamestatenormal = ({ win, lose, draw, rank }: game_state) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 2xl:gap-[220px] w-full ove">
        <div className="flex flex-col w-[100px] h-[57px] border border-[#393E46] bg-[#393E46] rounded-[15px] items-center text-green-600">
          <h1>Wins</h1>
          <h1>{win}</h1>
        </div>
        <div className="flex flex-col w-[100px] h-[57px] border border-[#393E46] bg-[#393E46] rounded-[15px] items-center text-red-600">
          <h1>Loses</h1>
          <h1>{lose}</h1>
        </div>
        <div className="flex flex-col w-[100px] h-[57px] border border-[#393E46] bg-[#393E46] rounded-[15px] items-center text-blue-500">
          <h1>Draws</h1>
          <h1>{draw}</h1>
        </div>
        <div className="flex flex-col w-[100px] h-[57px] border border-[#393E46] bg-[#393E46] rounded-[15px] items-center text-yellow-300">
          <h1>Matches</h1>
          <h1>{win + lose + draw}</h1>
        </div>
        <div className="flex flex-col w-[100px] h-[57px] border border-[#393E46] bg-[#393E46] rounded-[15px] items-center text-[#00E1E4]">
          <h1>Rank</h1>
          <h1>{rank}</h1>
        </div>
      </div>
    </>
  );
};

const GamestateDoughnut = ({ win, lose, draw }: game_state) => {
  const totalMatches = win + lose + draw;

  const data: ChartData<"doughnut", number[], string> = {
    labels: ["Wins", "Losses", "Draws"],
    datasets: [
      {
        data: [win, lose, draw],
        backgroundColor: ["green", "red", "blue"],
        borderColor: "#222831",
        borderWidth: 4,
      },
    ],
  };

  const centerTextPlugin = {
    id: "centerText",
    afterDraw: (chart: any) => {
      const { width, height } = chart;
      const ctx = chart.ctx;

      const dataArray = chart.data.datasets[0].data as number[];
      const totalMatches = dataArray.reduce((sum, val) => sum + val, 0);

      ctx.restore();
      const fontSize = (height / 180).toFixed(2);
      ctx.font = `${fontSize}em russo`;
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";

      const text = `${totalMatches > 0 ? `${totalMatches} Matche` : ""}`;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff",
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const data = context.dataset.data as number[];
            const total = data.reduce(
              (sum, val) => sum + (typeof val === "number" ? val : 0),
              0
            );
            const value = context.raw as number;
            const percentage =
              total > 0 ? ((value / total) * 100).toFixed(2) : 0;
            return `${context.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    // <div className="w-full p-4 space-y-0 rounded-xl bg-[#222831]">
    <div className="w-full p-4 space-y-0 rounded-xl ">
      <h2 className="text-center text-xl font-bold text-white mb-10 font-russo tracking-wide drop-shadow-md">
        🏆 Game Results Overview
      </h2>
      {/* Responsive height: 250px on mobile, 350px on md, 400px on lg */}
      <div className="h-[250px] md:h-[350px] lg:h-[370px]">
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </div>
    </div>
  );
};

export default function GameStats({
  type,
  username,
}: {
  type: string;
  username: string;
}) {
  const [GameSates, setGameSates] = useState<game_state>({
    win: 0,
    lose: 0,
    draw: 0,
  });
  const [rank, setRank] = useState(0);
  useEffect(() => {
    const getGameSate = async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/profile/GameStats/${username}`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      if (response.ok) {
        const GameSate = (await response.json()) as {
          gamestate: game_state;
          rank: number;
        };
        setGameSates(GameSate.gamestate);
        setRank(GameSate.rank);
        console.log("###### : ", GameSate);
        console.log("###### : ", GameSates);
      } else {
        console.log("###### :  problem");
      }
    };
    getGameSate();
  }, [username]);

  const wins = GameSates?.win;
  const losses = GameSates?.lose;
  const draws = GameSates?.draw;

  return type === "Doughnut" ? (
    <GamestateDoughnut win={wins} lose={losses} draw={draws} />
  ) : (
    <Gamestatenormal win={wins} lose={losses} draw={draws} rank={rank} />
  );
}
