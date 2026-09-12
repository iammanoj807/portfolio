// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manoj Kumar Thapa",
  description:
    "AI Software Engineer with an MSc in Artificial Intelligence, building production-facing AI features across the stack: LLM-powered applications, retrieval-augmented generation pipelines, and agentic tool orchestration. Shipped three distinct AI products end to end, from backend service (FastAPI, Python) through frontend (TypeScript, React), including an agent orchestrating 5 tool integrations via LangGraph and a RAG pipeline grounding LLM output in source documents via ChromaDB. Backed by professional backend engineering experience at Accenture, owning production REST APIs and improving response time by 40%. Strong Python fundamentals combined with a fast-execution, first-principles approach to building and shipping AI capabilities.",
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
  nickname: "AI Software Engineer",
  subTitle:
    "AI Software Engineer with an MSc in Artificial Intelligence, building production-facing AI features across the stack: <strong>LLM-powered applications, retrieval-augmented generation pipelines, and agentic tool orchestration</strong>.<br/><br/>Shipped <strong>three distinct AI products end to end</strong>, from backend service (<strong>FastAPI, Python</strong>) through frontend (<strong>TypeScript, React</strong>), including an agent orchestrating 5 tool integrations via <strong>LangGraph</strong> and a RAG pipeline grounding LLM output in source documents via <strong>ChromaDB</strong>.<br/><br/>Backed by professional backend engineering experience at <strong>Accenture</strong>, owning production REST APIs and improving response time by <strong>40%</strong>. Strong Python fundamentals combined with a fast-execution, first-principles approach to building and shipping AI capabilities.",
  resumeLink:
    "https://drive.google.com/file/d/116HbwjFVXO7FxjX_J9PAP-VlotntZTYL/view?usp=sharing",
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
    name: "LeetCode",
    link: "https://leetcode.com/u/manojthapa/",
    fontAwesomeIcon: "fas fa-code",
    backgroundColor: "#FFA116",
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
          skillName: "Scikit-learn",
          fontAwesomeClassname: "fa-solid:chart-line",
          style: { color: "#F7931E" },
        },
        {
          skillName: "YOLOv8",
          fontAwesomeClassname: "fa-solid:eye",
          style: { color: "#00BFFF" },
        },
        {
          skillName: "ONNX",
          fontAwesomeClassname: "fa-solid:microchip",
          style: { color: "#005CED" },
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassname: "fa-solid:diagram-project",
          style: { color: "#1C3144" },
        },
        {
          skillName: "RAG",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#0EA5E9" },
        },
        {
          skillName: "OpenAI API",
          fontAwesomeClassname: "fa-solid:wand-magic-sparkles",
          style: { color: "#9333EA" },
        },
        {
          skillName: "Snowflake",
          fontAwesomeClassname: "fa-solid:snowflake",
          style: { color: "#29B5E8" },
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
          skillName: "Java",
          fontAwesomeClassname: "fa-brands:java",
          style: { color: "#007396" },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fa-brands:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "fa-brands:js",
          style: { color: "#3178C6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fa-brands:js",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Go",
          fontAwesomeClassname: "fa-brands:golang",
          style: { color: "#00ADD8" },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "fa-solid:leaf",
          style: { color: "#6DB33F" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "fa-solid:bolt",
          style: { color: "#009688" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "fa-brands:node-js",
          style: { color: "#339933" },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "fa-solid:plug",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Microservices",
          fontAwesomeClassname: "fa-solid:cubes",
          style: { color: "#FF6B6B" },
        },
        {
          skillName: "RabbitMQ",
          fontAwesomeClassname: "fa-solid:envelope-open",
          style: { color: "#FF6600" },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "fa-solid:stream",
          style: { color: "#231F20" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fa-solid:server",
          style: { color: "#336791" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "fa-solid:database",
          style: { color: "#00758F" },
        },
        {
          skillName: "NoSQL/DynamoDB",
          fontAwesomeClassname: "fa-solid:layer-group",
          style: { color: "#4053D6" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fa-brands:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "fa-solid:dharmachakra",
          style: { color: "#326CE5" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fa-brands:aws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "fa-brands:github",
          style: { color: "#2088FF" },
        },
        {
          skillName: "CI/CD",
          fontAwesomeClassname: "fa-solid:arrows-spin",
          style: { color: "#00C853" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-brands:git-alt",
          style: { color: "#F05032" },
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
          skillName: "Jupyter",
          fontAwesomeClassname: "fa-solid:book",
          style: { color: "#F37726" },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Aston University, Birmingham",
      subtitle: "MSc Artificial Intelligence (Computer Science)",
      logo_path: "aston_logo.png",
      alt_name: "Aston University",
      duration: "January 2025 - July 2026",
      percentage: "70.37%",
      descriptions: [
        "• Specialized in advanced AI (Deep Learning, NLP, Computer Vision) and applied theoretical knowledge to practical projects involving complex model architectures and MLOps.",
        "• Achieved a final score of 70.37%.",
      ],
      website_link: "https://www.aston.ac.uk/",
    },
    {
      title: "Dr. Ambedkar Institute of Technology, Bangalore",
      subtitle: "Bachelor of Engineering in Computer Science",
      logo_path: "drait_logo.png",
      alt_name: "Dr. AIT, Bangalore",
      duration: "August 2017 – September 2021",
      cgpa: "9.45/10",
      descriptions: [
        "• Built a strong foundation in core CS subjects (DSA, OS, DBMS) and completed specialized coursework in Machine Learning and Full Stack Development.",
        "• Achieved a CGPA of 9.45/10.",
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
        "• Developed strong analytical and problem-solving skills through a rigorous science and mathematics curriculum.",
        "• Awarded the Mahatma Gandhi Scholarship for academic excellence.",
        "• Achieved a final score of 75.8%.",
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
        "• Established an early foundation in STEM subjects with a focus on Computer Science and Mathematics.",
        "• Achieved a final score of 85.63%.",
      ],
      website_link: "https://newhorizon.edu.np",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "5-Day AI Agents Intensive Course with Google",
      subtitle: "Kaggle",
      logo_path: "",
      certificate_link:
        "https://www.kaggle.com/certification/badges/manojkumarthapa/105",
      alt_name: "Google",
      color_code: "#ffffff",
      icon: "logos:google-icon",
    },
    {
      title: "AI Masterclass",
      subtitle: "SARAS AI Institute",
      logo_path: "saras_ai_institute.png",
      certificate_link:
        "https://credsverse.com/credentials/3f44c319-2b85-4345-824f-191da7fdbef2",
      alt_name: "SARAS AI Institute",
      color_code: "#c2b3ef",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/W29WV2DFL476",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "DeepLearning.AI",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/MLU4694ENBEL",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },

    {
      title: "Data Visualization using Python",
      subtitle: "Great Learning",
      logo_path: "greatlearning_logo.png",
      certificate_link:
        "https://olympus1.greatlearning.in/course_certificate/ZMICNLYY",
      alt_name: "Great Learning",
      color_code: "#1F70C199",
    },
    {
      title: "Data Visualization using Tableau",
      subtitle: "Great Learning",
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
    "AI Engineer with hands-on experience designing and building <strong>backend services, APIs, and orchestration layers</strong> that support AI and GenAI use cases, including an autonomous agent built with <strong>LangGraph</strong> that integrates multiple tools and data sources to solve complex tasks end to end.<br/><br/>Proficient in <strong>Python and SQL</strong>, with practical experience across LLM integration, prompt orchestration, <strong>retrieval-augmented generation (RAG)</strong>, and productionising AI systems from prototype through to deployed service.<br/><br/>Strong software engineering discipline covering <strong>clean code, automated testing, version control, and CI/CD</strong>, with a track record of taking ambiguous problems through to practical, working solutions. Comfortable collaborating across technical and business stakeholders to ensure AI use cases are usable, reliable, and safely deployed.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "AI Intern",
          company: "FlyRank AI",
          company_url: "https://www.flyrank.com",
          logo_path: "flyrank_logo.jpeg",
          duration: "June 2026 - Present",
          location: "London Area, United Kingdom · Remote",
          description: [
            "Building <strong>RAG pipelines</strong>, structured output systems, and evaluation harnesses as part of FlyRank AI's Backend AI Engineering track.",
            "Working with <strong>Python, FastAPI, and LLM APIs</strong> to design and ship real backend AI products.",
          ],
          color: "#6366F1",
        },
        {
          title: "Mentor",
          company: "Aston University",
          company_url: "https://www.aston.ac.uk",
          logo_path: "aston_logo.png",
          duration: "August 2025 - January 2026",
          location: "Birmingham, England, United Kingdom · On-site",
          description: [
            "Mentored <strong>10+ MSc AI students</strong> through their academic transition, providing guidance on coursework, project strategies, and career development.",
            "Conducted <strong>weekly one-on-one sessions</strong> to support skill development in machine learning, Python, and research methodologies, helping students improve project outcomes.",
          ],
          color: "#A100FE",
        },
        {
          title: "Software Engineer",
          company: "Accenture",
          company_url: "https://www.accenture.com",
          logo_path: "accenture_logo.png",
          duration: "October 2021 - May 2022",
          location: "Bangalore, India",
          description: [
            "Built and maintained production features in <strong>Java Spring Boot</strong> and <strong>React</strong> for a large-scale enterprise application, working in a team of 6 engineers across the full SDLC from design through deployment.",
            "Owned backend REST API services end-to-end: gathered requirements from stakeholders, implemented business logic and <strong>PostgreSQL/MySQL</strong> data access layers, wrote <strong>JUnit</strong> tests, and monitored production behaviour to catch regressions early.",
            "Reduced <strong>API response time by ~40%</strong> through SQL query optimisation and N+1 elimination, improving reliability for downstream services and meeting SLA targets.",
            "Participated in regular code reviews, giving and receiving feedback to improve code quality; contributed to Agile sprint ceremonies and delivered features consistently across releases.",
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
    profile_image_path: "Manoj Thapa Professional.png",
    description:
      "Have a project in mind or an opportunity you'd like to discuss? I'm currently working as an AI Intern at FlyRank AI and open to discussing opportunities where I can apply my skills in AI and backend engineering. Let's talk about how I can contribute to your team.",
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
    subtitle: "+44 7438029689",
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
