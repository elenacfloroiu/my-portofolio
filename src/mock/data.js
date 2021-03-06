import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Elena',
  subtitle: "I'm a Junior Developer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'my-profil.jpg',
  paragraphOne:
    'My name is Floroiu Cristiana-Elena, I am an optimistic person, open to new challenges, and able to integrate quickly into a new collective. Currently, I am a Jr. Developer at ChannelSight company, soaking up as much knowledge and practice as I can in an attempt to improve my IT skills. My main responsibilities are developing robots using technologies such: JavaScript, Apify tool, HTTP requests, HTML, CSS, and SQL in order to extract product information from different retailer websites.',
  paragraphTwo:
    "My relevant qualifications are a bachelor’s degree in Informatic Economics, and also a master's degree in Business Information Systems where I acquired IT skills and an analytical way of thinking. I also did a Front-End programming course at Informal School of IT because of my passion for web design and the fact that I pay attention to details. During the course, I have learnt more about the web development world. In the building phase of the course, I was gradually able to create a react application from mockup to finished version and to implement some nice features.",
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'movielist.jpg',
    title: 'Movie List',
    info:
      '"Movie List" is a react web application that uses TMDB API to display movies data. The user can search for any movie and can view details about it. The details are displayed in a dialog with information such as release date, overview, rating and also a button “Mark as favorite” from where the movie can be saved to a persistent favorite list. ',
    info2:
      'The application is also mobile-responsive, feature made by using Media Query hook from Material UI. From favorite list, the user can remove the movie and also can give a personal rating.',
    url: 'https://elenacfloroiu.github.io/react-app-movie-list/',
    repo: 'https://github.com/elenacfloroiu/react-app-movie-list/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smart-brain.jpg',
    title: 'Smart Brain',
    info:
      '"Smart Brain" is a web app that uses the Clarifai API to locate all the faces in a picture uploaded (by entering a direct image link into the input) by the user. After submitting, the app will display rectangles around all detected faces. Technologies used: React.js, Tachyons, CSS3, HTML5, Particles.js.',
    info2: '',
    url: 'https://elenacfloroiu.github.io/smart-brain/',
    repo: 'https://github.com/elenacfloroiu/smart-brain/tree/master', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'r-p-s.jpg',
    title: 'Rock Paper Scissors Game',
    info:
      ' "Rock Paper Scissors" app is a classic game built with CSS3, HTML5 and JavaScript. The user can play against the computer by picking his option, the result being displayed on a scoreboard. The computer’s choice is generated using the Math.random() function.',
    info2: '',
    url: 'https://rockpaperscossors.netlify.app/',
    repo: 'https://github.com/elenacfloroiu/r-p-s', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'adopt-template.jpg',
    title: 'Adopt a friend',
    info:
      ' "Adopt a friend" is an example of template for a possible animal shelter. The site is structured in 4 mobile responsive sections/pages (Home, Adopt, Love Stories, Contact Us). Technologies used: CSS3, HTML5, CSS grid, CSS FlexBox and MediaQuery',
    url: 'https://adopt-a-friend.netlify.app/',
    repo: 'https://github.com/elenacfloroiu/adopt-pet-template', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact me',
  email: 'elenacfloroiu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/elena-cristiana-floroiu-8761531a0/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/elenacfloroiu',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
