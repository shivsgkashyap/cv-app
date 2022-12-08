import EditSection from "./EditSection";
import Button from "./Button";

const personalInfo = [];
const experience = [];
const education = [];

const Main = () => {
  return (
    <div className="grid grid-cols-2 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <div className="bg-yellow-200 w-full p-5">
        <EditSection />
        <EditSection />
        <EditSection />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="bg-yellow-400 w-full p-5">Main</div>
    </div>
  );
};

export default Main;
