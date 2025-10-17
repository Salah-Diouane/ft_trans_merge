import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../../Chat/services/socket";
import { toast } from "react-hot-toast";

interface UseHandlePongInvitesProps {
  navigate: ReturnType<typeof useNavigate>;
  currentUserRef: { current: string | number | null };
}

const useHandlePongInvites = ({ navigate, currentUserRef }: UseHandlePongInvitesProps) => {
  useEffect(() => {
    const handlePongInvite = (notification: any) => {
      if (!currentUserRef.current) return;

      socket.emit("get-my-profile");
      socket.once("profile-data", (user: any) => {
        if (user?.id !== notification.recipientId) return;

        const [roomId, senderName] = notification.text.split(":");

        toast.custom((t) => (
          <div
            className={`${
              t.visible ? "animate-enter" : "animate-leave"
            } max-w-md w-full bg-[#393E46] shadow-lg rounded-xl p-4`}
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                  🏓
                </div>
              </div>
              <div className="flex-1">
                <p className="font-medium text-white">Pong Challenge!</p>
                <p className="text-sm text-gray-300">{senderName} wants to play</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  socket.emit("accept-invite", { roomId, playerName: String(user.id) });
                  navigate(`/game/ping-pong/invite/${roomId}`);
                  toast.success(`Accepted ${senderName}'s Pong challenge!`);
                  toast.dismiss(t.id);
                }}
                className="flex-1 px-3 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30"
              >
                Accept
              </button>
              <button
                onClick={() => {
                  toast.error(`Declined ${senderName}'s Pong challenge`);
                  toast.dismiss(t.id);
                  socket.emit("refuse-invite", { roomId, playerName: user.id });
                }}
                className="flex-1 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30"
              >
                Decline
              </button>
            </div>
          </div>
        ));
      });
    };

    socket.on("pong-invite-notification", handlePongInvite);

    return () => {
      socket.off("pong-invite-notification", handlePongInvite);
    };
  }, [navigate, currentUserRef]);
};

export default useHandlePongInvites;
