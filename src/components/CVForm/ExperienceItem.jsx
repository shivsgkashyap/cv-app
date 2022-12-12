import Inputs from "../Utils/Inputs";
import Buttons from "../Utils/Buttons";

const ExperienceItem = ({ id, experienceItem, onChange, onDelete, onAdd }) => {
  return (
    <div className="flex flex-col gap-2">
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="position"
        placeholder="Position"
        value={experienceItem.position}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="company"
        placeholder="Company"
        value={experienceItem.company}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={experienceItem.city}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={experienceItem.from}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={experienceItem.to}
      />
      <Buttons text="Delete" onClick={() => onDelete(id)} color={"#303030"} />
      <Buttons text="Add" onClick={onAdd} color={"#303030"} />
    </div>
  );
};

export default ExperienceItem;
