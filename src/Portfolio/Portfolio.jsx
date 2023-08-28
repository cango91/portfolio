import PortfolioGrid from './PortfolioGrid';
import './Portfolio.css';
const projects = [
    {
        imgSrc: "screenshots/eye-connect2.webp",
        heading: "eyeConnect",
        description: "A tele-medicine web-app for connecting medical professionals with specialists. Features encryption-at-rest and AI-assisted medical image classification (MEN stack, Python, TensorFlow, OpenCV, Flask, Docker)",
        details:`<ul><li>Utilized <b>MEN (MongoDB, Express, NodeJS) stack</b> with EJS (embedded javascript) and Bootstrap5 to build a highly <b>interactive and responsive tele-medicine</b> web application called eyeConnect that connects non-specialist health care providers (HCP) with ophthalmology specialists for <b>early detection of diabetes induced retinopathy (DR)</b> in <b>underserved regions</b> where access to specialized eye care may be limited.</li><li>
        Deployed a previously trained AI system for <b>automatic classification of retina images</b> with respect to DR as a private API for eyeConnect to consume, so as to provide non-specialist HCPs with early guidance.</li><li>
        Followed <b>MVC</b> conventions with added <b>service layer abstraction</b> to decouple business logic from database implementation, used <b>custom middleware</b> to authorize views and actions based on user-role. Followed best practices for a medical data handling application such as enforcing <b>transport layer security</b> between client, backend and AI service as well as implementing <b>encryption at rest</b> for all medical data: exam/consultation notes and images.</li></ul>`,
        footer: "<span style=\"text-align:center;\"><a rel=\"noreferrer\" target=\"_blank\" href=\"https://github.com/cango91/eye-connect\">Github</a>&nbsp;|&nbsp;<a rel=\"noreferrer\" target=\"_blank\" href=\"https://eye-connect-6befc020749e.herokuapp.com/\">Live</a></span>",
    },
    {
        imgSrc: "screenshots/thomas.webp",
        heading: "The Thomas Collective",
        description: "A light-hearted stab at a travel app (group project; Python, Django)",
        footer: "<span style=\"text-align:center;\"><a rel=\"noreferrer\" target=\"_blank\" href=\"https://github.com/cango91/thomascollective\">Github</a>&nbsp;|&nbsp;<a rel=\"noreferrer\" target=\"_blank\" href=\"https://thomas-collective-mirror-b5c42af6481f.herokuapp.com/\">Live</a></span>",
        details: `<ul><li><b>Collaborated</b> with 3 other talented developers to develop and deploy a fully-functional CRUD (Create Read Update Delete) app, leveraging <b>Django</b>’s built-in user authentication capabilities, as well as adding <b>email verification.</b></li><li>
        Leveraged <b>mob programming approach</b> to collaborate and turned <b>challenges</b> into <b>learning opportunities.</b> </li><li>
        2 days before deadline, we had to revise our data-entity model due to an initial oversight in planning phase. Successfully <b>overcame this challenge as a team</b> and were able to deliver a <b>highly polished project.</b></li></ul>
        `,
    },
    {
        imgSrc: "screenshots/email-verify.webp",
        heading: "email-verify",
        description: "Light-weight email verification library for Django",
        footer: "<span style=\"text-align:center;\"><a rel=\"noreferrer\" target=\"_blank\" href=\"https://github.com/cango91/email-verify\">Github</a>&nbsp;|&nbsp;<a rel=\"noreferrer\" target=\"_blank\" href=\"https://pypi.org/project/email-verify/\">PyPI</a></span>",
        details: `<ul><li>What started as an experimental feature during a group project, turned into a personal side project where I employed <b>best-practices</b> and <b>Django style design patterns</b> to deliver, <b>package and distribute</b> a <b>re-usable lightweight</b> Django app for <b>email verification</b> during sign-up</li><li>
        Utilized <b>clean architecture</b> with separation of concerns to offer developers an <b>easy to integrate</b> email verification workflow with <b>out-of-the-box functionality</b> as well as <b>granular customization</b> options, with <b>full documentation</b>, with less than a week between ideation and first release.
        `,
    },
    {
        imgSrc: "screenshots/solitaire.webp",
        heading: 'Solitaire',
        description: "An interactive desktop gaming experience (vanilla js/css/html5)",
        footer: "<span style=\"text-align:center;\"><a rel=\"noreferrer\" target=\"_blank\" href=\"https://github.com/cango91/solitaire\">Github</a>&nbsp;|&nbsp;<a rel=\"noreferrer\" target=\"_blank\" href=\"https://cango91.github.io/solitaire/src/index.html\">Live</a></span>",
        details: `<ul><li>Leveraged a custom <b>event-driven MVC architecture</b> with <b>vanilla Javascript, HTML5 and CSS3</b> to build a desktop browser game of Klondike Solitaire as a practice in DOM-manipulation. </li><li>
        Delivered an interactive gaming experience for desktop users in the browser with <b>numerous game options</b> such as deck color choice, enabling <b>animations</b>, enabling <b>visual feedbacks</b>, animation speed customization, unlimited <b>undo</b> game-mode, <b>scored</b> game-mode, background music; <b>without any 3rd party dependencies</b> so as to improve compatibility (playable in all major browsers except Firefox).</li><li>
        <b>Wireframed</b> the designs using <b>Figma</b>, documented the software architecture using <b>UML</b> diagrams and provided an <b>extensive documentation of the custom event system</b> for anyone exploring the repo.</li></ul>
        `,
    },
    
];
export default function Portfolio() {
    return (
        <div className="portfolio">
            <img src="gallery.svg" alt="Free Gallery Icon by Alexandru Stoica on IconScout" title="Free Gallery Icon by Alexandru Stoica on IconScout" className="gallery" />
            <h1>Portfolio</h1>

            <PortfolioGrid projects={projects} />

        </div>
    );
}