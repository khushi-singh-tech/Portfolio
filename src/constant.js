// skill section logo
 import htmlLogo from './assets/tech_logo/html.png';
 import cssLogo from './assets/tech_logo/css.png';
 import javascriptLogo from './assets/tech_logo/javascript.webp';
 import reactjsLogo from './assets/tech_logo/reactjs.png';
 import expressjsLogo from './assets/tech_logo/express js.png';
 import nodejsLogo from './assets/tech_logo/node js.png';
 import mongodbLogo from './assets/tech_logo/mongodb.svg';
 import tailwindLogo from './assets/tech_logo/tailwind.avif';
 import sqlLogo from './assets/tech_logo/sql.png';
 import javaLogo from './assets/tech_logo/Java-Logo.png';
 import cLogo from './assets/tech_logo/C_Logo.png';
 import pythonLogo from './assets/tech_logo/python-logo.png';
 import gitLogo from './assets/tech_logo/git-logo.png';
import githubLogo from './assets/tech_logo/github.jpg';
 import vsCodeLogo from './assets/tech_logo/vscode.jpeg';
   
 // Experience logo
 import yhillsLogo from './assets/company_logo/yhills.jpeg';
//  import caddcenterLogo from './assets/company_logo/caddcenter.png';

 // Education Logo
  import kitLogo from './assets/educationlogo/kit_logo.jpeg';
   import rnicLogo from './assets/educationlogo/RNIC_logo.png';

 // Project Section's logo
 import cakeLogo from './assets/work_logo/cake.png';
 import githubDetectiveLogo from'./assets/work_logo/githubProfile.png';
 import dashboardLogo from './assets/work_logo/dashboardPanel.png';
 import portfolioLogo from './assets/work_logo/portfolio.png';
 import snakeLogo from './assets/work_logo/snake.png';
 import udemyLogo from './assets/work_logo/udemy.png';

   export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            {name: 'HTML', logo: htmlLogo},
             {name: 'CSS', logo: cssLogo},
             {name: 'Tailwind', logo: tailwindLogo},
              {name: 'JavaScript', logo: javascriptLogo},
               {name: 'React JS', logo: reactjsLogo},
                
        ],
    },
    {
        title: 'Backend',
        skills: [
             {name: 'Node JS', logo: nodejsLogo},
              {name: 'Express JS', logo: expressjsLogo},
               {name: 'SQL', logo: sqlLogo},
                {name: 'MongoDB', logo: mongodbLogo},   
        ],
    },
    {
        title: 'Languages',
        skills: [
            {name: 'C', logo: cLogo},  
            {name: 'Java', logo: javaLogo},
            {name: 'Python', logo: pythonLogo},
            {name: 'JavaScript', logo: javascriptLogo},
        ],
    },
    {
        title: 'Tools',
        skills: [
            {name: 'Git', logo: gitLogo},
            {name: 'GitHub', logo: githubLogo},
            {name: 'VS Code', logo: vsCodeLogo},
        ],
    },
   ];

     export const experiences = [
    {
      id: 0,
      img: yhillsLogo,
      role: "Fullstack Developer",
      company: "Yhills",
      date: "1/April/2024 - 30/May/2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "MongoDb",
        "Express JS",
      ],
    },
    // {
    //   id: 1,
    //   img: caddcenterLogo,
    //   role: "Fullstack Developer",
    //   company: "Cadd Center, Thane",
    //   date: "15/July/2024 - 20/August/2024",
    //   desc: "Contributed to innovative projects as a Fullstack Engineer, leading both frontend and backend development using technologies such as HTML, CSS, JavaScript, SQL, and ReactJS.",
    //   skills: [
    //     "ReactJS",,
    //     "JavaScript",,
    //     "HTML",
    //     "CSS",
    //     "SQL",
    //      "Node JS",
    //     "MongoDb",
    //     "Express JS"
    //   ],
    // },
];

   export const education = [
    {
             id: 1,
      img: kitLogo,
      school: "KIT College, Kanpur",
      date: "July 2021- June 2025",
      grade: "76.8 CGPA",
      desc: "I completed my Bachelor's degree in Computer Science with an specialization in AI&ML from Kanpur Institute of Technology, Kanpur. Throughout my studies, I was immersed in a variety of subjects that depened on my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software developed.",
      degree: "Bachelor of technology - B.Tech(CS-AI&ML)",
    },
    {
         id: 2,
      img: rnicLogo,
      school: "R.N. Inter College, Bairi Chakia Chandauli",
      date: "Apr 2020 - March 2021",
      grade: "78%",
      desc: "I completed my Intermediate from Ram Nihor Inter College, Bairi, under the UP board, where I studied Physics, Chemistry, and Mathematics.",
      degree: "UP(XII) - PCM",
    },
    {
        id: 3,
      img: rnicLogo,
      school: "R.N. Inter College, Bairi Chakia Chandauli",
      date: "Apr 2018 - March 2019",
      grade: "83.3%",
      desc: "I completed my Matriculation from Ram Nihor Inter College, Bairi, under the UP board, where I studied Physics, Chemistry, and Mathematics.",
      degree: "UP(X) - Science",
    },
   ];

     export const projects = [
    {
      id: 0,
      title: "GitHub Profile Detective",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubDetectiveLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/khushi-singh-tech/Github-Profile-Detective",
      webapp: "https://github-profile-detectiv.netlify.app/",
    },
    {
      id: 1,
      title: "Order Online Cake",
      description:
        "A modern online cake shop website built with React.js, HTML, CSS, and JavaScript. Users can browse cakes, view details, and simulate an ordering experience with a clean, responsive UI.",
        image: cakeLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS"],
      github: "https://github.com/khushi-singh-tech/Order-online-cake-website",
      webapp: "https://order-cake-online.netlify.app/",
    },
    {
      id: 2,
      title: "Udemy Clone",
      description:
        "A responsive clone of Udemy.com built with HTML, CSS, and Bootstrap. This project replicates the look and feel of Udemy’s homepage, including the navigation bar, course sections, and interactive dropdown menus.",
      image: udemyLogo,
      tags: [ "HTML", "CSS", "BootStrap"],
      github: "https://github.com/khushi-singh-tech/udemy-clone",
      webapp: "https://udey-clone.netlify.app/",
    },
    {
      id: 3,
      title: "Admin Dashboard Panel",
      description:
        "A modern and responsive Admin Dashboard Panel built using React JS and Tailwind CSS.This project demonstrates real-world frontend concepts such as product management, order tracking, charts, modals, and responsive UI design.",
      image: dashboardLogo,
      tags: ["React JS", "JavaScript", "Tailwind CSS", "HTML"],
      github: "https://github.com/khushi-singh-tech/Dashboard-Panel",
      webapp: "https://admin-dashbard-panel.netlify.app/",
    },
    {
      id: 4,
      title: "Portfolio",
      description:
        "A personal portfolio website built using HTML, CSS, JavaScript, and React.js to showcase my projects, skills, and development journey in a clean and responsive design.",
      image: portfolioLogo,
      tags: ["React JS", "JavaScript", "HTML", "Tailwind CSS"],
      github: "https://github.com/khushi-singh-tech/Portfolio",
      webapp: "https://my-portfolio-khushi.netlify.app/",
    },
    {
      id: 5,
      title: "Snake Game",
      description:
        "A sleek and modern Snake Game built using HTML, CSS, and JavaScript. Featuring smooth animations, a real-time timer, persistent high-score tracking, and a clean UI — this project recreates the classic arcade experience inside your browser.",
      image: snakeLogo,
      tags: ["HTML", "CSS", "JavaScript", "React Js"],
      github: "https://github.com/khushi-singh-tech/Snake-Game",
      webapp: "https://snake-game-0nline.netlify.app/",
    },
  ];

   

