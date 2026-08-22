export const profile = {
    name: "Divyansh Singh",
    firstName: "Divyansh",
    role: "Full Stack Developer",
    location: "Bhopal, Madhya Pradesh, India",
    locationShort: "Bhopal, India",
    pincode: "462022",
    email: "divyansh222f@gmail.com",
    phone: "+91 8349755502",
    github: "https://github.com/divyanshh22",
    githubHandle: "divyanshh22",
    linkedin: "https://www.linkedin.com/in/divyansh-singh-618220318/",
    linkedinHandle: "divyansh-singh",
    resume:
        "https://drive.google.com/file/d/1rcz7i91xW-T3LJzE5S2FwTI80QrK6YU0/view?usp=sharing",
};

export const typedRoles = [
    "Full-Stack Web Applications",
    "Backend Systems",
    "REST APIs",
    "Real-Time Apps with Django",
];

export const heroSummary =
    "Final-year IT student who builds backend and full-stack products with Python, Django and PostgreSQL. I've shipped an ERP, an inventory system and a real-time chat app — the boring parts included: queues, cron jobs and database schemas.";

export const skills = [
    {
        group: "Programming Languages",
        items: [
            { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
            { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
            { name: "Java", icon: "https://cdn.simpleicons.org/openjdk/000000" },
        ],
    },
    {
        group: "Frameworks & Libraries",
        items: [
            { name: "Django", icon: "https://cdn.simpleicons.org/django/44B78B" },
            { name: "Django REST Framework", icon: "https://cdn.simpleicons.org/django/44B78B" },
            { name: "Flask", icon: "https://cdn.simpleicons.org/flask/000000" },
            { name: "Tkinter" },
            { name: "Django Channels" },
        ],
    },
    {
        group: "Frontend",
        items: [
            { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
            { name: "CSS", icon: "https://cdn.simpleicons.org/css3/1572B4" },
            { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
            { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
        ],
    },
    {
        group: "Databases",
        items: [
            { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
            { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1" },
            { name: "SQLite", icon: "https://cdn.simpleicons.org/sqlite/34baaa" },
        ],
    },
    {
        group: "Tools & Platforms",
        items: [
            { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
            { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717" },
            { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
            { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
            { name: "Gunicorn", icon: "https://cdn.simpleicons.org/gunicorn/EF0100" },
            { name: "Cloudinary", icon: "https://cdn.simpleicons.org/cloudinary/3448C5" },
            { name: "Render", icon: "https://cdn.simpleicons.org/render/46E3B7" },
        ],
    },
    {
        group: "Backend Infrastructure",
        items: [
            { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
            { name: "Celery (Async Task Queues)", icon: "https://cdn.simpleicons.org/celery/37814A" },
            { name: "WebSockets" },
        ],
    },
    {
        group: "Core Competencies",
        items: [
            { name: "Backend Development" },
            { name: "Full-Stack Development" },
            { name: "REST API Development" },
            { name: "Database Design" },
            { name: "API Integration" },
            { name: "Authentication & Authorization" },
        ],
    },
    {
        group: "Soft Skills",
        items: [{ name: "Problem-solving" }, { name: "Team Collaboration" }, { name: "Adaptability" }, { name: "Technical Communication" }],
    },
];

export const education = [
    {
        years: "Nov 2022 — Nov 2026",
        title: "B.Tech — Information Technology",
        place: "Oriental Institute of Science and Technology, Bhopal",
        note: "Relevant subjects: OOP, Data Structures & Algorithms, DBMS, Artificial Intelligence",
    },
    {
        years: "Jul 2020 — Jun 2021",
        title: "Senior Secondary School (CBSE)",
        place: "Delhi Public School Nagpur Road, Jabalpur",
    },
];

export const projects = [
    {
        num: "01",
        name: "Django Chat Application",
        date: "May 2026",
        live: "https://django-real-time-chat-application.onrender.com",
        code: "https://github.com/divyanshh22/Django-Real-Time-Chat-Application",
        points: [
            "Created a real-time chat application using Django Channels and Redis, with authentication, session management, and Cloudinary media storage, deployed on Render.",
            "Enhanced the responsive frontend with JavaScript for form validation and dynamic UI interactions on chat pages.",
        ],
        tech: ["Python", "Django", "Channels", "Redis", "WebSockets", "PostgreSQL", "Cloudinary"],
    },
    {
        num: "02",
        name: "Inventory & Order Management System",
        date: "January 2025",
        live: "https://inventory-order-management-system-gttj.onrender.com",
        code: "https://github.com/divyanshh22/Inventory-Order-Management-System",
        points: [
            "Engineered a multi-vendor inventory system with REST APIs, role-based access, stock tracking, automated low-stock alerts, and PDF invoice generation.",
            "Configured Celery and Redis for scheduled background tasks and modeled PostgreSQL schemas for vendors, products, orders, and stock movements.",
        ],
        tech: ["Python", "Django", "DRF", "PostgreSQL", "Redis", "Celery", "ReportLab", "Gunicorn"],
    },
    {
        num: "03",
        name: "College ERP System",
        date: "August 2024",
        live: "https://college-erp-system-t5uy.onrender.com",
        code: "https://github.com/divyanshh22/College-ERP-System",
        points: [
            "Designed a student management system with attendance tracking, academic records, and role-based access that improved administrative efficiency by 40% for over 100 students.",
            "Developed role-based dashboards for students, faculty, and admin with automated attendance calculations and report generation.",
        ],
        tech: ["Python", "Django", "DRF", "PostgreSQL", "Bootstrap", "Gunicorn"],
    },
    {
        num: "04",
        name: "Full-Stack E-Commerce Platform",
        date: "September 2023",
        live: "https://full-stack-e-commerce-platform-6gy3.onrender.com/",
        code: "https://github.com/divyanshh22/Full-Stack-E-Commerce-Platform",
        points: [
            "Built an online shopping platform with product catalog, secure payment integration, and RESTful APIs for real-time inventory and order tracking.",
            "Integrated user authentication, cart and wishlist features, and order management with payment gateway APIs.",
        ],
        tech: ["Python", "Django", "DRF", "Bootstrap", "SQLite", "Payment APIs"],
    },
];

export const certifications = [
    {
        title: "AI/ML for Geodata Analysis",
        issuer: "ISRO",
        icon: "signal",
    },
    {
        title: "Programming Fundamentals with Python",
        issuer: "Infosys",
        icon: "code",
    },
];

export const navSections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "contact", label: "Contact" },
];
