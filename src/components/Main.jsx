import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";
import CVForm from "./CVform/CVForm";
import CVExample from "./CVPreview/CVExample";
import exampleCV from "./Utils/exampleCV";
import emptyCV from "./Utils/emptyCV";

const Main = () => {
  const [cv, setCV] = useState(exampleCV);

  const handlePersonalChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      handleChangeFile(e);
      return;
    }

    setCV((cv) => ({
      ...cv,
      personalInfo: {
        ...cv.personalInfo,
        [name]: value,
      },
    }));
  };

  const handleChangeFile = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setCv((prevState) => ({
        ...prevState,
        personalInfo: {
          ...prevState.personalInfo,
          [name]: reader.result,
        },
      }));
    };
    reader.readAsDataURL(file);
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

  const handleAddExperience = () => {
    setCv((prevState) => ({
      ...prevState,
      experience: [
        ...prevState.experience,
        {
          id: uuidv4(),
          position: "",
          company: "",
          city: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteExperience = (id) => {
    setCv((prevState) => {
      const newExperience = prevState.experience.filter(
        (experienceItem) => experienceItem.id !== id
      );
      return { ...prevState, experience: [...newExperience] };
    });
  };

  const handleAddEducation = () => {
    setCv((prevState) => ({
      ...prevState,
      education: [
        ...prevState.education,
        {
          id: uuidv4(),
          universityName: "",
          city: "",
          degree: "",
          subject: "",
          from: "",
          to: "",
        },
      ],
    }));
  };

  const handleDeleteEducation = (id) => {
    setCv((prevState) => {
      const newEducation = prevState.education.filter(
        (educationItem) => educationItem.id !== id
      );
      return { ...prevState, education: [...newEducation] };
    });
  };

  const handleLoadExample = () => {
    setCv(exampleCV);
  };

  const handleReset = () => {
    setCv(emptyCV);
  };

  const componentRef = useRef();

  // throws warning because react-to-print uses findDOMNode
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <main className="grid grid-cols-2 gap-12 max-w-7xl mx-auto mt-2 p-7 font-raleway">
      <CVForm
        cv={cv}
        onChangePersonal={handlePersonalChange}
        onChangeExperience={handleExperienceChange}
        onAddExperience={handleAddExperience}
        onDeleteExperience={handleDeleteExperience}
        onChangeEducation={handleEducationChange}
        onAddEducation={handleAddEducation}
        onDeleteEducation={handleDeleteEducation}
        onPrint={handlePrint}
        onLoadExample={handleLoadExample}
        onReset={handleReset}
      />
      <CVExample cv={cv} />
    </main>
  );
};

export default Main;
