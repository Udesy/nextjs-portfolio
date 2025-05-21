import { title } from "process";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Yc Directory",
    des: "YC Directory is a minimal blog platform designed to share innovative startup ideas, explore emerging businesses, and connect with fellow founders.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://yc-directory-liard-one.vercel.app/",
  },
  {
    id: 2,
    title: "Brainwave",
    des: "Brainwave is a modern landing page web app featuring smooth animations, interactive elements, and a clean design — perfect for showcasing products with style and clarity.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://brainwave-ruddy-omega.vercel.app/",
  },
  {
    id: 3,
    title: "focuSphere - A focus timer app",
    des: "FocusSphere is a focus timer with a GitHub-style heatmap and bar chart, helping you track and analyze your productivity effortlessly.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://focu-sphere.vercel.app/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://iphone15-website-one.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Uddeshya was a seamless experience. His attention to detail and ability to translate ideas into stunning websites exceeded our expectations. Highly recommend his expertise!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Uddeshya's work on our website was truly outstanding. His ability to combine design and functionality created a site that is both beautiful and highly efficient. Amazing work!",
    name: "Sarah Williams",
    title: "CEO of BrightVision Marketing",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    quote:
      "I was blown away by Uddeshya's skill in bringing our brand to life online. His designs are sleek, modern, and incredibly user-friendly. It was a fantastic collaboration!",
    name: "David Carter",
    title: "Founder of NovaTech Solutions",
    img: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    quote:
      "From start to finish, Uddeshya provided exceptional service. He understood our needs perfectly and delivered a website that not only looks amazing but performs flawlessly. Highly recommended!",
    name: "Jessica Brown",
    title: "CMO of Elevate Digital",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    quote:
      "Uddeshya is a true professional. His ability to blend creativity with functionality made our website a standout in the industry. We're thrilled with the results!",
    name: "James Anderson",
    title: "COO of Vertex Innovations",
    img: "https://randomuser.me/api/portraits/men/78.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const processCard = [
  {
    id: 0,
    btntitle: "Phase1",
    title: "Planning & Strategy",
    desc: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    containerClassName: "bg-emerald-900",
  },

  {
    id: 1,
    btntitle: "Phase 2",
    title: "Development & Progress Update",
    desc: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    containerClassName: "bg-black",
    colors: [
      [236, 72, 153],
      [232, 121, 249],
    ],
  },

  {
    id: 2,
    btntitle: "Phase 3",
    title: "Development & Launch",
    desc: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    containerClassName: "bg-sky-600",
    colors: [[125, 211, 252]],
  },
];
