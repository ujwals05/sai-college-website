export interface MenuItem {
    label: string
    path?: string
    children?: MenuItem[]
}

export const fullMenu: MenuItem[] = [
    {
        label: "About Us",
        children: [
            { label: "Our Legacy", path: "/about#legacy" },
            { label: "Vision & Mission", path: "/about#vision-mission" },
            { label: "Principal's Message", path: "/about#principal-message" },
        ],
    },
    {
        label: "Academics",
        children: [
            { label: "PUC", path: "/academics#pre-university" },
            { label: "BCA", path: "/academics#bca" },
            { label: "Commerce", path: "/academics#b.com" },
        ],
    },
    {
        label: "Admissions",
        path: "/admissions",
    },
    {
        label: "Campus",
        children: [
            { label: "Infrastructure", path: "/infrastructure" },
            { label: "Library", path: "/library" },
        ]
    },
    {
        label: "Student Life",
        children: [
            { label: "Non Academics", path: "/non-academics" },
            { label: "Student Welfare", path: "/student-welfare" },
        ],
    },
    {
        label: "Faculty",
        path: "/faculty",
    },
    {
        label: "Contact Us",
        path: "/contact",
    },
]
