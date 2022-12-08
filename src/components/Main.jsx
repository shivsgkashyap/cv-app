import CVForm from "./CVForm";

const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <div className="bg-neutral-200 w-full p-5 rounded">
        <CVForm />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="bg-yellow-400 w-full p-5 rounded">Main</div>
    </div>
  );
};

export default Main;
