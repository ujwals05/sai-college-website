import { ArrowRight, BookOpen, GraduationCap, Award, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademicsHome = () => {
    const courses = [
        {
            title: 'PUC',
            subtitle: 'Foundation (Arts, Science, Commerce)',
            icon: BookOpen,
            path: '/academics/puc',
            desc: 'A robust foundations for professional degree programs.'
        },
        {
            title: 'BCA',
            subtitle: 'Bachelor of Computer Applications',
            icon: GraduationCap,
            path: '/academics/bca',
            desc: 'Technical proficiency in software and cloud computing.'
        },
        {
            title: 'B.Com',
            subtitle: 'Bachelor of Commerce',
            icon: Award,
            path: '/academics/bcom',
            desc: 'Expertise in finance, accounting, and business.'
        },
        {
            title: 'B.Com Data Analytics',
            subtitle: 'Specialized Business Analytics',
            icon: BarChart3,
            path: '/academics/bcom-data-analytics',
            desc: 'Modern commerce integrated with big data analytics.'
        }
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-4">
                <p className="text-blue-600 font-black text-xs tracking-[0.3em] uppercase">Academic Pathways</p>
                <h1 className="text-4xl lg:text-6xl font-black text-[#101828]">Academic Excellence</h1>
                <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
                    Sai College for Women offers a range of programs designed to empower students through knowledge, skills, and values, preparing them for global opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {courses.map((course) => (
                    <Link
                        key={course.title}
                        to={course.path}
                        className="group p-8 bg-white border border-gray-100 rounded-[2rem] hover:border-blue-200 transition-all hover:shadow-2xl hover:-translate-y-1"
                    >
                        <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#101828] group-hover:text-white transition-colors">
                            <course.icon className="h-7 w-7" />
                        </div>
                        <h3 className="text-2xl font-black text-[#101828] mb-2">{course.title}</h3>
                        <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{course.subtitle}</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">{course.desc}</p>
                        <div className="flex items-center text-xs font-black text-[#101828] tracking-widest group-hover:text-blue-600 transition-colors">
                            EXPLORE PROGRAM <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="bg-[#101828] rounded-[2.5rem] p-10 lg:p-16 text-white overflow-hidden relative">
                <div className="relative z-10 max-w-2xl space-y-6">
                    <h2 className="text-3xl lg:text-4xl font-black">Our Academic Ethos</h2>
                    <p className="text-gray-400 leading-relaxed">
                        We blend traditional pedagogical approaches with modern digital tools, ensuring that our students are not just degree holders but industry-ready professionals.
                    </p>
                    <div className="pt-4">
                        <Link to="/admissions" className="inline-block bg-[#EAB308] text-[#101828] font-black px-8 py-4 rounded-xl hover:bg-white transition-colors">
                            ADMISSIONS OPEN 2026
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>
        </div>
    );
};

export default AcademicsHome;
