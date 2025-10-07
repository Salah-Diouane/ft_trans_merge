import React, { useRef, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { data } from "react-router";
import { Square_Costume } from "../Game/Tic-Tac/Local/Componant/Square";
import TicTac from "./Utils/Tictac";
import Pong from "./Utils/PingPong";

const Game = () => {
  const [activeTab, setActiveTab] = useState<"pingPong" | "ticTac">("pingPong");
  const [showTic, setShowTic] = useState<boolean>(false);
  const [showPong, setShowPong] = useState<boolean>(true);

  return (
    <div className="flex flex-col space-y-8 font-russo text-base sm:text-lg px-4 sm:px-10">
      <div className="flex flex-row justify-center gap-4">
        <button
          onClick={() => {
            setActiveTab("pingPong");
            setShowPong(true);
            setShowTic(false);
          }}
          className={`${
            activeTab === "pingPong"
              ? " text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-white hover:text-blue-600"
          } cursor-pointer font-russo text-2xl flex items-center gap-1`}
        >
          Ping Pong
        </button>
        <button
          onClick={() => {
            setActiveTab("ticTac");
            setShowTic(true);
            setShowPong(false);
          }}
          className={`${
            activeTab === "ticTac"
              ? " text-blue-600 border-b-2 border-blue-600 pb-1"
              : "text-white hover:text-blue-600"
          } cursor-pointer font-russo text-2xl flex items-center gap-1`}
        >
          Tic Tac Toe
        </button>
      </div>

      {showPong && <Pong showPong={showPong} />}

      {showTic && <TicTac />}
    </div>
  );
};

export default Game;
