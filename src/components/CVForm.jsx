const CVForm = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
      <form method="post" action="/">
        <input
          type="text"
          className="rounded w-full p-1 border border-transparent focus:border-gray-400 outline-none"
          placeholder="First name"
          name=""
        />
      </form>
    </div>
  );
};

export default CVForm;
