import EducationItem from "./EducationItem";

const Education = ({ education, onChange, onAdd, onDelete, title }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    ></EducationItem>
  ));

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {experienceItems}
    </section>
  );
};

export default Education;
