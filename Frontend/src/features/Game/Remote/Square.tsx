type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
  disabled?: boolean;
};

export default function Square({ value, onSquareClick, disabled = false }: SquareProps) {
  return (
    <button
      className={`bg-[#393E46] text-white text-4xl font-mono rounded-xl border-2 border-[#0077FF] shadow-lg hover:text-white hover:scale-105 transition duration-300 ease-in-out flex items-center justify-center h-20 sm:h-24 ${
        value ? "animate-pulse" : ""
      } ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
      onClick={onSquareClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
