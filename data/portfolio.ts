// This page holds information that will be used for the portfolio website

// import { GitHub } from "@mui/icons-material"

const pages = [
    "About",
    "Experience",
    "Projects",
    "Skills",
]
const heroInfo = {
    // all the properties are optional - can be left empty or deleted
    intro: 'Hi, my name is',
    name: 'Irvin Pelcaztre-Ortega',
    description: 'I am an aspiring Software Engineer currently looking for a full time role starting this January 2025',
    // resume: 'https://example.com',
}

const aboutInfo ={
    description: 'Hello! I am Irvin, and I bring three years of personal coding experience to the table. I am a senior enrolled in the Computer Science program with a focus on Data Science at Georgia State University. I am proficient in OOP languages: Python and Java, while currently working on improving my Web Development skills using the MERN stack.',
    moreInformation: 'I am passionate about Software Engineering and I would love to be able to contribute my skills and enthusiasm in an innovative and customer-obsessed organization where I can continue to grow and make a meaningful impact. I am looking for roles in Software Engineering, Full-Stack development, and Data Science.',
}
    
    
const skills = {
    languages:{
        title: 'Languages',
        list: ['Python', 'Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    libraries: {
        title: 'Libraries',
        list: ['React', 'Express', 'Node.js', 'Bootstrap', 'Material-UI, Next.js'],
    },
    tools: {
        title: 'Tools',
        list: ['Git', 'VS Code', 'Postman', 'MongoDB', 'MySQL', 'Firebase', 'Linux', 'Docker'],
    }
}



const experience = [
    // each object is a different experience
    // if there are no experiences, Experience section won't show up
    {
        title: 'Software Engineering Intern',
        company: 'Bimini AI',
        description:
            'Worked on the development of a full-stack web application that allowed users to thread information in a HIPPAA compliant manner',
        date: 'June 2023 - Current',
    },
    {
        title: 'Web Development Technical Fellow',
        company: 'CodePath',
        description:
            'Acted as a mentor in a 12-week course that taught students the fundamentals of web development',
        date: 'June 2023 - December 2023',
    },
]

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Flashcard SaaS',
        description:
            'Designed a full-stack SaaS using NextJs that generated over $30 dollars in monthly subscriptions',
        stack: ['OpenAI', 'Firebase', 'Next.js', 'Stripe API', 'Clerk'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'RemindMe',
        description:
            'Personal project that sends me a daily email reminder to complete my daily tasks from a threaded csv',
        stack: ['Next.js', 'TypeScript', 'Node.js', 'Nodemailer', 'Cron', 'Firebase'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
    {
        name: 'Hospital Management System',
        description:
            'A fullstack web application that allows patients to book appointments and view their medical history, and allows doctors to view their appointments and patient history',
        stack: ['PostgreSQL', 'TypeScript', 'Next.js', 'Express', 'Node.js', 'OpenAI'],
        sourceCode: 'https://github.com',
        livePreview: 'https://github.com',
    },
]

    
const footerInfo = {
    email: 'ipelcaztreortega@gmail.com',
    socialLinks: [
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/irvin-pelcaztre-ortega/',
            icon: 'LinkedinIcon'
        },
        {
            name: 'GitHub',
            url: 'https://github.com',
            icon: 'GithubIcon'
        }
    ]

}


export {heroInfo, aboutInfo, projects, skills, experience, footerInfo, pages }
    