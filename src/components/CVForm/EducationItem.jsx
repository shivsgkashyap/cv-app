import Inputs from "../Utils/Inputs";
import Buttons from "../Utils/Buttons";

const EducationItem = ({ id, educationItem, onChange, onDelete, onAdd }) => {
  return (
    <>
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="universityName"
        placeholder="University name"
        value={educationItem.universityName}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="city"
        placeholder="City"
        value={educationItem.city}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="degree"
        placeholder="Degree"
        value={educationItem.degree}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="subject"
        placeholder="Subject"
        value={educationItem.subject}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="from"
        placeholder="From"
        value={educationItem.from}
      />
      <Inputs
        onChange={(e) => onChange(e, id)}
        type="text"
        name="to"
        placeholder="To"
        value={educationItem.to}
      />
      <Buttons text="Delete" onClick={() => onDelete(id)} color={"#303030"} />
      <Buttons text="Add" onClick={onAdd} color={"#303030"} />
    </>
  );
};

export default EducationItem;
