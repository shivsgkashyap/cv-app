const Buttons = ({ text, color, margin }) => {
  return (
    <button
      type="button"
      className="p-2 mt-1 rounded font-semibold w-full text-zinc-100"
      style={{ backgroundColor: color, marginTop: margin }}
    >
      {text}
    </button>
  );
};

export default Buttons;
