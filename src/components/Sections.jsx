import Buttons from "./Buttons";

const Sections = ({
  cvSection: { value, name, type, placeHolder, text, color },
  handleChange,
}) => {
  if (type === "title") {
    return <h3 className="text-lg font-semibold mb-1">{value}</h3>;
  } else if (type === "inputBox") {
    return (
      <input
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        type="text"
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      />
    );
  } else if (type === "email") {
    return (
      <input
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        type="email"
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      />
    );
  } else if (type === "tel") {
    return (
      <input
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        type="tel"
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      />
    );
  } else if (type === "textBox") {
    return (
      <textarea
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        rows="4"
        placeholder={placeHolder}
        name={name}
        onChange={handleChange}
      ></textarea>
    );
  } else if (type === "button") {
    return <Buttons text={text} color={color} />;
  } else return null;
};

export default Sections;
