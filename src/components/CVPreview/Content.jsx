const Content = ({ personalInfo, experience, education }) => {
  return (
    <div className="p-5 bg-white">
      <section className="flex flex-col gap-4 mb-8">
        <h3 className="text-lg font-semibold text-blue-800 border-b">
          Description
        </h3>
        <div className="flex gap-4">
          <div id="personalDesc">{personalInfo.description}</div>
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-blue-800 border-b">
          Experience
        </h3>
        <div className="flex flex-col gap-4 mt-2">
          {experience.map((experience) => (
            <div className="flex gap-7 p-1">
              <div key={experience.id} className="w-1/3 font-semibold">
                {experience.from} - {experience.to}
              </div>
              <div className="w-2/3">
                <section className="flex flex-col">
                  <h4 className="text-base font-semibold">
                    {experience.position}
                  </h4>
                  <div className="italic">
                    {experience.company}, {experience.city}
                  </div>
                </section>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-blue-800 border-b">
          Experience
        </h3>
        <div className="flex flex-col gap-4 mt-2">
          {education.map((education) => (
            <div className="flex gap-7 p-1">
              <div key={education.id} className="w-1/3 font-semibold">
                {education.from} - {education.to}
              </div>
              <div className="w-2/3">
                <section className="flex flex-col">
                  <h4 className="text-base font-semibold">
                    {education.universityName}, {education.city}
                  </h4>
                  <p className="italic">Degree: {education.degree}</p>
                  <p className="italic">Subject: {education.subject}</p>
                </section>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Content;
