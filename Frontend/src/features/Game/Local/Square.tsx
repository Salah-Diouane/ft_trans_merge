type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};
 
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      className={`bg-[#393E46] text-white text-4xl font-mono rounded-xl border-2 border-[#0077FF] shadow-lg  hover:text-white hover:scale-105
      transition duration-300 ease-in-out flex items-center justify-center h-20 sm:h-24 ${
        value ? "animate-pulse" : ""
      }`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}