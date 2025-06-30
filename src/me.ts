import { DiScrum } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaGit,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaNewspaper,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { HiChip } from "react-icons/hi";

import {
  SiC,
  SiGnubash,
  SiGo,
  SiGooglecloud,
  SiJavascript,
  SiKubernetes,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiTypescript,
   SiOracle,         // Use for Oracle / PLSQL
  SiSpringboot,
  SiReact,
  SiAngular,        // Correct name is SiAngular (not SiAngularjs)
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiAmazon,
  SiJira,
  SiMysql,
  SiPandas, SiTensorflow, SiScikitlearn,
  SiGit, SiDocker 
} from "react-icons/si";
import { TbSql } from "react-icons/tb";         // Alternative for SQL
import { VscJson } from "react-icons/vsc";      // Alternative for XML
import { FaJava } from "react-icons/fa";  
import { RiStackshareLine } from "react-icons/ri";
import { FaCube, FaCubes } from "react-icons/fa";      // for Truffle, Ganache
import { VscCode } from "react-icons/vsc"; 
import { BiBarChartAlt2 } from "react-icons/bi";
  // Good fit for Matplotlib
  // close alternative


import { IMe, ITheme } from "./me.interface";

// Warning: Don't use "black" or "white" values
export const themeColor: ITheme = "purple";

// Multiple theme options
export const multiThemeOptions: ITheme[] = [

  "purple",
  "blue",
  
];

// To disable support for multiple themes, set this value to `false`;
export const enableMultiTheme: boolean = true;

export const me = {
  name: "Manas Tole",
  // Facts are optional
  facts: [
    "🔹 This website isn’t just for show! You can turn yours into a portfolio too—need help? Just ask!",

"🔹 Yes, I’m available for hire! If you need a developer who loves clean code and bad jokes, I’m your person.",

"🔹 No mouse? No problem! You can navigate this entire site using just your keyboard.",

"🔹 Software is cool, but hardware is magic. I design PCBs and tinker with electronics in my free time.",

"🔹 Want a new look? Click the top-right icon to change the color scheme.",

"🔹 Kubernetes ? Both require patience, precision, and a bit of obsession.",

"🔹 I built my own bus tracker. Now I have no excuse for being late… theoretically.",

"🔹 I log room temperature & humidity like it’s a science experiment. Ask me about my findings!",

"🔹 Click around! Some elements have hidden animations—because why not?",

"🔹 I once spent 6 hours perfecting a single button. Do I regret it? Not at all.",

"🔹 Psst… open the browser console! You might find a secret message.",

"🔹 I mentor students at hackathons and love helping with tricky projects.",

"🔹 This website is always evolving. I redesign things just for fun—it’s never truly “done.”",

"🔹 Dark mode is a must. Because staring at a bright screen at 2 AM is not it.",
  ],
  subtitle: "Full-Stack Developer | Computer Science Student | Tech Enthusiast",
  tagline: "I love crafting fun, high-quality experiences and constantly exploring new ideas to learn and grow! 🚀🚀✨",
  bigHeading: {
    black: "I create experiences that make",
    blue: " technology work for you",
  },
  about: "  Computer Science graduate student with 2+ years of experience building full-stack web applications and scalable backend systems. Proficient in Java, Python, JavaScript, and frameworks like React.js and Spring Boot. Strong foundation in algorithms, data structures, and software architecture. Hands-on experience with cloud platforms, containerization, and CI/CD automation. Built and deployed multiple production-grade applications in Agile environments, contributing to reduced latency and improved scalability.",
  location: "Pune, IND",
  image: "/assets/mt.jpeg",
  education: [
    {
      degree: "Master of Science",
      major: "Computer Science",
      school: "Arizona State University, Tempe, USA",
      graduation: "Aug 2025 - Present (Aug 2027)",
      //CGPA: "9.26 (on scale of 10)",
      awards: ["Courseworks Taken : Foundation of Algorithms, Data Processing at scale, Cloud Computing, Machine Learning, Software Engineering"],
    },
    {
      degree: "Bachelor of Engineering",
      major: "Information Technology",
      school: "Savitribai Phule Pune University, Pune, IND",
      graduation: "July 2019 - Mar 2023",
      CGPA: "8.81 (on scale of 10)",
      awards: ["Courseworks Taken : Data Structures, Algorithms Analysis, Artificial Intelligence , Operating System, Cloud Computing, Database Management, Machine Learning, Computer Architecture, Object Oriented Programming, System Design, Blockchain Technology, Data Science"],
    },
  ],
  experience: [
    {
      company: "Bajaj Allianz Genral Insurance Company",
      location: "Pune, IND",
      position: "Senior Application Engineer",
      duration: "July 2023 - Jun 2025",
      bullets: [
        "Led end-to-end development of 5+ enterprise-grade web applications, overseeing system architecture, UI/UX, back-end development, and cloud deployment using AWS and GCP. Built and maintained CI/CD pipelines using Jenkins and GitLab, reducing deployment time by 60% and automating 85% of manual workflow.",
        "Developed secure, high-performance RESTful and GraphQL APIs, improving data integrity by 98% and reducing latency by 35% across distributed microservices.",
        "Implemented microservices architecture with Docker and Kubernetes, increasing system uptime to 99.98% and reducing infrastructure costs by 30%.",
        "Mentored junior developers, led Agile sprints, and conducted code reviews, enhancing code quality by 40% using Java, Spring Boot, React.js, MongoDB, and Git in a structured SDLC and DevOps environment."
      ],
    },
    {
      company: "ETHDC TECHNOLOGIES PRIVATE LIMITED",
      location: "Pune, IND",
      position: "Project Intern",
      duration: "October 2022 - March 2023",
      bullets: [
        "Developed and deployed 3 full-stack web applications from architecture to production using JavaScript, Node.js,and AWS, reducing time-to-market by 50%.",
        "Designed secure API gateway architecture with OAuth 2.0 and JWT authentication, and deployed Dockerizedservices on AWS EC2 and EKS, improving scalability by 70%.",
        "Enhanced CI/CD pipelines and automated deployment processes in a DevOps environment using Git, Docker, andAWS tools. Participated in Agile ceremonies, collaborated with cross-functional teams, and delivered high-quality,user-centric applications with 95% client satisfaction."
      ],
    },
    {
      company: "Geeks-for-Geeks",
      location: "Pune, IND",
      position: "Technical Content Writter",
      duration: "March 2021 - November 2021",
      bullets: [
        "Authored 15+ technical articles on Java, Spring Boot, J2EE, and design patterns, driving 1.35M+ views and boosting search traffic by 25%.",
        "Refactored 5+ legacy posts to improve SEO, technical clarity, and engagement, achieving a 4.8/5 reader rating.",
        "Collaborated with the editorial team to ensure content accuracy, consistency, and relevance to industry standards.",
        "Recognized as a top contributor for backend development topics and consistently delivered peer-reviewed, high quality content."
      ],
    },
    {
      company: "Webbeey Infotech",
      location: "Pune, IND",
      position: "Application Developer",
      duration: "February 2020 - April 2020",
      bullets: [
        "Using Java/ J2EE technologies, I developed applications for clients and added functionalities to existing applications as per the requirement as well as performed unit testing of applications using JUnit",
      ],
    },
  ],
  projects: [
      {
      name: "Beyond Borders",
      description: " Designed and working on a modular full-stack web platform supporting 500+ student workflows, automating overseas education tasks like document verification, resume building, university shortlisting (with a scoring algorithm), visa tracking, and mock interviews.Engineered 15+ RESTful APIs with Node.js & Express.js, enabling real-time user interactions & reducing API error rate by 35%. Implemented secure, role-based access control using Firebase Auth.Worked on a responsive UI using React and Tailwind CSS, integrated with MongoDB for real-time NoSQL operations, resulting in 40% faster response times during high-traffic simulations.",
      technologies: ["Core Java", "Spring", "Collection Framework", "Swing"],
      links: [
        {
          name: "Check Out",
          uri: "https://beyond-the-borders.netlify.app/",
        },
      ],
      //image: "/assets/dad.png",
    },
    {
      name: "ENHANCEMENT OF VOTING SYSTEM USING BLOCK-CHAIN",
      description: " Reimagined traditional voting using Ethereum and Hyperledger Fabric for 100% tamper-proof record-keeping and real-time transparency. Developed smart contracts using Solidity and Chaincode, simulating 1,000+ concurrent voters in a test environment with zero double-vote errors.Created a DApp interface with Web3.js and a backend with Node.js, connected to MongoDB for state persistence; ensured real-time feedback through event-listening mechanisms.Tools: Ethereum, Hyperledger, Solidity, Chaincode, Truffle, Ganache, Remix IDE",
      technologies: [
        "Hyperledger Fabric",
        "  Ethereum",
        " Express.js",
        "  Node.js ",
        " smart contract",
      ],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
      //image: "https://content.getaudioshelf.com/logo.png",
    },
    {
      name: " RECOMMENDATION SYSTEM FOR E-COMMERCE PLATFORM",
      description: "Implemented a machine learning recommendation engine improving product discovery and increasing click-through rate by 25% in test scenarios through collaborative filtering. Integrated model into a full-stack environment, rendering personalized suggestions based on user-item interaction data from MongoDB.",
      technologies: [
        "Python",
        "scikit-learn, & TensorFlow",
        "Node.js",
        "Machine Learning",
      ],
      links: [
      {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
      //  image: "/assets/bus-tracker.png",
    },
    {
      name: "FOOD DELIVERY ANDROID APPLICATION",
      description: "Developed a food ordering platform with intuitive interfaces for both customers and restaurants. Designed a responsive frontend using React.js to enhance user experience. Built an efficient backend with Node.js and Express.js for seamless order processing. Implemented MongoDB for data storage and management. Deployed the platform on AWS/Heroku for scalable cloud infrastructure.",
      technologies: ["Andriod", "Java", "AWS", "TypeScript", "cloud infra"],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
    
    },
    {
      name: " DIGI-CRYPT APPLICATION",
      description: "Designed and developed Digi-Crypt application which is a secure digital vault for storing and managing confidential information such as documents, usernames, and passwords. Leveraged Java technologies to implement robust security features and ensure data integrity.",
      // image: "/assets/lord-of-the-lunchroom.jpg",
      // backgroundImage: "/assets/lord-of-the-lunchroom.jpg",
      technologies: ["Core Java", "Spring Framework", "Collection", "JWT", "UI Technologies"],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
      ],
    },
    {
      name: " MULTI-CLIENT CHATTING APPLICATION",
      description: "Engineered a Java-based multi-client chat system capable of handling 200+ concurrent users with synchronized message delivery and session management via central server. Integrated UI using AWT/Swing for real-time messaging. Tech stack: Java, Spring Boot, Sockets, AWT, Swing",
      technologies: ["Core Java", "Collection Framework", "SWING", "AWT", "Socket Prog."],
      links: [
        {
          name: "Check Out",
          uri: "https://github.com/manastole03",
        },
        ,
      ],
      //image: "/assets/ml.png",
    },
  
  ],
  blogs: [
    {
      name: "Containers & Clouds: Mastering ECS and EC2",
      description: "In the world of cloud computing, Amazon ECS and Amazon EC2 are two powerful tools that can supercharge your applications. Whether you're deploying scalable containers or managing virtual machines, understanding these services is crucial for cloud-native development. In this blog, we'll break down ECS and EC2, compare their use cases. Let’s dive in! 🚀",
      technologies: [],
      links: [
        {
          name: "Read More",
          uri: "https://manastole-01.medium.com/",
        },
      ],
      image: "/assets/medium.png",
    },
    {
      name: "Fragnert & EC2 Chronicles : Breaking It Down",
      description: "I’d love to write something amazing for this, but I need a bit more context! Are you referring to fragmentation (such as in memory management, databases, or gaming performance)? Or is Fragnert a unique term or concept with a specific meaning? Whether it’s a technical deep dive or something entirely new, let me know, and I’ll craft something great just for you! 🚀",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://manastole-01.medium.com/",
        },
      ],
      image: "/assets/medium.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Unboxing Docker: How Containers Revolutionize Deployment!",
      description: "Now we know exactly what containers are, how they work, and have an introduction to Docker. The terms sound familiar now, right? 🚀 But understanding just the surface is not enough! To truly master containerization, we need to dive deeper into the core concepts ",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://docker-containers.hashnode.dev/unboxing-docker-how-containers-revolutionize-deployment",
        },
      ],
      image: "/assets/hash.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Containers & Dockers : The Magic of Boxes That Simplifies the Deployment!",
      description: "Docker—a fancy word and a scary tech, right?! The same goes for me as well before knowing it. At first, it felt overwhelming, with all the complex terminologies and commands. But as soon as I started learning, I realized how revolutionary it is.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://docker-containers.hashnode.dev/containers-and-dockers-the-magic-of-boxes-that-simplifies-the-deployment",
        },
      ],
      image: "/assets/hash.png",
      //backgroundImage: "/assets/bus-tracker.png",
    },
    {
      name: "Java Program to Convert String - Integer Array",
      description: "In Java, we cannot directly perform numeric operations on a String representing numbers. To handle numeric values, we first need to convert the string into an integer array. In this article, we will discuss different methods for converting a numeric string to an integer array in Java.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://www.geeksforgeeks.org/java-program-to-convert-string-to-integer-array/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
      ],
      image: "/assets/gfgg.jpg",
      //backgroundImage: "/assets/bus-tracker.png",
    },

    {
      name: "Java Program to Convert String - String Array",
      description: "There are multiple ways of writing and reading a text file. This is required while dealing with many applications. There are several ways to read a plain text file in Java e.g. you can use FileReader, BufferedReader or Scanner to read a text file.",
      technologies: [],
      links: [
        {
          name: "Read More ",
          uri: "https://www.geeksforgeeks.org/java-program-to-read-a-file-to-string/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
        },
      ],
      image: "/assets/gfgg.jpg",
      //backgroundImage: "/assets/bus-tracker.png",
    }
  ],
  skills : [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: SiPython },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "SQL", icon: TbSql },
  { name: "PostgreSQL", icon:SiPostgresql },
  { name: "XML", icon: VscJson },
  { name: "PLSQL", icon: SiOracle },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "J2EE", icon: FaJava },
  { name: "React.js", icon: SiReact },
  { name: "AngularJS", icon: SiAngular },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "AWS", icon: SiAmazon },
  { name: "GCP", icon: SiGooglecloud },
  { name: "Docker", icon: SiDocker },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Git", icon: SiGit },
  { name: "CI/CD", icon: DiScrum },
  { name: "Jira", icon: SiJira },
  { name: "Truffle", icon: FaCube },
  { name: "Ganache", icon: FaCubes },
  { name: "Remix", icon: VscCode },
  { name: "MySQL", icon: SiMysql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Oracle", icon: SiOracle },
  { name: "Hyperledger", icon: RiStackshareLine },
  { name: "pandas", icon: SiPandas },
  { name: "scikit-learn", icon: SiScikitlearn },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Matplotlib", icon: BiBarChartAlt2  },
],
  profile: [
    {
      name: "Leetcode - Prog. Learning",
      image: "assets/leet.png",
      technologies: ["Key Highlights :",
        "✅ Total Problems Solved: 60+",
        "✅ Top Global Rank: 10,00,000",
        "✅ Problems Solved by Difficulty:Easy: 30 Medium: 25 Hard: 5",
        "✅ Daily Streak: 100+ days"],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://leetcode.com/u/manastole3901/",
        },
      ],
    },
    {
      name: "Hashnode - Developers Hub",
      image: "assets/hash.png",

      technologies: [
        "Key Highlights : ",
        "✅ Total Blogs Published: 5+",
        "✅ Total Reads: 500+",
        "✅ Followers: 10",
        "✅ Tech Topics Covered: Kubernates, Containerization and docker",
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://hashnode.com/@Mt390",
        },
      ],
    },
    {
      name: "The Medium Blogs",
      technologies: [
        "Key Highlights :",
        "✅ Total Articles Published: 5+",
        "✅ Total Views: 500+",
        "✅ Total Upvotes/Reactions: 250+",
        "✅ Topics Covered:  AWS Cloud, New Technologies and Kubernates",
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://medium.com/@manastole-01",
        },
      ],
      image: "/assets/medium.png",
    },
    {
      name: "Geeks-for-Geeks",
      technologies: ["Key Highlights :",
        "✅ Total Articles Published: 15+",
        "✅ Total Views: 3,00,000+",
        "✅ Total Upvotes/Reactions: 3000+",
        "✅ Topics Covered: Core Java, Collection Framewrok, Spring Framework, DSA"
      ],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "http://geeksforgeeks.org/user/manastole01/",
        },
      ],
      image: "/assets/gfgg.jpg",
    },
    {
      name: "Github",
      image: "/assets/git.png",
      technologies: ["Key Highlights :",
        "✅ Total Number of Repositories: 15+",
        "✅ Total Contributions: 5",
        "✅ Open Source Contributions: 3",
        "✅ GitHub Badges Earned: Pull Shark & Arctic Code Vault Contributor"],
      links: [
        {
          name: "Let’s connect 🚀",
          uri: "https://github.com/manastole03",
        },
      ],
    },
  ],
  social: [
    {
      name: "Resume",
      icon: FaNewspaper,
      uri: "public/assets/Manas_Tole.pdf",
      hover: {
        bg: ["brand.500", "brand.700"],
        color: "white",
      },
    },
    {
      name: "Github",
      icon: FaGithub,
      uri: "https://github.com/manastole03",
      hover: {
        bg: ["gray.900", "gray.800"],
        color: "white",
      },
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      uri: "https://www.linkedin.com/in/manas-tole/",
      hover: {
        bg: ["linkedin.500", "linkedin.700"],
        color: "white",
      },
    },
    {
      name: "Gmail",
      icon: FaEnvelope,
      uri: "mailto:tolemanas.01@gmail.com",
      hover: {
        bg: ["red.500", "white.700"],
        color: "white",
      },
    },
  ],

  contact: {
    email: "tolemanas.01@gmail.com",
  },
} as unknown as IMe;
