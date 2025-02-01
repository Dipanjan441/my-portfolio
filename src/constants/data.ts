import sliderImage from '../assets/images/about-me-1.jpg'
import aboutMeImage1 from '../assets/images/about-me-1.jpg';
import aboutMeImage2 from '../assets/images/about-me-2.jpg';
import aboutMeImage3 from '../assets/images/about-me-3.jpg';
import heroImage1 from '../assets/images/dip/IMG_1647-min.jpg';
import heroImage2 from '../assets/images/dip/me.jpg';
import heroImage3 from '../assets/images/dip/me-3.jpg';
import heroImage4 from '../assets/images/dip/me-4.jpg';

export const    PROJECT_SLIDER_INFORMATION = [
    {
        id: 1,
        image: sliderImage,
        heading: 'First Slider',
        about: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
        id:2,
        image: sliderImage,
        heading: 'Second Slider',
        about: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
        id:3,
        image: sliderImage,
        heading: 'Third Slider',
        about: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
        id:4,
        image: sliderImage,
        heading: 'Fourth Slider',
        about: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
]

//hero section data
export const HeroData = {
    title: "Dipanjan Tripathi",
    subTitle: "Web Developer",
    tagLine: "I build, maintain & scale high-performance React applications with excellence.",
    description: "I’m a Web & Mobile Developer with 3 years of expertise in React, React Native, and Next.js, building high-performance, scalable, and visually engaging web and native applications. 🚀",
    heroImage: [
        {
            id:1,
            image: heroImage1
        },
        {
            id:2,
            image: heroImage2
        },
        {
            id:3,
            image: heroImage3
        },
        {
            id:4,
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
        id:1,
        image: aboutMeImage1
    },
    {
        id:2,
        image: aboutMeImage2
    },
    {
        id:3,
        image: aboutMeImage3
    }
]
}