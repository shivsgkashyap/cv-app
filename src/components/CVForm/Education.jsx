import EducationItem from "./EducationItem";

const Education = ({ education, onChange, onAdd, onDelete, title }) => {
  const educationItems = education.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
      onAdd={onAdd}
    ></EducationItem>
  ));

  return (
    <section className="flex flex-col gap-2 mt-4">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {educationItems}
    </section>
  );
};

export default Education;
