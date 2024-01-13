import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "İhsan Sunman",
  initials: "IS",
  location: "Istanbul, Turkey",
  locationLink: "https://www.google.com/maps/place/Istanbul",
  about:
    "Frontend Developer with 2+ years of experience in building web applications.",
  summary:
    "I think I'm gonna have to write something about myself here.",
  avatarUrl: "https://avatars.githubusercontent.com/u/9339872?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "ihsansunman@asnus.com",
    tel: "+905421065299",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ihsansunman",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ihsansunman/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ihsansunman",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Anatolian University",
      degree: "Bachelor's Degree in Management Information Systems",
      start: "2020",
      end: "2022",
    },
    {
      school: "Eskişehir Technical University",
      degree: "Associate's Degree in Computer Programming",
      start: "2018",
      end: "2020",
    }
  ],
  work: [
    {
      company: "Istanbul Metropolitan Municipality",
      link: "https://ibb.istanbul",
      badges: [],
      title: "Frontend Developer",
      start: "2022",
      end: "Present",
      description:
        "I've been working as a Frontend developer at Istanbul Metropolitan Municipality, where I actively utilize React.js, JavaScript, Tailwind CSS, and Maplibre technologies in my projects to craft creative solutions.",
    }
  ],
  skills: [
    "JavaScript",
    "React/Next.js/Vite.js",
    "Node.js",
    "CSS/SCSS/Tailwind CSS",
    "Mapbox/MapLibre/Leflet",
  ],
  projects: [
    {
      title: "IBB City Map",
      techStack: [
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Maplibre GL JS",
      ],
      description: "The city map application developed by Istanbul Metropolitan Municipality not only provides efficient in-city navigation through its routing feature but also includes rich city information and features such as historical landmarks.",
      link: {
        label: "sehirharitasi.ibb.gov.tr",
        href: "https://sehirharitasi.ibb.gov.tr/",
      },
    },
    {
      title: "IBB Etkinlik Haritası",
      techStack: [
        "JavaScript",
        "React.js",
        "Tailwind CSS",
        "Maplibre GL JS",
      ],
      description:
        "The Istanbul Metropolitan Municipality's event map application boasts features such as an event list, map location display, routing functionality, and effective filtering options. Users can easily explore and plan their participation in events by utilizing these features, enhancing their overall experience with the application.",
      link: {
        label: "etkinlikharitasi.ibb.gov.tr",
        href: "https://etkinlikharitasi.ibb.gov.tr/",
      },
    },
    {
      title: "asnus.com",
      techStack: ["Side Project", "Gatsby.js", "MDX"],
      description:
        "Asnus is a project centered around technology articles, enriched by my personal contributions. I share insights into industry innovations and developments by featuring my own articles on this platform. Asnus provides a unique personal experience with original content that includes my own articles.",
      link: {
        label: "asnus.com",
        href: "https://asnus.com/",
      },
    },
    {
      title: "Sayılarla İstanbul",
      techStack: ["JavaScript", "React.js", "Material UI", "Maplibre GL JS"],
      description:
        "Istanbul Metropolitan Municipality's data-driven initiative, this project presents numerically curated information for Istanbul residents. Designed to be publicly accessible, it serves as a platform showcasing relevant statistics and data provided by Istanbul Metropolitan Municipality, catering to the informational needs of the public.",
      link: {
        label: "sayilarlaistanbul.ibb.gov.tr",
        href: "https://sayilarlaistanbul.ibb.gov.tr/",
      },
    }
  ],
} as const;
