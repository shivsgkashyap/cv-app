import Personal from "./Personal";
import Education from "./Education";
import Experience from "./Experience";
import Buttons from "../Utils/Buttons";

const CVForm = ({
  cv,
  onPersonalChange,
  onExperienceChange,
  onAddExperience,
  onDeleteExperience,
  onEducationChange,
  onAddEducation,
  onDeleteEducation,
  onPrint,
  onLoadExample,
  onReset,
}) => {
  return (
    <div className="flex flex-col bg-zinc-100 w-full p-5 rounded shadow-2xl">
      <Personal
        personalInfo={cv.personalInfo}
        onChange={onPersonalChange}
        title={"Personal Information"}
      />
      <Experience
        experience={cv.experience}
        onChange={onExperienceChange}
        onAdd={onAddExperience}
        onDelete={onDeleteExperience}
        title={"Experience"}
      />
      <Education
        education={cv.education}
        onChange={onEducationChange}
        onAdd={onAddEducation}
        onDelete={onDeleteEducation}
        title={"Education"}
      />
      <>
        <Buttons
          text="Generate PDF"
          onClick={onPrint}
          color={"#32CD32"}
          margin={"2rem"}
        />
        <Buttons
          text="Load Example"
          onClick={onLoadExample}
          color={"#FFA500"}
          margin={"0.5rem"}
        />
        <Buttons
          text="Reset"
          onClick={onReset}
          color={"red"}
          margin={"0.5rem"}
        />
      </>
    </div>
  );
};

export default CVForm;
