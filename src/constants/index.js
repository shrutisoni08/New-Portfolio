import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../../public/assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "WordPress Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Medilife Health Care",
      icon: meta,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Advanced Search & Filtering: Enabled users to filter doctors by city, specialty, and affiliated hospital, facilitating a streamlined search experience.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Dynamic Content Management: Managed a massive JSON dataset exceeding 40,000 lines for efficient information display of doctors, hospitals, and healthcare services.",
      ],
    },
    {
      title: "Web Developer (CMS)",
      company_name: "SkillEcted Educations Pvt. Ltd.",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Jan 2025",
      points: [
        "I designed and developed the SkillEcted website from scratch, leading the entire project lifecycle from conceptual design to final implementation.",
        "created and integrated all content, ensuring a cohesive and engaging user experience. By utilizing modern front-end technologies and best practices, I delivered a high-quality, fully functional website.",
        " Additionally, I serve as a frontend trainer, mentoring aspiring developers and sharing my expertise to help them succeed in their careers.",
      ],
    },
    {
      title: "FrontEnd Web Developer Intern",
      company_name: "INFOTRIXS Pvt. Lmt",
      icon: shopify,
      iconBg: "#383E56",
      date: "Nov 2023 - Dec 2023",
      points: [
        "I had the opportunity to work on an E-Commerce website as part of a collaborative team. My primary responsibility was to design and develop the user interface, ensuring an intuitive and visually appealing experience for users.",
        "I worked closely with the backend team to integrate APIs and ensure seamless functionality, gaining valuable experience in teamwork and bridging front-end and back-end workflows.",
        "I implemented responsive layouts, interactive components, and optimized the UI for performance across devices.",
        "This project enhanced my skills in web development and strengthened my ability to deliver user-centric solutions.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Coders Cafe",
      description:
        "I created The Coders Cafe, a modern single-page frontend project built using React, Framer Motion, and TailwindCSS. This project showcases a clean, responsive, and visually appealing food website designed to captivate users and provide an engaging browsing experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/shrutisoni08/The-Coders-Cafe",
    },
    {
      name: "myTune Clone",
      description:
      "Introducing a highly detailed and meticulously crafted clone of the renowned myTunes web page, developed with a strong focus on design precision and user experience. This project was built using HTML, CSS, and Bootstrap, capturing the essence of myTunes' sleek design and intuitive functionality.",        
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/shrutisoni08/myTunes",
    },
    {
      name: "QuizBuzz",
      description:
        "I developed an interactive and dynamic quiz application, QuizBuzz, using a combination of HTML, CSS, and JavaScript. This project was designed to provide users with an engaging platform to test their knowledge on various web development topics while fostering a fun learning environment.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/shrutisoni08/Quiz-Buzz",
    },
    {
      name: "FlexiCalc",
      description:
        "I developed an interactive and user-friendly calculator application, FlexiCalc, using React, Tailwind CSS, and React DnD. This project offers a seamless drag-and-drop interface, keyboard support, and undo/redo functionality, making complex calculations intuitive and efficient for users.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: starbucks,
      source_code_link: "https://flexicalc.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };