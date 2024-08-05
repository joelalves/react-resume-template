import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/windows.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/joel.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Joel Alves.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Valença do Minho based <strong className="text-stone-100">Automotive cybersecurity</strong>, currently
        working at <strong className="text-stone-100">CTAG - Centre Technologique de l'Automobile de Galice</strong>{' '}
        helping teams create a strong software.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training <strong className="text-stone-100">Padel</strong>, riding my{' '}
        <strong className="text-stone-100">bike's</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Places</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/cv/assets/Profile.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a motivated and dedicated professional, graduated in Computer Engineering and studying a master in cybersecurity, with a solid foundation in computer science and software engineering. Throughout my training, I acquired advanced skills in programming, systems analysis and technological problem solving. With a proactive and results-oriented approach, I constantly seek challenges that allow me to creatively apply my knowledge to innovative solutions. I am passionate about technology and committed to contributing to the industry's progress by combining my academic background with an entrepreneurial mindset and solid interpersonal skills. With a solid work ethic and the ability to learn quickly, I look forward to taking on new challenges and contributing to success in a dynamic environment.`,
  aboutItems: [
    {label: 'Location', text: 'Valença do Minho, PT', Icon: MapIcon},
    {label: 'Age', text: '35', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Portuguese', Icon: FlagIcon},
    {label: 'Interests', text: 'Padel, Bikes, Places', Icon: SparklesIcon},
    {label: 'Study', text: 'Instituto Politécnico de Viana do Castelo', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'CTAG', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Portuguese',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 8,
      },
      {
        name: 'English',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Angular',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'AWS',
        level: 6,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
  {
    name: 'Cybersecurity',
    skills: [
      {
        name: 'Vulnerability Management',
        level: 7,
      },
      {
        name: 'Common Criteria',
        level: 5,
      },
      {
        name: 'Verification and Validation (V&V)',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2022 - Present',
    location: 'Instituto Politécnico de Viana do Castelo',
    title: 'Masters in CyberSecurity',
    content: (
      <p>
        The Master in Cybersecurity has as its main objective the advanced training of specialists in network, systems
        and information security;
      </p>
    ),
  },
  {
    date: 'Setember 2011 - Setember 2014',
    location: 'Instituto Superior de Engenharia do Porto',
    title: 'Degree in Informatics Enginnering',
    content: (
      <p>
        During the program, I acquired advanced knowledge in programming languages, operating systems, computer
        networks, algorithms, artificial intelligence and software development.
      </p>
    ),
  },
  {
    date: 'Setember 2009 - Setember 2011',
    location: 'Instituto Politécnico de Viana do Castelo',
    title: 'Technical Course Development in Multimedia Products',
    content: <p>Systems Projects and Multimedia Production, 2D and 3D Multimedia Systems, Application Programming.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2022 - Present',
    location: 'CTAG',
    title: 'Automotive cybersecurity',
    content: (
      <p>
        Common Criteria, Implement ISO, Implements solutions for web applications and validate the same applications.
      </p>
    ),
  },
  {
    date: 'November 2018 - June 2022',
    location: 'WIT - Software',
    title: 'Software Engineer',
    content: (
      <p>
        - Front-End: Angular, TypeScript, CSS3, SAML2.0(WebSSO), GIT, Scrum, Local Storage, Session Storage, Jekings{' '}
        <br></br>- Backend: AWS Cloud, Serverless, Redis, NodeJS, NPM, TypeScript, JavaScript, ObjectionJS, Postgres
        SQL, Twitter API, GIT, Scrum, Jtests(UnitTest), Jekings
      </p>
    ),
  },
  {
    date: 'April 2017 - October 2018',
    location: 'CEiiA',
    title: 'Front-End Web Developer',
    content: <p>PHP, Laravel(5.1), Html5, JavaScript, CSS3, AJAX, Node js,webpack, Gulp, GIT, Scrum, Jira</p>,
  },
  {
    date: 'January 2016 - April 2017',
    location: 'Nonius Software',
    title: 'Software Engineer(Full Stack)',
    content: <p>PHP, Html5, Java, CSS3, AJAX, JavaScript, SVN, MYSQL, MongoDB FFMPEG</p>,
  },
  {
    date: 'October 2014 - July 2015',
    location: 'WebComum',
    title: 'Web Developer(Full Stack)',
    content: <p>PHP, YII, Html5, CSS, AJAX, MYSQL, FFMPEG, SEO, GI, FFMPEG, SCRUM</p>,
  },
  {
    date: 'February 2014 - October 2014',
    location: 'Manemac',
    title: 'Python & Web Developer(Full Stack)',
    content: <p>Web Developer (Django, Jquery, Html5, CSS, AJAX, MYSQL)</p>,
  },
  {
    date: 'October 2010 - October 2011',
    location: 'Town Hall of Valença do Minho',
    title: 'Multimedia Product Development Technician (Internship)',
    content: (
      <p>
        - Creating images (banners) - Dynamization of the video gallery. - 3D of the future Railway Museum - Site for
        the Hostel of São Teotónio
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
  /*testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],*/
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'joel.17.alves@gmail.com',
      href: 'mailto:joel.17.alves@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Valença do Minho, Portugal',
      href: 'https://www.google.pt/maps/place/Valen%C3%A7a/@42.030144,-8.6616781,14z/data=!3m1!4b1!4m6!3m5!1s0xd259a8a73810093:0x984ac8b0e4342c92!8m2!3d42.0268751!4d-8.6421522!16zL20vMGJ2NGtz?entry=ttu',
    },
    {
      type: ContactType.Instagram,
      text: '@joeldalves',
      href: 'https://www.instagram.com/joeldalves/',
    },
    {
      type: ContactType.Github,
      text: 'joelalves',
      href: 'https://github.com/joelalves',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/joelalves'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/joel-dinis-pereira-alves-a4759334/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/joeldalves/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/JoelAlves5'},
];
