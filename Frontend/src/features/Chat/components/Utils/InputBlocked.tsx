interface InputBlockedprops {
  input: string;
  setInput: (value: string) => void;
  isBlocked: boolean;
  onSend: () => void;
}

const InputBlocked: React.FC<InputBlockedprops> = ({
  input,
  setInput,
  onSend,
  isBlocked,
}) => {
  return (
    <div className="relative mt-4 opacity-30">
      <input
        type="text"
        placeholder="You have blocked this user."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isBlocked) onSend();
        }}
        className="w-full bg-[#393E46] h-14 text-center placeholder-white rounded-full py-3 px-5 pr-12 outline-none focus:ring-2 focus:ring-[#0077FF] transition"
        disabled={isBlocked}
      />
    </div>
  );
};

export default InputBlocked;
