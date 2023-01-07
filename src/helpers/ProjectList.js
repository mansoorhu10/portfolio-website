import TabOrgLogo from "../assets/TabOrg Logo - 128.png";
import IceGramLogo from "../assets/icegram-logo-192.png";
import CalmifyLogo from "../assets/coin-logo.png";
import HangBotLogo from "../assets/hangbot-logo.png";
import AssignmentThreeLogo from "../assets/assignment-three-logo.png";
import IceGramImageOne from "../assets/icegram-image-one.png";
import IceGramImageTwo from "../assets/icegram-image-two.png";


export const ProjectList = [
    {
        name: "TabOrg",
        logo: TabOrgLogo,
        skills: "JavaScript, React, Chrome tabs and storage API, HTML, CSS",
        imageOne: "",
        imageTwo: "",
        descriptionOne: "TabOrg is a tab organizer chrome extension that is designed to help save google chrome tabs into groups for later use. I built this project from scratch without React and styling initially, for a high school computer science course. Then later on, I reworked the entire extension to create an interactive user interface using React. I had to redo how the extension saves tabs into groups to include new information and so that I could add new features that were not available in the first primitive version of the project. I even updated the manifest_version of the project since the original extension was using a deprecated version, which ultimately pushed me to use the newest Chrome storage API methods to save data.",
        descriptionTwo: "I gained lots of experience using the Chrome tabs and storage API to create functionality for the extension and I also learned about how to use asynchronous functions to load and save data. Aside from the dark mode toggle button, this entire project was designed and created from scratch and because I was inspired by how frustrating it was to manage important tabs that I needed open for school.",
        link: "https://github.com/mansoorhu10/TabOrg",
        
    },
    {
        name: "IceGram",
        logo: IceGramLogo,
        skills: "Firebase, React, JavaScript, HTML, CSS",
        imageOne: IceGramImageOne,
        imageTwo: IceGramImageTwo,
        descriptionOne: "IceGram is a photo gallery web app created with React and Firebase. This was an edit of the project tutorial called FireGram. Users can add images to the site and view them later as they are saved in a non-relational database. I learned how to use Firebase's firestore and storage to save images. I also used the framer-motion library to aid in creating aesthetically pleasing animations for adding images to the webpage.",
        descriptionTwo: "It also includes features like being able to click on an image in order to enlarge it and tracking the progress of an image being uploaded to the webpage and displaying it using a progress bar with JavaScript logic. I also learned how to effectively use 'display: grid' to organize items on a webpage.",
        link: "https://github.com/mansoorhu10/icegram",
    },
    {
        name: "Calmify",
        logo: CalmifyLogo,
        skills: "Python, pygame",
        imageOne: "",
        imageTwo: "",
        descriptionOne: "",
        descriptionTwo: "",
        link: "https://github.com/mansoorhu10/Calmify",
    },
    {
        name: "HangBot",
        logo: HangBotLogo,
        skills: "Python, pygame",
        imageOne: "",
        imageTwo: "",
        descriptionOne: "",
        descriptionTwo: "",
        link: "https://github.com/Wevie0/HacktheNorth2020",
    },
    {
        name: "A3 Website",
        logo: AssignmentThreeLogo,
        skills: "HTML, CSS",
        imageOne: "",
        imageTwo: "",
        descriptionOne: "",
        descriptionTwo: "",
        link: "https://github.com/mansoorhu10/A3-Website-Design",
    },
];


