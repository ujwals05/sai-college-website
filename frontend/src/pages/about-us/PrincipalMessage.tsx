const PrincipalMessage = () => {
  return (
    <div className="space-y-10">
      <h1 className="text-4xl font-bold text-[#0b1e3d]">
        Principal's Message
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/principal.jpg"
          alt="Principal"
          className="rounded-3xl shadow-xl object-cover"
        />

        <p className="text-gray-600 leading-relaxed">
          At Sai College for Women, we strive to nurture talent,
          encourage creativity, and provide an inclusive environment
          for academic and personal growth.
        </p>
      </div>
    </div>
  );
};

export default PrincipalMessage;
