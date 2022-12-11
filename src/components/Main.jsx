import { useState } from "react";
import CVExample from "./CVPreview/CVExample";
import CVForm from "./CVForm";
import emptyCV from "./Utils/emptyCV";
import exampleCV from "./Utils/exampleCV";

const Main = () => {
  const [cv, setCV] = useState(exampleCV);

  const handlePersonalChange = (e) => {
    const { name, value, type } = e.target;

    setCV((cv) => ({
      ...cv,
      personalInfo: {
        ...cv.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleExperienceChange = (e, id) => {
    const { name, value } = e.target;

    setCV((cv) => {
      const newExperience = cv.experience.map((experienceElement) => {
        if (experienceElement.id === id) {
          return { ...experienceElement, [name]: value };
        }
        return experienceElement;
      });

      return {
        ...cv,
        experience: [...newExperience],
      };
    });
  };

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;

    setCv((cv) => {
      const newEducation = cv.education.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...cv, education: [...newEducation] };
    });
  };

  const handleLoadExample = () => {
    setCv(exampleCV);
  };

  const handleReset = () => {
    setCv(emptyCV);
  };

  return (
    <main className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <CVForm
        cv={cv}
        handlePersonalChange={handlePersonalChange}
        handleExperienceChange={handleExperienceChange}
      />
      <CVExample cv={cv} />
    </main>
  );
};

export default Main;
