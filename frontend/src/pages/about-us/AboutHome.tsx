import { Link } from "react-router-dom";

const AboutHome = () => {
    return (
        <div className="space-y-20 ">

            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">

                {/* Background Image */}
                <img
                    src="/about-hero.webp"
                    alt="Sai College Campus"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[#101828]/80" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        About Sai College for Women
                    </h1>

                    <p className="max-w-2xl text-[#EAB308] text-lg md:text-xl font-medium">
                        Empowering women through quality education, leadership development,
                        and values-driven academic excellence.
                    </p>
                </div>

            </section>


            {/* Image Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img
                    src="/about1.jpg"
                    alt="Campus"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
                <img
                    src="/about2.jpg"
                    alt="Students"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
                <img
                    src="/about3.jpg"
                    alt="Events"
                    className="rounded-2xl shadow-lg object-cover h-72 w-full"
                />
            </section>

            {/* Overview */}
            <section className="text-center max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-[#101828]">
                    Our Journey
                </h2>
                <p className="text-gray-600 leading-relaxed">
                    Since our establishment, Sai College for Women has been committed to
                    fostering academic excellence, character building, and leadership
                    skills. We believe education should empower women to lead, innovate,
                    and contribute meaningfully to society.
                </p>
            </section>

            {/* Quick Navigation Cards */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                    { title: "History", link: "history" },
                    { title: "Founders", link: "founders" },
                    { title: "Vision & Mission", link: "vision-mission" },
                    { title: "Chairman Message", link: "chairman-message" },
                    { title: "Principal Message", link: "principal-message" },
                ].map((item) => (
                    <Link
                        key={item.title}
                        to={item.link}
                        className="p-6 bg-white border border-gray-100 rounded-2xl text-center hover:bg-[#101828] hover:text-[#EAB308] transition-all hover:shadow-xl font-bold text-[#101828]"
                    >
                        {item.title}
                    </Link>
                ))}
            </section>

        </div>
    );
};

export default AboutHome;
