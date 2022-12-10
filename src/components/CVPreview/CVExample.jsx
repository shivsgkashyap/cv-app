import placeholder from "../images/placeholder.png";

const CVExample = ({ cv }) => {
  return (
    <div className="grid grid-cols-[2.5fr_1fr] grid-rows-[1fr_7.5fr] sticky top-2.5 self-start bg-zinc-100 w-full shadow-2xl">
      <header className="p-5 bg-blue-800 text-zinc-100 col-span-2">
        <h1 className="text-5xl font-semibold">
          {cv.personalInfo.firstName} {cv.personalInfo.lastName}
        </h1>
        <p className="text-xl mt-1">{cv.personalInfo.title}</p>
      </header>
      <div className="p-5 bg-white">
        <section className="flex flex-col gap-4 mb-8">
          <h3 className="text-lg font-semibold text-blue-800 border-b">
            Description
          </h3>
          <div className="flex gap-4">
            <div className="italic">{cv.personalInfo.description}</div>
          </div>
        </section>
        <section>
          <h3 className="text-lg font-semibold text-blue-800 border-b">
            Experience
          </h3>
          <div className="grid grid-cols-[1fr_1fr] gap-4">
            {cv.experiences.map((experience) => (<>
              <div key={experience.id} className="font-semibold"></div>
              <div className="flex flex-col gap-4"></div></>)}
          </div>
        </section>
        <section></section>
      </div>
      <div className="p-5 bg-zinc-100">
        <img className="mb-8" src={cv.personalInfo.photo} />
        <section className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-blue-800 border-b">
            Personal Details
          </h3>
          <div className="flex flex-col gap-4"></div>
          <section className="flex flex-col">
            <h4 className="font-semibold text-base">Address</h4>
            {cv.personalInfo.address}
          </section>
          <section className="flex flex-col">
            <h4 className="font-semibold text-base">Phone Number</h4>
            {cv.personalInfo.phoneNumber}
          </section>
          <section className="flex flex-col">
            <h4 className="font-semibold text-base">Email</h4>
            {cv.personalInfo.email}
          </section>
        </section>
      </div>
    </div>
  );
};

export default CVExample;
