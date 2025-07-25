// import { useEffect, useRef, useState } from "react";
// import socket from "../Chat/Frontend/services/socket";




// type ChooseProps = {
//     onChoose: (playerName: string, choice: "X" | "O") => void;
// };

// function Choose({ onChoose }: ChooseProps) {
//     const [name, setName] = useState("");
//     const [choice, setChoice] = useState<"X" | "O" | null>(null);
//     const [currentUser, setcurrentUser] = useState<string>("default user ")
//     const currentUserRef = useRef<string>("");


//     // const handleStartGame = () => {

//     //     if (!choice) {
//     //         alert("Please choose a symbol (X or O).");
//     //         return;
//     //     }

//     //     console.log("---->urrentUserRef")
//     //     console.log(currentUserRef)
//     //     onChoose(currentUserRef.current, choice);
//     // };

//     // useEffect(() => {

//     //     socket.emit('request:init');
//     //     socket.emit('get-my-profile');


//     //     socket.on("profile-data", (socket_data: { user: string }) => {

//     //         currentUserRef.current = socket_data.user;
//     //         setcurrentUser(socket_data.user);

//     //     });

//     //     return () => {
//     //         socket.off("profile-data");
//     //     };
//     // }, []);

//     useEffect(() => {
//         socket.emit("request:init");
//         socket.emit("get-my-profile");

//         socket.on("profile-data", (socket_data: { user: string }) => {
//             currentUserRef.current = socket_data.user;
//             setcurrentUser(socket_data.user);
//         });

//         socket.on("game:waiting", () => {
//             alert("Waiting for another player to join...");
//         });

//         socket.on("game:start", ({ playerX, playerO }) => {
//             onChoose(currentUserRef.current, currentUserRef.current === playerX ? "X" : "O");
//         });

//         // Attempt to join game room
//         socket.emit("join:game");

//         return () => {
//             socket.off("profile-data");
//             socket.off("game:start");
//             socket.off("game:waiting");
//         };

// }, []);


//     return (
//         <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
//             <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>


//             <div className="mb-4">
//                 <p className="text-center mb-2">Choose your symbol:</p>
//                 <div className="flex gap-4 justify-center">
//                     <button
//                         onClick={() => setChoice("X")}
//                         className={`px-6 py-2 rounded-md font-bold ${choice === "X" ? "bg-blue-700" : "bg-[#0077FF]"
//                             }`}
//                     >
//                         X
//                     </button>
//                     <button
//                         onClick={() => setChoice("O")}
//                         className={`px-6 py-2 rounded-md font-bold ${choice === "O" ? "bg-green-700" : "bg-green-600"
//                             }`}
//                     >
//                         O
//                     </button>
//                 </div>
//             </div>

//             <div className="flex justify-center">
//                 {/* <button
//                     onClick={handleStartGame}
//                     className="bg-slate-600 hover:bg-slate-700 px-6 py-2 rounded-md font-bold"
//                 >
//                     Start Game
//                 </button> */}

//             </div>
//         </div>
//     );
// }

// export default Choose;










// import { useEffect, useRef, useState } from "react";
// import socket from "../Chat/Frontend/services/socket";

// type ChooseProps = {
//     onChoose: (playerName: string) => void;
// };

// function Choose({ onChoose }: ChooseProps) {
//     const [currentUser, setCurrentUser] = useState<string>("Loading...");
//     const [isLoading, setIsLoading] = useState(true);
//     const currentUserRef = useRef<string>("");

//     useEffect(() => {
//         socket.emit("request:init");
//         socket.emit("get-my-profile");

//         socket.on("profile-data", (socket_data: { user: string }) => {
//             currentUserRef.current = socket_data.user;
//             setCurrentUser(socket_data.user);
//             setIsLoading(false);
//         });

//         return () => {
//             socket.off("profile-data");
//         };
//     }, []);

//     const handleJoinGame = () => {
//         if (currentUserRef.current) {
//             onChoose(currentUserRef.current);
//         }
//     };

//     return (
//         <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
//             <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
            
//             <div className="mb-6 text-center">
//                 <p className="text-gray-300 mb-2">Player:</p>
//                 <p className="text-xl font-semibold text-blue-400">
//                     {isLoading ? "Loading..." : currentUser}
//                 </p>
//             </div>

//             <div className="mb-6 text-center">
//                 <p className="text-gray-300 text-sm">
//                     You'll be automatically assigned X or O when the game starts.
//                     The first player to join gets X and goes first!
//                 </p>
//             </div>

//             <div className="flex justify-center">
//                 <button
//                     onClick={handleJoinGame}
//                     disabled={isLoading}
//                     className={`px-8 py-3 rounded-md font-bold text-lg ${
//                         isLoading 
//                             ? "bg-gray-600 cursor-not-allowed" 
//                             : "bg-[#0077FF] hover:bg-blue-700"
//                     } transition duration-200`}
//                 >
//                     {isLoading ? "Loading..." : "Join Game"}
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Choose;


import { useEffect, useRef, useState } from "react";
import socket from "../Chat/Frontend/services/socket";

type ChooseProps = {
    onChoose: (playerName: string) => void;
};

function Choose({ onChoose }: ChooseProps) {
    const [currentUser, setCurrentUser] = useState<string>("Loading...");
    const [isLoading, setIsLoading] = useState(true);
    const currentUserRef = useRef<string>("");

    useEffect(() => {
        socket.emit("request:init");
        socket.emit("get-my-profile");

        socket.on("profile-data", (socket_data: { user: string }) => {
            currentUserRef.current = socket_data.user;
            setCurrentUser(socket_data.user);
            setIsLoading(false);
        });

        return () => {
            socket.off("profile-data");
        };
    }, []);

    const handleJoinGame = () => {
        if (currentUserRef.current) {
            onChoose(currentUserRef.current);
        }
    };

    return (
        <div className="bg-[#393E46] rounded-xl shadow-lg p-8 max-w-md w-full text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Welcome!</h2>
            
            <div className="mb-6 text-center">
                <p className="text-gray-300 mb-2">Player:</p>
                <p className="text-xl font-semibold text-blue-400">
                    {isLoading ? "Loading..." : currentUser}
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
                    disabled={isLoading}
                    className={`px-8 py-3 rounded-md font-bold text-lg ${
                        isLoading 
                            ? "bg-gray-600 cursor-not-allowed" 
                            : "bg-[#0077FF] hover:bg-blue-700"
                    } transition duration-200`}
                >
                    {isLoading ? "Loading..." : "Join Game"}
                </button>
            </div>
        </div>
    );
}

export default Choose;