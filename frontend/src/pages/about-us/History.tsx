const History = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-[#0b1e3d]">
        History & Milestones
      </h1>

      <div className="space-y-8 border-l-4 border-blue-600 pl-6">
        <div>
          <h3 className="text-xl font-semibold">2005 - Establishment</h3>
          <p className="text-gray-600">
            Sai College for Women was founded with the mission to empower women through education.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2010 - Expansion</h3>
          <p className="text-gray-600">
            Added new academic programs and modern laboratory facilities.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">2020 - Digital Transformation</h3>
          <p className="text-gray-600">
            Integrated smart classrooms and digital learning platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;
