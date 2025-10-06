// components/EmptyState.tsx
import React from "react";
import Subtract from "../../Assets/Subtract.svg";
import gf from "../Assets/gf4.gif";

const EmptyState = () => (
  <div className="flex flex-col w-full h-full rounded-2xl p-[2px] max-lg:h-full">
    <div
      className="flex flex-col h-full justify-center items-center rounded-[inherit] space-y-6 p-4"
      style={{ backgroundImage: `url(${Subtract})` }}
    >
      <img src={gf} className="h-36 rounded-2xl shadow-2xl" />
      <div className="text-center space-y-4 max-w-md">
        <h2 className="text-4xl font-semibold text-slate-100 mb-3 tracking-tight">
          Choose a Contact!
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed font-light">
          Select a conversation from your contact list to begin messaging.
        </p>
      </div>
    </div>
  </div>
);

export default EmptyState;
