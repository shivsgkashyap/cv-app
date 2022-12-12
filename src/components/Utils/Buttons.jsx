const Buttons = ({ text, color, margin, onClick }) => {
  return (
    <button
      type="button"
      className="p-2 mt-1 rounded font-semibold w-full text-zinc-100"
      style={{ backgroundColor: color, marginTop: margin }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Buttons;
