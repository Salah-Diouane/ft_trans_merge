import { useEffect, useRef, useState } from "react";
import socket from "../Chat/Frontend/services/socket";




type ChooseProps = {
    onChoose: (playerName: string, choice: "X" | "O") => void;
};

function Choose({ onChoose }: ChooseProps) {
    const [name, setName] = useState("");
    const [choice, setChoice] = useState<"X" | "O" | null>(null);
    const [currentUser, setcurrentUser] = useState<string>("default user ")
    const currentUserRef = useRef<string>("");


    const handleStartGame = () => {

        if (!choice) {
            alert("Please choose a symbol (X or O).");
            return;
        }

        console.log("----?urrentUserRef")
        console.log(currentUserRef)
        onChoose(currentUserRef.current, choice);
    };

    useEffect(() => {

        socket.emit('request:init');
        socket.emit('get-my-profile');


        socket.on("profile-data", (socket_data: { user: string }) => {

            currentUserRef.current = socket_data.user;
            setcurrentUser(socket_data.user);

        });

        return () => {
            socket.off("profile-data");
        };
    }, []);


    return (
        <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>


            <div className="mb-4">
                <p className="text-center mb-2">Choose your symbol:</p>
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => setChoice("X")}
                        className={`px-6 py-2 rounded-md font-bold ${choice === "X" ? "bg-blue-700" : "bg-[#0077FF]"
                            }`}
                    >
                        X
                    </button>
                    <button
                        onClick={() => setChoice("O")}
                        className={`px-6 py-2 rounded-md font-bold ${choice === "O" ? "bg-green-700" : "bg-green-600"
                            }`}
                    >
                        O
                    </button>
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleStartGame}
                    className="bg-slate-600 hover:bg-slate-700 px-6 py-2 rounded-md font-bold"
                >
                    Start Game
                </button>

            </div>
        </div>
    );
}

export default Choose;