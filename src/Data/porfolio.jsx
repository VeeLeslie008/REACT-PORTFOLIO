import projectImg1 from "../assets/fintech.jpg";
import projectImg2 from "../assets/education.jpg";

export const developer = {
    name:"Victor Leslie Victor",
    title: "Senior Front-End Developer",
    tagline:"Crafting clean, user-friendly interfaces for the modern web",
    location: "Uyo, Nigeria",
    email: "veeleslie008@gmail.com",
    github : "https://github.com/veeleslie008",
    linkedin:"https://linkedin.com/in/victor-leslie-5856673a4",
    available:true,
};


export const about ={
    bio: [" I'm a Front-end Developer passionate about building mocern, responsive and user-friendly websites. I transform ideas and designs into interactive digital experiences using web technologies, with a focus on clean codes, performance and accessibility. i enjoy creating intuitive interfaces that not only look great but also provide a seamless experience accross different devices and screen sizes"    
],
};

export const skills =[
    {category: "Languages", items: ["Javascript", "HTML5", "Tailwind"]},
    {category: "Frameworks", items: ["React", "Lavarel", "Node.js"]},
]

export const projects =[
    {
        id : 1 ,
        title: "Payd - Fintech Dashboard",
        description : "A real-time financial dashboard with transaction analytics, multi-wallet support and role-based access.",
        image: projectImg1,
        tags: ["React", "Chart.js", "REST API"],
        live: "https://example.com",
        github: "https://github.com",
        feature: true,
    },
    {
        id: 2,
        title:"Buildx - Construction PM Tool",
        description: "Project Management platfrom for consturction firms. Features Gants Charts, contractor scheduling, and document management for teams of up to 200 users.",
        image:projectImg2,
        tags:["React", "Laravel", "MySQL"],
        live:"https://example.com",
        github:"https://github.com",
        featured: false,
    },
];



export const testimonials = [
    {
        id: 1,
        name: "Destiny Okagbuo",
        role: "CTO, Payd Technologies",
        text: "Victor Leslie is a resouceful front end developer specializing in React.js. He is skilled in HTML, CSS,JSX, component architecture and problem-solving. He combines technical ability with a friendly, professional approach that makes collaboration easy. ",
    } 
]