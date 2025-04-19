// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manoj Kumar Thapa Portfolio",
  description:
  "I am a master’s student at Aston University, specializing in artificial intelligence. I have strong skills in DSA, Softaware Development, Machine Learning, and AI. I am eager to apply my knowledge in a full-time role, take on new challenges, and contribute to exciting projects while growing professionally.",
  og: {
    title: "Manoj Kumar Thapa Portfolio",
    type: "website",
    url: "https://iammanoj807.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Manoj Kumar Thapa",
  logo_name: "Manoj Kumar Thapa",
  nickname: "Software Developer",
  subTitle:
  "I am a master’s student at Aston University, specializing in artificial intelligence. I have strong skills in DSA, Softaware Development, Machine Learning, and AI. I am eager to apply my knowledge in a full-time role, take on new challenges, and contribute to exciting projects while growing professionally.",
  resumeLink:
    "https://drive.google.com/file/d/1bbhI1Tbd1PVjhKOJ2V2C9lzvNObo4uc3/view?usp=sharing",
  portfolio_repository: "https://github.com/Manoj-Thapa",
  githubProfile: "https://github.com/Manoj-Thapa",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Manoj-Thapa",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/manoj-kumar-thapa-7595a5168",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Blog",
    link: "https://hamropedia.com",
    fontAwesomeIcon: "fas fa-blog",
    backgroundColor: "#1DA1F2",
  },
  {
    name: "Gmail",
    link: "mailto:thapam807@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "AI and Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and deploying scalable machine learning models using frameworks like PyTorch and TensorFlow.",
        "⚡ Building and optimizing efficient machine learning pipelines for real-world AI applications.",
        "⚡ Integrating and maintaining AI models in production systems with a focus on reliability.",
        "⚡ Continuously improving workflows and leveraging cutting-edge AI technologies to drive innovation."
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic websites using JavaScript and React.",
        "⚡ Developing REST APIs and web services using Java and Spring Boot.",
        "⚡ Integrating APIs with frontend technologies to deliver complete full-stack solutions.",
        "⚡ Utilizing Docker for containerization and efficient deployment.",
        "⚡ Managing version control and collaboration using Git."
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-brands:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#2496ED",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        }        
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#402F14",
      },
      profileLink: "https://leetcode.com/u/manojthapa/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Aston University, Birmingham",
      subtitle: "MSc Artificial Intelligence",
      logo_path: "aston_logo.png",
      alt_name: "Aston University",
      duration: "2025 - Present",
      descriptions: [
        "⚡ Focusing on advanced concepts in AI, machine learning, and deep learning.",
        "⚡ Eager to apply my knowledge in real-world projects and research."
      ],
      website_link: "https://www.aston.ac.uk/"
    },
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science and Engineering",
      logo_path: "drait_logo.png",
      alt_name: "Dr. AIT, Bangalore",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Studied core software engineering subjects including Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture, and Artificial Intelligence.",
        "⚡ Completed specialized coursework in Machine Learning, Deep Learning, and Full Stack Development.",
        "⚡ Graduated with a CGPA of 9.45/10."
      ],
      website_link: "https://www.drait.edu.in"
    },
    {
      title: "Manimukunda College/HSS",
      subtitle: "Class 12",
      logo_path: "mmc_logo.png",
      alt_name: "MMC, Butwal, Nepal",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Studied Mathematics, Biology, Physics, Chemistry, English, and Nepali as core subjects.",
        "⚡ Awarded the Mahatma Gandhi Scholarship for academic excellence.",
        "⚡ Achieved 75.8% in final examinations."
      ],
      website_link: "https://www.manimukundacollege.edu.np"
    },
    {
      title: "New Horizon Institute",
      subtitle: "Class 10",
      logo_path: "nhi_logo.png",
      alt_name: "NHI, Butwal, Nepal",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ Studied Computer Mathematics, Physics, Social Studies, Optional Mathematics, Nepali, English, Health & Physical Education (HPE), and Computer Science as core subjects.",
        "⚡ Achieved 85.63% in final examinations."
      ],
      website_link: "https://newhorizon.edu.np"
    }
  ]
};


const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "- GUVI Training",
      logo_path: "guvi_logo.png",
      certificate_link: "https://www.guvi.in/certificate?id=gfH250280A8ru61p75",
      alt_name: "guvi.in",
      color_code: "#0C9D5899",
    },
    {
      title: "JavaScript",
      subtitle: "- GUVI Training",
      logo_path: "guvi_logo.png",
      certificate_link:
        "https://www.guvi.in/verify-certificate?id=c1xSTag2216t88671R&course=javascript_en",
      alt_name: "guvi.in",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Visualization using Python",
      subtitle: "- Great Learning",
      logo_path: "greatlearning_logo.png",
      certificate_link:
        "https://olympus1.greatlearning.in/course_certificate/ZMICNLYY",
      alt_name: "Great Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization using Tableau",
      subtitle: "- Great Learning",
      logo_path: "greatlearning_logo.png",
      certificate_link:
        "https://olympus1.greatlearning.in/course_certificate/DLEKCAPR",
      alt_name: "Great Learning",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "👨🏻‍💻",
  description:
  "I am a software developer specializing in AI and machine learning, with expertise in building and deploying scalable models using frameworks like PyTorch and TensorFlow. I also have experience integrating AI systems into production environments, ensuring performance and reliability. Beyond AI, I develop responsive front-end applications using React-Redux and JavaScript, as well as REST APIs and web services with Spring Boot for seamless full-stack integration. My focus is on delivering innovative and efficient solutions by combining AI expertise with strong software engineering skills.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Programming Instructor",
          company: "Birgatha Saving and Credit Co-operative Society Ltd.",
          company_url: "#",
          logo_path: "birgatha_logo.png",
          duration: "October 2023 - November 2024",
          location: "Butwal, Lumbini, Nepal",
          description:
            "I delivered interactive sessions on computer science and programming to students of various age groups. I designed and led workshops on fundamental topics such as Artificial Intelligence (AI), Machine Learning (ML), and basic computing concepts in a simple, accessible format.",
          color: "#09D15E",
        },
        {
          title: "Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com",
          logo_path: "accenture_logo.png",
          duration: "October 2021 - February 2023",
          location: "Bengaluru, Karnataka, India",
          description:
            "I developed over four enterprise web applications using React.js and Spring Boot within a six-member team, integrating RESTful APIs and leading code reviews to ensure 100% adherence to client requirements. I optimized API performance for a high-traffic application, reducing response time by 40% and supporting over 5,000 monthly requests with zero downtime during peak usage.",
          color: "#A100FE",
        }
      ]      
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Development Intern",
          company: "The Sparks Foundation",
          company_url: "https://www.thesparksfoundationsingapore.org",
          logo_path: "sparksfoundation_logo.png",
          duration: "October 2020 - November 2020",
          location: "Work From Home",
          description:
            "I developed user-facing features using the MERN stack (MongoDB, Express.js, Node.js), optimizing app performance by 30% through code splitting and caching strategies. I also built reusable authentication modules and input validation systems, ensuring 100% secure data submission and scalability to handle 500+ concurrent users.",
          color: "#040404",
        }        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of the latest technological tools. My best experience is creating full-stack web development projects, and I have also worked on machine learning and deep learning projects.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "I have worked on and published a few research papers.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manojkumarthapa.png",
    description: "You can message me, and I will reply within 24 hours. I specialize in artificial intelligence and machine learning, offering expertise in building scalable and optimized AI systems that solve complex challenges. Additionally, I can help you build full-stack solutions using technologies like JavaScript, React.JS, Java, Spring Boot, Docker, and Git. Feel free to reach out."
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I specialize in crafting insightful technical articles focused on programming. With a keen understanding of complex concepts, my articles aim to provide clear and valuable insights for readers in the programming community.",
    link: "https://hamropedia.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Birmingham, UK",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/fRH3yKt1RDzoGZUz9",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+44-7438029689",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
