import GroListyLogo from "../assets/grolisty-logo.png";
import TabOrgLogo from "../assets/TabOrg Logo - 128.png";
import IceGramLogo from "../assets/icegram-logo-192.png";
import CalmifyLogo from "../assets/coin-logo.png";
import HangBotLogo from "../assets/hangbot-logo.png";
import AssignmentThreeLogo from "../assets/assignment-three-logo.png";
import GroListyImageOne from "../assets/grolisty-image-one.png";
import GroListyImageTwo from "../assets/grolisty-image-two.png";
import GroListyImageThree from "../assets/grolisty-image-three.png";
import TabOrgImageOne from "../assets/taborg-image-one.png";
import TabOrgImageTwo from "../assets/taborg-image-two.png";
import IceGramImageOne from "../assets/icegram-image-one.png";
import IceGramImageTwo from "../assets/icegram-image-two.png";
import CalmifyImageOne from "../assets/calmify-image-one.png";
import CalmifyImageTwo from "../assets/calmify-image-two.png";
import HangBotImageOne from "../assets/hangbot-image-one.png";
import HangBotImageTwo from "../assets/hangbot-image-two.png";
import AThreeWebsiteImageOne from "../assets/assignment-three-image-one.png";
import AThreeWebsiteImageTwo from "../assets/assignment-three-image-two.png";


export const ProjectList = [
    {
        name: "GroListy",
        logo: GroListyLogo,
        skills: "JavaScript, MongoDB, ExpressJS, React, NodeJS, REST APIs, Postman, Puppeteer, Tesseract.js, JSON Web Tokens, HTML, CSS",
        imageOne: GroListyImageOne,
        imageTwo: GroListyImageTwo,
        imageThree: GroListyImageThree,
        descriptionOne: "GroListy is a full-stack grocery list web application built using the MERN stack: MongoDB, ExpressJS, React, and NodeJS. I built this project to expand my web development skills and gain experience building and consuming REST APIs using a modern NoSQL database. Some important skills I have learned include the useReducer hook in React, which allowed me to update the context of the application on the frontend to make it responsive for the user. I added error handling to the item form and implemented useful error messages to display to the user. I also learned how to organize my components, pages and contexts using MVC architecture. Lastly, I used the 60-30-10 color rule with CSS to improve the user interface's design.",
        descriptionTwo: "I had difficulty implementing REST APIs, so to aid in solving issues I ran into during development, I used Postman to test API endpoints and for regression testing to ensure that they work as intended in later versions. In addition, I created a database schema for each item that is stored in the MongoDB Atlas Database by using the mongoose library. I also took the project a step further by adding authentication so that users can log into their personal account and view only items stored in their account with an email by using JSON Web Tokens, bcrypt and validator. I had to create new APIs to handle signing up and logging in of users and ensure that both the backend and frontend were secure to prevent users from injecting data to the database without logging in.",
        descriptionThree: "After months of testing and research, I was able to create a Receipt OCR feature for the app. It allows users to input an image of a receipt that will automatically extract product information from vendors to be entered into their list. This saves time for the user having to manually input each item on a large list of items bought from a grocery store. It uses Tesseract.js optical character recognition to extract SKU numbers from the receipt, then it web scrapes on the vendor's website by using Puppeteer headless browsing to parse key information needed to add an item to the list. I made the items editable so that if there are any inaccuracies in the product being imported, the user can change them before adding them all to their list. In the future, I plan on adding an expiration date as key information that is tracked separately and is then used to notify the user to throw out expired goods and buy new groceries.",
        link: "https://github.com/mansoorhu10/grolisty",
    },
    {
        name: "TabOrg",
        logo: TabOrgLogo,
        skills: "JavaScript, React, Chrome tabs and storage APIs, HTML, CSS",
        imageOne: TabOrgImageOne,
        imageTwo: TabOrgImageTwo,
        imageThree: null,
        descriptionOne: "TabOrg is a tab organizer chrome extension that is designed to help save google chrome tabs into groups for later use. I built this project from scratch without React and styling initially, for a high school computer science course. Then later on, I reworked the entire extension to create an interactive user interface using React. I had to redo how the extension saves tabs into groups to include new information so that I could add new features that were not available in the first version of the project. I even updated the manifest_version of the project since the original extension was using a deprecated version, which ultimately pushed me to use the newest Chrome storage API methods to save data.",
        descriptionTwo: "I gained lots of experience using the Chrome tabs and storage API to create functionality for the extension and I also learned about how to use asynchronous functions in JavaScript. Aside from the dark mode toggle button, this entire project was designed and created from scratch and because I was inspired by how frustrating it was to manage important tabs that I needed open for school.",
        descriptionThree: null,
        link: "https://github.com/mansoorhu10/TabOrg",
    },
    {
        name: "IceGram",
        logo: IceGramLogo,
        skills: "Firebase, React, JavaScript, HTML, CSS",
        imageOne: IceGramImageOne,
        imageTwo: IceGramImageTwo,
        imageThree: null,
        descriptionOne: "IceGram is a photo gallery web app created with React and Firebase. This was an edit of a YouTube project tutorial called FireGram. Users can add images to the site and view them later as they are saved in a non-relational database. I learned how to use Firebase's firestore and storage to save images. I also used the framer-motion library to aid in creating aesthetically pleasing animations for adding images to the webpage.",
        descriptionTwo: "It also includes features like being able to click on an image in order to enlarge it and tracking the progress of an image being uploaded to the webpage and displaying it using a progress bar with JavaScript logic. I hope to continue working on this project in the future by learning how to add user authentication to it and learning how to improve security for the database that stores data.",
        descriptionThree: null,
        link: "https://github.com/mansoorhu10/icegram",
    },
    {
        name: "Calmify",
        logo: CalmifyLogo,
        skills: "Python, Pygame",
        imageOne: CalmifyImageOne,
        imageTwo: CalmifyImageTwo,
        imageThree: null,
        descriptionOne: "Calmify is a project I collaborated on with Faris Choudhry during UofTHacks VIII. It is a stress-relief application, designed to improve the mental health of users through a series of minigames. The program can be used as a timer for 25 minutes to motivate users to work. Once the timer finishes, a minigame becomes playable with a 5 minute timer. For demo purposes, we decided to create 1 of our 5 minigames called Coin Quest. In this game, the player has to collect as many coins until the timer ends, in order to reach a high score. Along with relaxing music and rewarding sound effects, the game serves as a great way to take a break from work. The 25 minute and 5 minute timers are derived from a time management method called the Pomodoro technique. It is an amazing way to focus on a task, while still regularly taking breaks to avoid the buildup of stress and anxiety. Overall, it thoroughly impacts people by encouraging them to maintain a positive and determined mindset while working by rewarding them with breaks, all of which contribute to a stronger mental health.",
        descriptionTwo: "We built Calmify using a Python module called Pygame. We programmed a player, button and coin class to keep everything organized and initialized instances with ease. Our main game loop is located in gameloop(). It holds all the code responsible for running Coin Quest. It contains the character movement, game timer and other features such as keeping count of the score. One aspect of the project that I'm proud of us for accomplishing is figuring out how to create the user interface for the main menu. We were able to apply newly gained knowledge about Pygame to create a menu system that seamlessly integrated with the other parts of the program during the hackathon.",
        descriptionThree: null,
        link: "https://github.com/mansoorhu10/Calmify",
    },
    {
        name: "HangBot",
        logo: HangBotLogo,
        skills: "Python, Pygame",
        imageOne: HangBotImageOne,
        imageTwo: HangBotImageTwo,
        imageThree: null,
        descriptionOne: "HangBot is a project that I worked on alongside a team of three other members during Hack The North 2020++, an online hackathon. This program is an implementation of the popular game known as 'Hangman'. The word bank includes words that relate to topics like technology and the sciences. Once the game begins, the player can input a guess by pressing a key on their keyboard. There is a score counter, music, and sound effects, as well as win and lose screens. One of the fundamental skills I learned during this project was the ability to manage a large project efficiently. This was my first hackathon project with a group of people, so as a team we learned to collaborate by splitting up tasks and combining separate components that we were simultaneously working on by communicating effectively.",
        descriptionTwo: "I took responsibility of improving the user's gameplay experience by implementing music and sound effects using the Pygame mixer library. I also aided in creating a string storage system using arrays and efficient conditional statements which contributed to a decrease in unused memory. Additionally, I improved the screen changing system by implementing screen numbers with conditional statements and Boolean variables.",
        descriptionThree: null,
        link: "https://github.com/Wevie0/HacktheNorth2020",
    },
    {
        name: "A3 Website",
        logo: AssignmentThreeLogo,
        skills: "HTML, CSS",
        imageOne: AThreeWebsiteImageOne,
        imageTwo: AThreeWebsiteImageTwo,
        imageThree: null,
        descriptionOne: "This is my Assignment 3 submission for an Introduction to Website Design and Development course that I took in the Winter 2022 semester. It incorporates many components of HTML, CSS, and design fundamentals that I learned from the course. The prompt for this assignment was to create an HTML website with an external CSS style sheet that spans across at least three separate webpages and can cover any topic of choice. So, I decided to create a website about one of my favourite foods: sushi.",
        descriptionTwo: "I focused heavily on making an aesthetically appealing website with amazing UI design. I also specifically included a side navigation menu that links to subheadings within a specific page to improve navigability. The project portfolio website you are on right now builds on the fundamentals of web design that I applied in this earlier project.",
        descriptionThree: null,
        link: "https://github.com/mansoorhu10/A3-Website-Design",
    },
];


