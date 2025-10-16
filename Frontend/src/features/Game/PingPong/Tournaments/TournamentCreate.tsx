import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../../Chat/services/socket";
import { UserPlayer } from "./types";
import { useTranslation } from "react-i18next";

const TournamentCreate: React.FC = () => {
  const {t} = useTranslation();
  const [name, setName] = useState("");
  const [maxPlayers, setMaxPlayers] = useState(4);
  const [ownerPlays, setOwnerPlays] = useState(true);
  const [ownerName, setOwnerName] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    socket.connect();
    socket.emit("get-my-profile");
    const onProfile = (user: UserPlayer) => {
      if (user?.id) setOwnerName(user.id);
    };
    socket.on("profile-data", onProfile);
    return () => {socket.off("profile-data", onProfile);}
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter a tournament name.");
    if (!ownerName) return alert("User not loaded yet.");

    try {
      setLoading(true);
      console.log("Creating tournament:", { name, maxPlayers, ownerPlays, ownerName });
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/tournament`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          maxPlayers,
          ownerPlays,
          ownerName,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error);
      }
      
      navigate("/game/ping-pong/tournament-game/tournament-join");
    } catch (err: Error | any) {
      console.log(err);
      alert(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="min-h-[70vh] w-full max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-6">{t("create_trn")}</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <label className="block">
          <span className="text-gray-300">{t("name")}</span>
          <input
            className="mt-1 w-full rounded-lg bg-[#2b2f36] text-white p-3 outline-none border border-white/10"
            placeholder="Weekend Cup"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <span className="flex items-center gap-3">
          <label className="text-gray-300">{t("max_players")} {maxPlayers}</label>
        </span>

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={ownerPlays}
            onChange={(e) => setOwnerPlays(e.target.checked)}
          />
          <span className="text-gray-300">{t("own_player")}</span>
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#0077FF] hover:bg-blue-600 text-white font-semibold p-3 disabled:opacity-50"
        >
          {loading ? t("creating") : t("Create")}
        </button>
      </form>
    </div>
  );
};

export default TournamentCreate;
