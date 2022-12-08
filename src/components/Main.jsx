import CVForm from "./CVForm";
import Buttons from "./Buttons";

const Main = () => {
  return (
    <div className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <div className="bg-zinc-200 w-full p-5 rounded shadow-2xl">
        <CVForm />
      </div>
      <div className="bg-zinc-200 w-full p-5 rounded shadow-xl">Main</div>
    </div>
  );
};

export default Main;
