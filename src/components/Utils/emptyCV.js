import { v4 as uuidv4 } from "uuid";
import placeholder from "../../images/placeholder.png";

const emptyCV = {
  personalInfo: {
    firstName: "",
    lastName: "",
    title: "",
    photo: placeholder,
    address: "",
    phoneNumber: "",
    email: "",
    description: "",
  },
  experience: [
    {
      id: uuidv4(),
      position: "",
      company: "",
      city: "",
      from: "",
      to: "",
    },
  ],
  education: [
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
};

export default emptyCV;
