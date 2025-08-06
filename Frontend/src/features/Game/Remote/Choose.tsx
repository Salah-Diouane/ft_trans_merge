

import { useEffect, useRef, useState } from "react";
import socket from "../../Chat/Frontend/services/socket";

type ChooseProps = {
    onChoose: (playerName: string) => void;
};

export default function Choose({ onChoose }: ChooseProps) {
    const [currentUser, setCurrentUser] = useState<string>("Loading...");
    const [isLoading, setIsLoading] = useState(true);
    // const currentUserRef = useRef<string>("");

    useEffect(() => {
        socket.emit("request:init");
        socket.emit("get-my-profile");

        socket.on("profile-data", (socket_data: { user: string }) => {
            // currentUserRef.current = socket_data.user;
            setCurrentUser(socket_data.user);
            // setIsLoading(false);
        });

        return () => {
            socket.off("profile-data");
        };
    }, []);

    const handleJoinGame = () => {
        if (currentUser) {
            onChoose(currentUser);
        }
    };

    return (
        <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
            
            <div className="mb-6 text-center">
                <p className="text-gray-300 mb-2">Player:</p>
                <p className="text-xl font-semibold text-blue-400">
                    {/* {isLoading ? "Loading..." : currentUser} */}
                    {currentUser}
                </p>
            </div>

            <div className="mb-6 text-center">
                <p className="text-gray-300 text-sm">
                    You'll be automatically assigned X or O when the game starts.
                    The first player to join gets X and goes first!
                </p>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleJoinGame}
                    // disabled={isLoading}
                    className={`px-8 py-3 rounded-md font-bold text-lg ${
                        // isLoading  ? "bg-gray-600 cursor-not-allowed"   : "bg-[#0077FF] hover:bg-blue-700"
                         "bg-[#0077FF] hover:bg-blue-700"
                    } transition duration-200`}
                >
                    {/* {isLoading ? "Loading..." : "Join Game"} */}
                    {"Join Game"}
                </button>
            </div>
        </div>
    );
}
