import { useEffect, useRef, useState } from "react";
import socket from "../../Chat/services/socket";
import { FiUsers } from 'react-icons/fi';
import { RiPingPongFill } from 'react-icons/ri';
import {User} from "../../Chat/types/User"
type ChooseProps = {
    onChoose: (playerName: string | undefined) => void;
};

export default function Choose({ onChoose }: ChooseProps) {
    // const [currentUser, setCurrentUser] = useState<string>("Loading...");
    const [currentUser, setCurrentUser] = useState<Partial<User> | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    // const currentUserRef = useRef<string>("");
    useEffect( () => {
        socket.disconnect();
        socket.connect()
    }, [])

    useEffect(() => {
        socket.emit("request:init");
        socket.emit("get-my-profile");

        socket.on("profile-data", (data: { id: number; username: string; online: boolean }) => {

            // currentUserRef.current = data.id;
            setCurrentUser({ id: data.id, username: data.username, online: data.online });
          });
        //   socket.on("profile:updated", (data: { id: number; username: string; online: boolean }) => {
        //     console.log("data =>>>>> : ", data)
        //     setCurrentUser({ id: data.id, username: data.username, online: data.online });
        // });

        return () => {
            socket.off("profile-data");
            // socket.off("profile:updated");
        };
    }, []);

    const handleJoinGame = () => {
        if (currentUser) {
            onChoose(currentUser?.username);
        }
    };

    return (
        <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
            
            <div className="mb-6 text-center">
                <p className="text-gray-300 mb-2">Player:</p>
                <p className="text-xl font-semibold text-blue-400">
                    {/* {isLoading ? "Loading..." : currentUser} */}
                    {currentUser?.username}
                    {currentUser?.id}
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
                    className={`px-8 py-3 rounded-md font-bold text-lg ${
                         "bg-[#0077FF] hover:bg-blue-700"
                    } transition duration-200`}
                >
                    {"Join Game"}
                </button> 
            </div> 
       
        </div>
    );
}

