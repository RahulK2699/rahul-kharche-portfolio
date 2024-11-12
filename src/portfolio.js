/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Kharche",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vvrkBHG6HMlkd_zCAl5Znnz9TIb97q4K/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/RahulK2699",
  linkedin: "https://www.linkedin.com/in/rahulkharche2699/",
  gmail: "rahulkharche99@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FRONTEND DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    // {
    //   skillName: "tailwindCSS",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    {
      skillName: "javaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    // {
    //   skillName: "typeScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fergusson College",
      logo: require("./assets/images/fergussonLogo.png"),
      subHeader: "Master in Computer Applications (M.Sc. CA)",
      duration: "June 2019 - March 2021",
    },
    {
      schoolName: "SP College",
      logo: require("./assets/images/spcollegelogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "June 2016 - March 2019",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "100%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%",
    },
    {
      Stack: "Programming",
      progressPercentage: "100%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "UI Engineer",
      company: "LogicMonitor",
      companylogo: require("./assets/images/lmLogo.png"),
      date: "April 2024 – Present",
      desc: "Contributing on a product.",
      descBullets: [
        "Improving user experience through the migration of the legacy design",
        "Building advanced features to ensure a seamless user experience",
        "Resolve bugs and user feedbacks",
        "Tech Stack: ReactJS, Javascript, TypeScript, AWS",
      ],
    },
    {
      role: "Frontend Engineer",
      company: "Tricog Health",
      companylogo: require("./assets/images/tricogLogo.png"),
      date: "October 2022 – March 2024",
      desc: "Worked on the product as a Frontend developer",
      descBullets: [
        "Echo: Superheaded the development journey of a product right from its inception. This involved complex UI/UX challenges, shaping the frontend architecture, and crafting reusable components. Resulting in reduced user time by optimizing codebase by using optimizing strategies such as Webpack, Babel, Code Splitting, Redux store optimization.",
        "Tech Stack: React JS, Redux, TypeScript, JavaScript, Webpack, Babel, Cypress JS, SASS, Material UI, Bitbucket",
      ],
    },
    {
      role: "Software Engineer",
      company: "Scube Elate",
      companylogo: require("./assets/images/scubeLogo.png"),
      date: "February 2022 – August 2022",
      desc: "Contributed to the development of 3+ web applications as a Full-stack developer from inception to completion.",
      descBullets: [
        "Tech Stack: React JS, Context APIS, Redux, Javascript, TypeScript, Cypress JS, Tailwind CSS, Material UI, Git, Github",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Company Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/tricogLogo.png"),
      projectName: "Insta ECHO",
      projectDesc:
        "InstaEcho™ helps doctors diagnose echocardiograms quickly and accurately and provide care coordination tools to assist in patient care.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.tricog.com/instaecho/",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require("./assets/images/applyuninow.png"),
      projectName: "Applyuninow",
      projectDesc:
        "Simplifying University Admissions: Developed a seamless platform for international students applying to U.S. universities",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://www.applyuninow.com/",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },
    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description:
    //     "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: "",
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8793635952",
  email_address: "rahulkharche99@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
