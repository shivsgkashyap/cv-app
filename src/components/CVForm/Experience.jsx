import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience, onChange, onAdd, onDelete, title }) => {
  const experienceItems = experience.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
      onAdd={onAdd}
    />
  ));

  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {experienceItems}
    </section>
  );
};

export default Experience;
