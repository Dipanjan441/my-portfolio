import { FaCode, FaMobileAlt, FaDatabase, FaGlobe } from "react-icons/fa";
import aboutMeImage1 from '../assets/images/about-me-1.jpg';
import aboutMeImage2 from '../assets/images/about-me-2.jpg';
import aboutMeImage3 from '../assets/images/about-me-3.jpg';
import heroImage1 from '../assets/images/dip/IMG_1647-min.jpg';
import heroImage2 from '../assets/images/dip/me.jpg';
import heroImage3 from '../assets/images/dip/me-3.jpg';
import heroImage4 from '../assets/images/dip/me-4.jpg';

//Projects section data
export const ProjectData = [
    {
        id: 1,
        icon: FaCode,
        title: "Dynamic CMS Website",
        description: "Contributed to the enhancement of an existing CMS website built on WordPress, designed to display various types of file data in a tabular format through a public-facing UI. The admin panel allows seamless uploading, updating, and management of data, making the site fully dynamic and secure.",
        buttonText: "View Project",
        technologies: ["WordPress","PHP","MySQL","jQuery","Bootstrap","Semantic HTML"],
        onButtonClick: () => console.log('no link avaialable'),
    },
    {
        id: 2,
        icon: FaMobileAlt,
        title: "Quick Commerce App",
        description: "Developed two Android applications (Picker and Driver) for a quick commerce platform, enabling seamless order fulfillment and delivery management. Additionally, built a web-based back panel to streamline onboarding, task assignments, and operational workflows. The system supports real-time notifications, automated task allocation, and complex order modifications, ensuring smooth logistics and enhanced efficiency.",
        buttonText: "View Project",
        technologies: ["React","React Native","Tanstack Query","Redux-Toolkit","Material UI","React Hook Form"],
        onButtonClick: () => console.log('no link avaialable'),
    },
    {
        id: 3,
        icon: FaDatabase,
        title: "Job Evalutation Tool",
        description: "Developed the frontend of a feature-rich form-based application designed for the client’s internal staff to efficiently evaluate job performance and manage payroll changes. The application includes dynamic forms, real-time validation, and multilingual support, ensuring a seamless and user-friendly experience.",
        buttonText: "View Project",
        technologies: ["React","react-i18next","Redux-Toolkit","Material UI","Styled Components"],
        onButtonClick: () => console.log('no link avaialable'),
    },
    {
        id: 4,
        icon: FaMobileAlt,
        title: "Uber Eats Clone (Frontend)",
        description: "Developed a frontend clone of the Uber Eats app using React Native, replicating the UI and user experience of the original app. Implemented features such as restaurant listings, food categories, cart management, and interactive navigation to ensure a seamless user experience.",
        buttonText: "View Project",
        technologies: ["React Native","Redux","React Navigation"],
        onButtonClick: () => window.open("https://github.com/Dipanjan441/UberEats-clone", "_blank"),
    },
    {
        id: 5,
        icon: FaGlobe,
        title: "Personal Portfolio Website",
        description: "Designed and developed a personal portfolio website to showcase projects, skills, and experience. Built using React and TypeScript, with smooth animations powered by Framer Motion and an interactive project showcase using SwiperJS. The website is fully responsive and provides an engaging user experience.",
        buttonText: "View Project",
        technologies: ["React", "TypeScript", "Framer Motion", "SwiperJS", "Bootstrap"],
        onButtonClick: () => window.open("https://github.com/Dipanjan441/my-portfolio", "_blank"),
    },
];

//hero section data
export const HeroData = {
    title: "Dipanjan Tripathi",
    subTitle: ["Web Developer","Frontend Developer", "Power BI Developer","Photographer"],
    tagLine: "I build, maintain & scale high-performance React applications with excellence.",
    description: "I’m a Web & Mobile Developer with 3 years of expertise in React, React Native, and Next.js, building high-performance, scalable, and visually engaging web and native applications. 🚀",
    heroImage: [
        {
            id: 1,
            image: heroImage1
        },
        {
            id: 2,
            image: heroImage2
        },
        {
            id: 3,
            image: heroImage3
        },
        {
            id: 4,
            image: heroImage4
        },
    ]
}

//about me section data
export const AboutMeData = {
    aboutText: ["I’m a results-driven Web & Mobile Developer with a strong foundation in React, React Native, and Next.js. Over the past three years, I have built high-performance, scalable, and visually appealing industry-grade applications that are actively used by businesses and end users to streamline workflows and enhance experiences.",
        "My expertise spans frontend architecture, state management, API integration, and performance optimization, ensuring seamless and efficient applications. Whether it's crafting a responsive web interface or developing a feature-rich native application, I focus on clean code, scalability, and user-centric design.",
        "Beyond frontend development, I’m also exploring backend technologies like Express.js and MongoDB to expand my skill set and build more comprehensive solutions. I love diving into new technologies, staying ahead of trends, and continuously improving my craft to create cutting-edge applications. 🚀"],
    sliderImages: [
        {
            id: 1,
            image: aboutMeImage1
        },
        {
            id: 2,
            image: aboutMeImage2
        },
        {
            id: 3,
            image: aboutMeImage3
        }
    ]
}