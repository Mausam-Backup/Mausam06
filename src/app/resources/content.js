import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Mausam",
  lastName: "Kar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // IANA time zone identifier for India
  locationDisplay: "Assam, India", // Display text for location
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to My Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Website",
    icon: "globe",
    link: "https://mausam04.vercel.app/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Mausam5055",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mausam-kar-6388861a7/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mausamkumkar@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Web Developer and builder</>,
  subline: (
    <>
      I'm Mausam Kar, a Full Stack Web Developer at <InlineCode>VIT</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.locationDisplay}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Mausam is a Indian-based Full Stack Web Developer with a passion for transforming complex challenges
        into simple, elegant design solutions. His work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2025 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX , resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/Once-Ui.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2024 - 2025",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "VIT Bhopal University",
        description: <>B.Tech in Computer Science and Engineering(AIML)</>,
      },
      {
        name: "Ramanuj Gupta Senior Secondary School",
        description: <>Primary and Secondary Education</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full Stack Web Developer",
        description: <>Building modern web applications with React, Node.js, Express, and MongoDB. Expertise in creating scalable full-stack solutions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/1.jpeg",
            // src: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/2.jpg",
            // src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AIML (AI & Machine Learning)",
        description: <>Developing AI and Machine Learning solutions with Python, TensorFlow, and integrating AI capabilities into modern applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/AIML.png",
            alt: "AI and Machine Learning",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const projects = {
  label: "Projects",
  title: "My projects",
  description: `A collection of projects by ${person.name}`,
  // Projects showcase
  items: [
    {
      title: "Phishing-Detection System",
      description: "A system that identifies suspicious phishing URLs by analyzing patterns, domain features, and risk scores.",
      type: "Security + ML",
      tech: "Python, ML models, Flask/UI",
      features: ["URL risk prediction model", "Threat score visualization", "Clean, minimal dashboard"],
      outcome: "Helps users stay protected by evaluating website safety.",
      image: "/images/gallery/img-01.png",
      github: "https://github.com/Mausam5055/Phising-Detection",
      caseStudy: "/work/phishing-detection-system",
      link: "https://github.com/Mausam5055/Phising-Detection",
      orientation: "vertical",
    },
    {
      title: "Design2Code Hackathon",
      description: "A polished hackathon submission featuring a dark-mode UI, animations, and modern design standards.",
      type: "Frontend UI",
      tech: "React, TailwindCSS, GSAP, JavaScript",
      features: ["GSAP animations", "Clean UI components", "Modern dashboard layout"],
      outcome: "Demonstrates mastery of frontend frameworks and motion design.",
      image: "/images/gallery/img-02.png",
      github: "https://github.com/Mausam5055/Design2Code",
      caseStudy: "/work/design2code-hackathon",
      link: "https://github.com/Mausam5055/Design2Code",
      orientation: "horizontal",
    },
    {
      title: "GitHub Email Automation",
      description: "Automatically sends analytics emails, commit summaries, or PR reports from GitHub repositories.",
      type: "Automation Tool",
      tech: "Node.js, JavaScript, GitHub API",
      features: ["Scheduled email triggers", "GitHub activity monitoring", "Custom email templates"],
      outcome: "Saves developer time by automating repetitive reporting tasks.",
      image: "/images/gallery/img-03.png",
      github: "https://github.com/Mausam5055/Github-Email-Automation",
      caseStudy: "/work/github-email-automation",
      link: "https://github.com/Mausam5055/Github-Email-Automation",
      orientation: "vertical",
    },
    {
      title: "RAG System",
      description: "A RAG pipeline that retrieves contextual data from vector databases and generates accurate answers.",
      type: "AI + LLM",
      tech: "Pinecone, Next.js, OpenAI API",
      features: ["Vector embeddings", "Document upload + semantic search", "Chat interface backed by LLM"],
      outcome: "Improves accuracy and reliability of AI assistants.",
      image: "/images/gallery/img-04.png",
      github: "https://github.com/Mausam5055/Retrival-Augmented-Generation-1",
      caseStudy: "/work/rag-chatbot-pdf-document-assistant",
      link: "https://github.com/Mausam5055/Retrival-Augmented-Generation-1",
      orientation: "horizontal",
    },
    {
      title: "Linpack Club — Frontend UI",
      description: "A creative portfolio-style UI for My college Linpack Club.",
      type: "UI/UX Frontend",
      tech: "React, TailwindCSS, GSAP, JavaScript",
      features: ["Smooth interactive layouts", "Hover animations", "Styled component sections"],
      outcome: "Showcases frontend creativity and design capabilities.",
      image: "/images/gallery/img-05.png",
      github: "https://github.com/Mausam5055/Club-Website",
      caseStudy: "/work/linpack-club-frontend-ui",
      link: "https://github.com/Mausam5055/Club-Website",
      orientation: "horizontal",
    },
    {
      title: "CampusSync",
      description: "A complete academic management platform for students and faculty.",
      type: "Full Stack App",
      tech: "Next.js, Supabase, Tailwind, React",
      features: ["Notes, assignments, submissions", "Attendance & community features", "Real-time updates"],
      outcome: "Centralized academic workflow system.",
      image: "/images/gallery/img-06.png",
      github: "https://campus-sync-frontend-three.vercel.app/",
      caseStudy: "/work/campussync-educational-management-platform",
      link: "https://campus-sync-frontend-three.vercel.app/",
      orientation: "vertical",
    },
    {
      title: "StockMarket — Full Stack",
      description: "A dashboard showing stock data, analytics, and investment insights.",
      type: "Finance App",
      tech: "MongoDB, Next.js, REST APIs",
      features: ["Real-time stock graphing", "AI-assisted investment tips", "Secure user auth"],
      outcome: "Makes market tracking accessible for beginners.",
      image: "/images/gallery/img-07.png",
      github: "https://github.com/Mausam5055/Stock-Market",
      caseStudy: "/work/stockmarket-full-stack",
      link: "https://github.com/Mausam5055/Stock-Market",
      orientation: "horizontal",
    },
    {
      title: "Connect Flow",
      description: "A modern communication platform with real-time messaging and face-to-face calling.",
      type: "Real-time Communication",
      tech: "WebRTC, Socket.io, React, Node",
      features: ["Live video calls", "One-to-one and group chat", "Online/offline status indicators"],
      outcome: "A strong demonstration of WebRTC and socket expertise.",
      image: "/images/gallery/img-08.jpg",
      github: "https://github.com/Mausam5055/Connect-Flow",
      caseStudy: "/work/connecthub-real-time-chat-application",
      link: "https://github.com/Mausam5055/Connect-Flow",
      orientation: "vertical",
    },
    {
      title: "Kar’s Kitchen",
      description: "A Fullstack  complete ordering platform for restaurants with admin panel.",
      type: "Food Ordering System",
      tech: "MongoDB, Next.js, Stripe, Razorpay",
      features: ["Menu browsing & filters", "Online payments", "Real-time order tracking"],
      outcome: "Shows real-world eCommerce + payment integration experience.",
      image: "/images/gallery/img-09.jpg",
      github: "https://github.com/Mausam5055/Restraunt-Management-System",
      caseStudy: "/work/kars-kitchen",
      link: "https://github.com/Mausam5055/Restraunt-Management-System",
      orientation: "horizontal",
    },
    {
      title: "Blood Donation System",
      description: "Helps connect blood donors with recipients effectively.",
      type: "Health + Social Service App",
      tech: "React, Node.js, Express, MongoDB",
      features: ["Donor registration", "Emergency donor finder", "Location-based matching"],
      outcome: "Solves a meaningful real-life problem with tech.",
      image: "/images/gallery/img-10.jpg",
      github: "https://github.com/Mausam5055/Blood-Bank-Management",
      caseStudy: "/work/blood-donation-system",
      link: "https://github.com/Mausam5055/Blood-Bank-Management",
      orientation: "horizontal",
    },
    {
      title: "Event Management Platform",
      description: "A platform to host events, sell tickets, and manage attendees.",
      type: "EventTech Product",
      tech: "Next.js, Stripe, Tailwind, APIs",
      features: ["Ticket booking", "Event dashboards", "Payment integration"],
      outcome: "Enables seamless event organization and monetization.",
      image: "/images/gallery/img-11.jpg",
      github: "https://github.com/Mausam5055/Event-Management-System",
      caseStudy: "/work/event-management-platform",
      link: "https://github.com/Mausam5055/Event-Management-System",
      orientation: "vertical",
    },
    {
      title: "WP Automation Bot",
      description: "Automates tasks for WordPress admins using WhatsApp integration.",
      type: "WordPress Automation Tool",
      tech: "Bailey’s API, JavaScript",
      features: ["Automated alerts", "Post publishing triggers", "500+ actions supported"],
      outcome: "Reduces workload for bloggers & website managers.",
      image: "/images/gallery/img-12.jpg",
      github: "https://github.com/Mausam5055/WP-Bot",
      caseStudy: "/work/wp-automation-bot",
      link: "https://github.com/Mausam5055/WP-Bot",
      orientation: "horizontal",
    },
    {
      title: "CryptoTrade — Full Stack Crypto App",
      description: "A platform that shows crypto prices, trends, and trading insights.",
      type: "Blockchain/Trading App",
      tech: "React, Node.js, Chart.js, Auth, APIs",
      features: ["Live charts", "Portfolio tracker", "Secure login"],
      outcome: "Provides modern crypto-analytics experience.",
      image: "/images/gallery/img-13.jpg",
      github: "https://github.com/Mausam5055/Crypto-Trade",
      caseStudy: "/work/cryptotrade-full-stack-crypto-app",
      link: "https://github.com/Mausam5055/Crypto-Trade",
      orientation: "horizontal",
    },
    {
      title: "Trendify — Multi-Vendor eCommerce Platform",
      description: "A full-stack multi-vendor marketplace like Amazon/Flipkart.",
      type: "E-Commerce System",
      tech: "Stripe, Razorpay, Next.js, MongoDB",
      features: ["Vendor dashboard", "Product management", "Payment gateways"],
      outcome: "Shows ability to build enterprise-level eCommerce products.",
      image: "/images/gallery/img-14.png",
      github: "https://github.com/Mausam5055/Ecommerce-Website-1",
      caseStudy: "/work/trendify-multi-vendor-ecommerce-platform",
      link: "https://github.com/Mausam5055/Ecommerce-Website-1",
      orientation: "horizontal",
    },
    {
      title: "Nath Mazumdar — Portfolio Website",
      description: "A premium animated portfolio built with 3D interactions.",
      type: "Portfolio UI",
      tech: "Lenis, Three.js, GSAP, React",
      features: ["Smooth scrolling (Lenis)", "Three.js 3D models", "Elegant typography"],
      outcome: "Demonstrates advanced UI motion & visual storytelling.",
      image: "/images/gallery/img-15.png",
      github: "https://github.com/Mausam5055/Priyanka-Interactive",
      caseStudy: "/work/nath-mazumdar-portfolio-website",
      link: "https://github.com/Mausam5055/Priyanka-Interactive",
      orientation: "horizontal",
    },
    {
      title: "YouTube Video Downloader",
      description: "Converts and downloads YouTube videos in different formats and resolutions.",
      type: "Utility Tool",
      tech: "Node.js, React, YT APIs",
      features: ["Format & resolution selection", "Fast processing", "Simple, clean UI"],
      outcome: "Practical tool showcasing API handling and UI skills.",
      image: "/images/gallery/img-16.jpg",
      github: "https://github.com/Mausam5055/You-Tube_Downloader-V02",
      caseStudy: "/work/youtube-video-downloader",
      link: "https://github.com/Mausam5055/You-Tube_Downloader-V02",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, projects };
