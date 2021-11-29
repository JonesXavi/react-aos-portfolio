export const HeaderData = {
  name: 'Jones Bastin Xavier',
  role: 'Full Stack Web Developer'
};

export const AboutData = {
  title: 'About',
  subTitle: 'Myself',
  content: `Hi, I am Jones Bastin Xavier a passionate Full Stack Software Developer from India. I stay hungry to learn new things and produce something that could revolutionize the Internet one day. I love cooking things up by leveraging JavaScript to build responsive web apps, hybrid mobile apps and interactive features that drive business growth. Prowess in Angular, React JS. Take a look at my portfolio!`,
  profileImg: '../images/profile.jpeg'
};
export const skillsSection = {
  title: "Skills",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Stripe",
      fontAwesomeClassname: "fab fa-cc-stripe"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "Mongo DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS S3",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export const ProjectsData = {
  title: 'Projects',
  subTitle: 'View some of my recent work',
  githubImg: '../images/github.png',
  globeImg: '../images/globe.png',
  demoSite: 'Demo Site',
  githubSite: 'Github Site',
  projectList: [
    {
      title: 'Games Info',
      description: 'Games database app built using Angular 11 and public API for data.',
      projectImg: '../images/game-info-angular.gif',
      stackImg: '../images/angular.png',
      demoUrl: 'https://jonesxavi.github.io/Game-Info-Angular',
      githubUrl: 'https://github.com/JonesXavi/Game-Info-Angular',
      techStack: [
        'Angular', 'HTML 5', 'CSS 3'
      ],
      aos1: {
        type: 'flip-right',
        delay: 200
      },
      aos2: {
        type: 'flip-left',
        delay: 400
      }
    }, {
      title: 'Tic Tac Toe',
      description: 'A Tic Tac Toe app built using pure Javascript with light/dark mode.',
      projectImg: '../images/tic-tac-toe.gif',
      stackImg: '../images/js.png',
      demoUrl: 'https://jonesxavi.github.io/JS-Tic-Tac-Toe-App',
      githubUrl: 'https://github.com/JonesXavi/JS-Tic-Tac-Toe-App',
      techStack: [
        'Javascript', 'HTML 5', 'CSS 3'
      ],
      aos1: {
        type: 'slide-left',
        delay: 200
      },
      aos2: {
        type: 'slide-right',
        delay: 400
      }
    }, {
      title: 'Calculator',
      description: 'A Simple Calculator App built with Pure Javascript and Grid CSS.',
      projectImg: '../images/calc.gif',
      stackImg: '../images/js.png',
      demoUrl: 'https://jonesxavi.github.io/JS-Series-Calc-App',
      githubUrl: 'https://github.com/JonesXavi/JS-Series-Calc-App',
      techStack: [
        'Javascript', 'HTML 5', 'CSS 3'
      ],
      aos1: {
        type: 'flip-up',
        delay: 200
      },
      aos2: {
        type: 'flip-down',
        delay: 400
      }
    }, {
      title: 'Tasker',
      description: ' A Simple Task Manager App built using React 17, JSON server.',
      projectImg: '../images/tasker.gif',
      stackImg: '../images/react.png',
      demoUrl: 'https://jonesxavi.github.io/react-tasker',
      githubUrl: 'https://github.com/JonesXavi/react-tasker',
      techStack: [
        'React', 'HTML 5', 'CSS 3'
      ],
      aos1: {
        type: 'flip-left',
        delay: 200
      },
      aos2: {
        type: 'flip-right',
        delay: 400
      }
    }
  ]
};

export const WorkExperience = {
  title: 'Work Experience',
  subTitle: 'Past and current jobs',
  experienceList: [
    {
      role: 'Senior App Developer',
      company: 'BNY Mellon',
      companylogo: './images/bny.jpg',
      duration: 'August 2019 - Present',
      responsibilites: 'Started off as a Senior front-end dev to become a full stack developer, working on Angular, Sprint Boot and Mongodb. Mentored juniors and conducted tech training sessions within the organization. Uplifted my leadership quality by leading a micro team.',
      aos: {
        type: 'slide-left',
        delay: 700
      }
    }, {
      role: 'Consultant',
      company: 'Virtusa',
      companylogo: './images/virtusa.jpg',
      duration: 'May 2014 - July 2019',
      responsibilites: 'Started my IT career here as a Junior Web Developer. Started off with Vanilla JS & jQuery to become an Angular JS and React JS developer. Built reusable UI components to optimize work across various apps. Experience in developing cross browser compatible web apps.',
      aos: {
        type: 'slide-right',
        delay: 700
      }
    }
  ]
};

export const Contacts = {
  types: [
    {
      link: 'https://wa.link/fcxqr9',
      icon: 'fas fa-mobile-alt'
    }, {
      link: 'mailto:jonesedvin@gmail.com?Subject=Interested in your portfolio',
      icon: 'fas fa-at'
    }, {
      link: 'https://www.linkedin.com/in/jonesxavi/',
      icon: 'fab fa-linkedin'
    }, {
      link: 'https://www.github.com/jonesxavi',
      icon: 'fab fa-github'
    }
  ]
};
