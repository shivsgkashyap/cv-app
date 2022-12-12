import Inputs from "../Utils/Inputs";

const Personal = ({ personalInfo, onChange, title }) => {
  return (
    <section className="flex flex-col gap-2">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <div className="flex flex-col gap-2">
        <Inputs
          onChange={(e) => onChange(e)}
          type="text"
          name="firstName"
          placeholder="First name"
          value={personalInfo.firstName}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="text"
          name="lastName"
          placeholder="Last name"
          value={personalInfo.lastName}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="text"
          name="title"
          placeholder="Title"
          value={personalInfo.title}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="photo"
          name="photo"
          label="Photo"
          value={personalInfo.photo}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="text"
          name="address"
          placeholder="Address"
          value={personalInfo.address}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          value={personalInfo.phoneNumber}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="email"
          name="email"
          placeholder="Email"
          value={personalInfo.email}
        />
        <Inputs
          onChange={(e) => onChange(e)}
          type="textarea"
          name="description"
          placeholder="Description"
          value={personalInfo.description}
        />
      </div>
    </section>
  );
};

export default Personal;
