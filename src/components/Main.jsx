import CVForm from "./CVForm";
import Buttons from "./Buttons";

const Main = () => {
  return (
    <main className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <section className="bg-zinc-100 w-full p-5 rounded shadow-2xl">
        <CVForm />
      </section>
      <section className="bg-zinc-100 w-full p-5 rounded shadow-xl">
        Main
      </section>
    </main>
  );
};

export default Main;
