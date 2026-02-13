const Founders = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-[#0b1e3d]">Our Founders</h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/founder.jpg"
          alt="Founder"
          className="rounded-3xl shadow-xl w-full object-cover"
        />

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Dr. [Founder Name]
          </h2>
          <p className="text-gray-600 leading-relaxed">
            With a vision to create an institution dedicated to women’s empowerment,
            our founder established Sai College for Women to provide holistic education
            combining academic rigor and moral values.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Founders;
