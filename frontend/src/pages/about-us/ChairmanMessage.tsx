const ChairmanMessage = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-[#0b1e3d]">
        Chairman's Message
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/chairman.jpg"
          alt="Chairman"
          className="rounded-3xl shadow-xl object-cover"
        />

        <p className="text-gray-600 leading-relaxed">
          Welcome to Sai College for Women. Our mission is to provide
          transformative education that empowers women to excel academically
          and socially. We are committed to building leaders of tomorrow.
        </p>
      </div>
    </div>
  );
};

export default ChairmanMessage;
