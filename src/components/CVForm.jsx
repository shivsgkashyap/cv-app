import Sections from "./Sections";
import Buttons from "./Buttons";

const CVForm = () => {
  const sectionOne = [
    { value: "Personal Information", type: "title" },
    {
      name: "firstName",
      type: "inputBox",
      placeHolder: "First name",
    },
    {
      name: "lastName",
      type: "inputBox",
      placeHolder: "Last name",
    },
    {
      name: "title",
      type: "inputBox",
      placeHolder: "Title",
    },
    {
      name: "photo",
      type: "inputBox",
      placeHolder: "Photo",
    },
    {
      name: "address",
      type: "inputBox",
      placeHolder: "Address",
    },
    {
      name: "phoneNumber",
      type: "tel",
      placeHolder: "Phone Number",
    },
    {
      name: "email",
      type: "email",
      placeHolder: "Email",
    },
    {
      name: "desc",
      type: "textBox",
      placeHolder: "Description",
    },
  ];

  const sectionTwo = [
    { value: "Experience", type: "title" },
    {
      name: "position",
      type: "inputBox",
      placeHolder: "Position",
    },
    {
      name: "company",
      type: "inputBox",
      placeHolder: "Company",
    },
    {
      name: "city",
      type: "inputBox",
      placeHolder: "City",
    },
    {
      name: "dateFrom",
      type: "inputBox",
      placeHolder: "From",
    },
    {
      name: "dateTo",
      type: "inputBox",
      placeHolder: "To",
    },
    {
      name: "del",
      type: "button",
      text: "Delete",
      color: "#303030",
    },
    {
      name: "add",
      type: "button",
      text: "Add",
      color: "#303030",
    },
  ];

  const sectionThree = [
    { value: "Education", type: "title" },
    {
      name: "uniName",
      type: "inputBox",
      placeHolder: "University Name",
    },
    {
      name: "city",
      type: "inputBox",
      placeHolder: "City",
    },
    {
      name: "degree",
      type: "inputBox",
      placeHolder: "Degree",
    },
    {
      name: "subject",
      type: "inputBox",
      placeHolder: "Subject",
    },
    {
      name: "dateFrom",
      type: "inputBox",
      placeHolder: "From",
    },
    {
      name: "dateTo",
      type: "inputBox",
      placeHolder: "To",
    },
    {
      name: "del",
      type: "button",
      text: "Delete",
      color: "#303030",
    },
    {
      name: "add",
      type: "button",
      text: "Add",
      color: "#303030",
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-2">
        {sectionOne.map((cvSection) => (
          <Sections cvSection={cvSection} />
        ))}
      </section>

      <section className="flex flex-col gap-2 mt-7">
        {sectionTwo.map((cvSection) => (
          <Sections cvSection={cvSection} />
        ))}
      </section>

      <section className="flex flex-col gap-2 mt-7">
        {sectionThree.map((cvSection) => (
          <Sections cvSection={cvSection} />
        ))}
      </section>

      <Buttons text={"Generate PDF"} color={"#32CD32"} margin={"2rem"} />
      <Buttons text={"Load Example"} color={"#FFA500"} margin={"0.5rem"} />
      <Buttons text={"Reset"} color={"red"} margin={"0.5rem"} />
    </div>
  );
};

export default CVForm;
