// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manoj Kumar Thapa",
  description:
    "MSc Artificial Intelligence (Computer Science) student with a strong foundation in software development. Seeking a challenging software developer role to contribute to impactful projects and apply academic knowledge to real-world, data-driven solutions.",
  og: {
    title: "Manoj Kumar Thapa",
    type: "website",
    url: "https://iammanoj807.github.io/portfolio",
  },
};

//Home Page
const greeting = {
  title: "Manoj Kumar Thapa",
  logo_name: "Manoj Kumar Thapa",
  nickname: "Software Engineer",
  subTitle:
    "Software Engineer and MSc AI candidate with 2 years of enterprise experience at Accenture, specializing in Agentic AI and full-stack development. Combines industrial software discipline with advanced research in LLMs and RAG.",
  resumeLink:
    "https://drive.google.com/file/d/1OIVr19Q9hefwvkLsmyV7TBpuw5VILfhs/view?usp=sharing",
  portfolio_repository: "https://github.com/iammanoj807",
  githubProfile: "https://github.com/iammanoj807",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/iammanoj807",
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
    backgroundColor: "#FFA500",
  },
  {
    name: "Email",
    link: "mailto:thapam807@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#EA4335",
  },
];

const skills = {
  data: [
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and deploying scalable machine learning models using frameworks like PyTorch and TensorFlow.",
        "⚡ Building and optimizing efficient machine learning pipelines for real-world AI applications.",
        "⚡ Integrating and maintaining AI models in production systems with a focus on reliability.",
        "⚡ Continuously improving workflows and leveraging cutting-edge AI technologies to drive innovation.",
      ],
      softwareSkills: [
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "fa-solid:brain",
          style: { color: "#FFB81C" },
        },
        {
          skillName: "Deep Learning",
          fontAwesomeClassname: "fa-solid:network-wired",
          style: { color: "#FF6B6B" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "fa-solid:fire",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "fa-solid:cube",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "fa-solid:layer-group",
          style: { color: "#D00000" },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos:hugging-face-icon",
          style: { color: "#FFD21E" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "fa-solid:chart-line",
          style: { color: "#F7931E" },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "fa-solid:image",
          style: { color: "#5C3EEE" },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "fa-solid:link",
          style: { color: "#1C3144" },
        },
        {
          skillName: "LLM",
          fontAwesomeClassname: "fa-solid:wand-magic-sparkles",
          style: { color: "#9333EA" },
        },
        {
          skillName: "Agents",
          fontAwesomeClassname: "fa-solid:robot",
          style: { color: "#EF4444" },
        },
        {
          skillName: "RAG",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#0EA5E9" },
        },
        {
          skillName: "Vector DB",
          fontAwesomeClassname: "fa-solid:cubes",
          style: { color: "#8B5CF6" },
        },
      ],
    },
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive and dynamic websites using JavaScript and React.",
        "⚡ Developing REST APIs and web services using Java and Spring Boot.",
        "⚡ Integrating APIs with frontend technologies to deliver complete full-stack solutions.",
        "⚡ Utilizing Docker for containerization and efficient deployment.",
        "⚡ Managing version control and collaboration using Git.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fa-brands:js",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "fa-brands:java",
          style: { color: "#007396" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#4479A1" },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "fa-brands:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "fa-brands:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-brands:css3-alt",
          style: { color: "#1572B6" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "fa-solid:leaf",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "fa-brands:node-js",
          style: { color: "#339933" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-brands:git-alt",
          style: { color: "#F05032" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fa-brands:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "fa-solid:book",
          style: { color: "#F37726" },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "fa-solid:code",
          style: { color: "#007ACC" },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa-brands:github",
          style: { color: "#181717" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#00758F" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fa-solid:server",
          style: { color: "#336791" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "fa-solid:fire",
          style: { color: "#FF9800" },
        },
      ],
    },
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
      duration: "Jan 2025 - Jan 2026 (Expected)",
      descriptions: [
        "⚡ Specializing in advanced AI, including Deep Learning, Natural Language Processing (NLP), and Computer Vision.",
        "⚡ Applying theoretical knowledge to practical projects involving complex model architectures and MLOps principles.",
      ],
      website_link: "https://www.aston.ac.uk/",
    },
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science and Engineering",
      logo_path: "drait_logo.png",
      alt_name: "Dr. AIT, Bangalore",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Built a strong foundation in Data Structures, Algorithms, DBMS, Operating Systems, and Computer Architecture.",
        "⚡ Completed specialized coursework in Machine Learning, Deep Learning, and Full Stack Development.",
      ],
      website_link: "https://www.drait.edu.in",
    },
    {
      title: "Manimukunda College/HSS",
      subtitle: "Higher Secondary Education (+2)",
      logo_path: "mmc_logo.png",
      alt_name: "MMC, Butwal, Nepal",
      duration: "2015 - 2017",
      descriptions: [
        "⚡ Developed strong analytical and problem-solving skills through a rigorous science and mathematics curriculum.",
        "⚡ Awarded the Mahatma Gandhi Scholarship for academic excellence.",
        "⚡ Achieved a final score of 75.8%.",
      ],
      website_link: "https://www.manimukundacollege.edu.np",
    },
    {
      title: "New Horizon Institute",
      subtitle: "Secondary Education Examination (Class 10)",
      logo_path: "nhi_logo.png",
      alt_name: "NHI, Butwal, Nepal",
      duration: "2014 - 2015",
      descriptions: [
        "⚡ Established an early foundation in STEM subjects with a focus on Computer Science and Mathematics.",
        "⚡ Achieved a final score of 85.63%.",
      ],
      website_link: "https://newhorizon.edu.np",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "5-Day AI Agents Intensive Course",
      subtitle: "Google | Kaggle",
      logo_path: "",
      certificate_link:
        "https://www.kaggle.com/certification/badges/manojkumarthapa/105",
      alt_name: "Google",
      color_code: "#ffffff",
      icon: "logos:google-icon",
    },
    {
      title: "AI Masterclass: How AI Thinks",
      subtitle: "- Saras AI Institute",
      logo_path: "saras_ai_institute.png",
      certificate_link:
        "https://credsverse.com/credentials/3f44c319-2b85-4345-824f-191da7fdbef2",
      alt_name: "Saras AI Institute",
      color_code: "#c2b3ef",
    },
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng - Stanford University",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "- Andrew Ng - deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
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
    "An AI and Machine Learning Engineer who builds and deploys scalable models. I bridge the gap between complex AI systems and production-ready applications using my full-stack skills in React and Spring Boot.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Mentor",
          company: "Aston University",
          company_url: "https://www.aston.ac.uk",
          logo_path: "aston_logo.png",
          duration: "August 2025 - Present",
          location: "Birmingham, England, United Kingdom · On-site",
          description: [
            "Mentoring MSc AI students through their academic transition, providing guidance on coursework, project strategies, and career development.",
            "Conducting weekly one-on-one sessions to support skill development in machine learning, Python, and research methodologies.",
          ],
          color: "#A100FE",
        },
        {
          title: "Associate Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com",
          logo_path: "accenture_logo.png",
          duration: "October 2021 - October 2023",
          location: "Bangalore, India",
          description: [
            "Developed scalable full-stack modules using Java Spring Boot and React for a high-traffic client application, strictly adhering to Agile workflows.",
            "Optimized slow-performing SQL queries and API endpoints, reducing response latency by 40% and improving user experience.",
            "Integrated automated unit testing (JUnit) into CI/CD pipelines, reducing regression bugs and accelerating deployment cycles.",
          ],
          color: "#A100FE",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I enjoy solving complex problems and turning innovative ideas into reality. Below is a selection of projects where I've applied my skills in both artificial intelligence and full-stack development to create practical, data-driven solutions.",
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
    description:
      "Have a project in mind or an opportunity you'd like to discuss? I'm currently seeking internship and graduate roles where I can apply my skills in AI and full-stack development. Let's talk about how I can contribute to your team.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I believe the best way to learn is to teach. In this blog, I break down complex topics in AI, machine learning, and software development into clear, easy-to-understand articles. My goal is to share what I'm learning and help others on their own coding journey.",
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
    subtitle: "+44 7438 029689",
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
