const VisionMission = () => {
  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-bold text-[#0b1e3d]">
        Vision & Mission
      </h1>

      <div className="bg-gray-50 p-10 rounded-3xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Our Vision
        </h2>
        <p className="text-gray-600">
          To be a premier institution fostering academic excellence,
          innovation, and leadership among women.
        </p>
      </div>

      <div className="bg-gray-50 p-10 rounded-3xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">
          Our Mission
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          <li>Provide quality education.</li>
          <li>Promote ethical and social responsibility.</li>
          <li>Encourage leadership and innovation.</li>
          <li>Support holistic development.</li>
        </ul>
      </div>
    </div>
  );
};

export default VisionMission;
