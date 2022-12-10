import { useState } from "react";
import CVExample from "./CVExample";
import CVForm from "./CVForm";
import emptyCV from "./Utils/emptyCV";
import exampleCV from "./Utils/exampleCV";

const Main = () => {
  const [cv, setCV] = useState(exampleCV);

  return (
    <main className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <CVForm cv={cv} />
      <CVExample cv={cv} />
    </main>
  );
};

export default Main;
