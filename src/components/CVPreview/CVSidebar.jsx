const Sidebar = ({ personalInfo: { photo, address, phoneNumber, email } }) => {
  return (
    <div className="flex flex-col p-5 bg-zinc-100">
      <img className="mb-8" src={photo} />
      <section className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-blue-800 border-b">
          Personal Details
        </h3>
        <div className="flex flex-col gap-4"></div>
        <section className="flex flex-col">
          <h4 className="font-semibold text-base">Address</h4>
          {address}
        </section>
        <section className="flex flex-col">
          <h4 className="font-semibold text-base">Phone Number</h4>
          {phoneNumber}
        </section>
        <section className="flex flex-col">
          <h4 className="font-semibold text-base">Email</h4>
          {email}
        </section>
      </section>
    </div>
  );
};

export default Sidebar;
