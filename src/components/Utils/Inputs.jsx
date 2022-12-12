const Inputs = ({ type, name, placeholder, onChange, value, label }) => {
  if (type === "text" || type === "email" || type === "tel") {
    return (
      <input
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
      />
    );
  } else if (type === "textarea") {
    return (
      <textarea
        className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
        rows="4"
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        value={value}
      ></textarea>
    );
  } else if (type === "photo") {
    return (
      <label className="p-2 rounded border border-transparent bg-white active:border-gray-400 outline-none">
        <input type="file" onChange={onChange} name={name} className="hidden" />
        {label}
      </label>
    );
  } else return null;
};

export default Inputs;
