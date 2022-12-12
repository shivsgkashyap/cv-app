const Header = ({ personalInfo: { firstName, lastName, title } }) => {
  return (
    <header className="p-5 bg-blue-800 text-zinc-100 col-span-2">
      <h1 className="text-5xl font-semibold">
        {firstName} {lastName}
      </h1>
      <p className="text-xl mt-1">{title}</p>
    </header>
  );
};

export default Header;
