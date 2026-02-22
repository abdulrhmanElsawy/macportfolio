import { workProjectsForFinder } from '../data/elsawyWork.js';

const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: true,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Oct 2, 2025",
      title:
        "A premium dessert and drinks destination offering a variety of cakes, waffles, crepes, coffee, and matcha.",
      image: "/images/1.webp",
      link: "https://bros-ksa.com/",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "The official website of the Sharjah Police Headquarters, providing digital services for traffic, security, and community inquiries.",
      image: "/images/2.webp",
      link: "https://www.shjpolice.gov.ae/",
    },
    {
      id: 3,
              date: "Sep 15, 2025",
      title: "A Saudi company specializing in information technology and business solutions, offering digital transformation, infrastructure, and data management services.",
      image: "/images/3.webp",
      link: "https://almohtawa.com.sa/",
    },
    {
      id: 4,
      date: "Oct 15, 2025",
      title: "A construction and contracting company specializing in building construction, roads, bridges, infrastructure projects, and equipment rental.",
      image: "/images/4.webp",
      link: "https://acpca.net/",
    },
    {
      id: 5,
      date: "Nov 15, 2025",
      title: "A luxury car rental service based in Riyadh, offering premium vehicles for business, special events, and airport transfers.",
      image: "/images/5.webp",
      link: "https://newtrendsa.com/",
    },
    {
      id: 6,
      date: "Dec 15, 2025",
      title: "A media production and digital assets agency offering services like video production, animation, event documentation, and auditory identity design.",
      image: "/images/6.webp",
      link: "https://proeffect.sa/",
    },
    {
      id: 7,
      date: "Jan 15, 2026",
      title: "A comprehensive pet care platform in Egypt connecting pet owners with vets, shops, adoption services, and lost & found assistance.",
      image: "/images/7.webp",
      link: "https://egypet.site/",
    },
    {
      id: 8,
      date: "Feb 15, 2026",
      title: "A building maintenance company in the UAE providing plumbing, electrical, HVAC, and general repair services.",
      image: "/images/8.webp",
      link: "https://magicfixer.net/",
    },
    {
      id: 9,
      date: "Mar 15, 2026",
      title: "A leading trading company in the UAE supplying electrical, plumbing, hardware, and power tool products.",
      image: "/images/9.webp",
      link: "https://magicdxb.com/",
    },
    {
      id: 10,
      date: "Mar 15, 2026",
      title: "A Jeddah-based marketing agency providing branding, advertising, social media management, and event activation services.",
      image: "/images/10.webp",
      link: "https://aurora-ksa.com/",
    },
    {
      id: 11,
      date: "Mar 15, 2026",
      title: "A service provider assisting healthcare professionals with medical licensing, certification, and employment processes in the UAE and GCC.",
      image: "/images/11.webp",
      link: "https://www.iridiuminfinte.com/",
    },
    {
      id: 12,
      date: "Mar 15, 2026",
      title: "A technical consultancy firm specializing in financial services analytics, data management, and OFSAA administration.",
      image: "/images/12.webp",
      link: "https://ofsaera.com/",
    },
    {
      id: 13,
      date: "Mar 15, 2026",
      title: "A creative agency offering artistic production, digital marketing, TV/film production, and health sector marketing strategies.",
      image: "/images/13.webp",
      link: "https://www.bluray-media.com/",
    },
    {
      id: 14,
      date: "Mar 15, 2026",
      title: "A premium automotive care center specializing in car wrapping, paint protection films (PPF), and detailing services.",
      image: "/images/14.webp",
      link: "https://sunmaxauto.ae/",
    },
    {
      id: 15,
      date: "Mar 15, 2026",
      title: "A subsidiary of Nesma Batterjee specializing in manufacturing high-quality construction chemicals like adhesives and waterproofing.",
      image: "/images/15.webp",
      link: "https://www.meister-me.com/",
    },
    {
      id: 16,
      date: "Mar 15, 2026",
      title: "A construction chemicals manufacturer specializing in adhesives and waterproofing.",
      image: "/images/16.webp",
      link: "https://www.meister-me.com/",
    },
  ];
  
  const techStack = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Expo"],
    },
    {
      category: "Styling",
      items: ["Tailwind CSS", "Sass", "CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "NestJS", "Hono"],
    },
    {
      category: "Database",
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
    },
  ];
  
  const socials = [
    {
      id: 1,
      text: "GitHub",
      icon: "/icons/github.svg",
      bg: "#24292e",
      link: "https://github.com/abdulrhmanElsawy",
    },
    {
      id: 2,
      text: "Facebook",
      icon: "/icons/twitter.svg",
      bg: "#1877f2",
      link: "https://www.facebook.com/profile.php?id=100006455849752",
    },
    {
      id: 3,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/abdelrhman-elsawy-365632204/",
    },
    {
      id: 4,
      text: "Khamsat",
      icon: "/icons/atom.svg",
      bg: "#4bcb63",
      link: "https://khamsat.com/user/abdulrhmanelsawy/reviews",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/1.webp",
    },
    {
      id: 2,
      img: "/images/2.webp",
    },
    {
      id: 3,
      img: "/images/3.webp",
    },
    {
      id: 4,
      img: "/images/4.webp",
    },
    {
      id: 5,
          img: "/images/5.webp",
    },
    {
      id: 6,
      img: "/images/6.webp",
    },
    {
      id: 7,
      img: "/images/7.webp",
    },
    {
      id: 8,
      img: "/images/8.webp",
    },
    {
      id: 9,
      img: "/images/9.webp",
    },
    {
      id: 10,
      img: "/images/10.webp",
    },
    {
      id: 11,
      img: "/images/11.webp",
    },
    {
      id: 12,
      img: "/images/12.webp",
    },
    {
      id: 13,
      img: "/images/13.webp",
    },
    {
      id: 14,
      img: "/images/14.webp",
    },
    {
      id: 15,
      img: "/images/15.webp",
    },
    {
      id: 16,
      img: "/images/16.webp",
    }
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
  const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: workProjectsForFinder,
  };

  const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-5",
        imageUrl: "/images/elsawy.jpg",
      },
      {
        id: 2,
        name: "casual-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-28 right-72",
        imageUrl: "/images/elsawy-2.jpg",
      },
      {
        id: 3,
        name: "conference-me.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-52 left-80",
        imageUrl: "/images/elsawy-3.jpg",
      },
      {
        id: 4,
        name: "about-me.txt",
        icon: "/images/txt.png",
        kind: "file",
        fileType: "txt",
        position: "top-60 left-5",
        subtitle: "Meet the Developer Behind the Code",
        image: "/images/elsawy.jpg",
        description: [
          "Hey! I'm Abdelrhman Elsawy, a web developer who builds high-performance websites and exceptional user experiences.",
          "I work with React, Next.js, Node.js, and TypeScript—focusing on clean UI, smooth UX, and maintainable code.",
          "I've delivered projects for clients across KSA, UAE, and Egypt—from e-commerce and dashboards to marketing and government sites.",
          "Freelance developer on Khamsat. Let's turn your idea into a solid product.",
        ],
      },
    ],
  };

  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
      },
    ],
  };

  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.webp",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.webp",
      },
      {
        id: 2,
        name: "trash2.webp",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-40 left-80",
        imageUrl: "/images/trash-2.webp",
      },
    ],
  };

  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };

  const INITIAL_Z_INDEX = 1000;

  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null, isMaximized: false },
  };

  export { INITIAL_Z_INDEX, WINDOW_CONFIG };