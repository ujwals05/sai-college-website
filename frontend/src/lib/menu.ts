export interface MenuItem {
    label: string
    path?: string
    children?: MenuItem[]
}

export const fullMenu: MenuItem[] = [
    {
        label: "About Us",
        children: [
            { label: "Overview", path: "/about" },
            { label: "Our Legacy", path: "/about/history" },
            { label: "Vision & Mission", path: "/about/vision-mission" },
            { label: "Chairman", path: "/about/chairman-message" },
            { label: "Principal", path: "/about/principal-message" },
        ],
    },
    {
        label: "Academics",
        children: [
            { label: "Overview", path: "/academics" },
            {
                label: "PUC",
                children: [
                    { label: "Arts", path: "/academics/puc" },
                    { label: "Science", path: "/academics/puc" },
                    { label: "Commerce", path: "/academics/puc" },
                ]
            },
            { label: "BCA", path: "/academics/bca" },
            { label: "B.COM", path: "/academics/bcom" },
            { label: "B.COM with Data Analytics", path: "/academics/bcom-data-analytics" },
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
