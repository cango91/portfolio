import WorkEntry from './WorkEntry';
import ProjectEntry from './ProjectEntry';
import './Resume.css';
import EducationEntry from './EducationEntry';
const workExp = [{
    title: 'Business Analyst',
    company: 'Pfizer, Remote',
    achievements: ["Worked with a multi-national team of developers, product owners and project managers at the end stage of a global web-deployment project as part of the global deployment team.", "Established communications between teams, communicated requirements and capabilities between parties. Wrote and presented communication plans. Organized short daily stand-ups with critical software teams to ensure timely progression of project and alignment."],
    dates: ['Nov \'22', 'Mar \'23'],
},
{
    title: 'Data Scientist / Team Lead',
    company: 'Acıbadem Technology, Istanbul',
    achievements: ["Helped digital transformation and going paperless by completing a full-stack CRUD application for the benefit of business analysts in the company, enabling easy tracking and digitalization of workflow and use-case diagrams.", "Completed a proof-of-concept image classification project, leading to the formation of an in-house data-science team, which I was assigned to lead. We won a government grant worth $300k and bootstrapped several AI projects to be integrated with our existing in house hospital informatics management system (HIMS.)"],
    dates: ['Jan \'19', 'Jan \'21'],
},
{
    title: 'M.D. / Systems Engineer',
    company: 'Directorate of Public Health, Istanbul',
    achievements: ["Designed an in-house on-line system for streamlining collection of data from various departments and produced a system design document with workflow diagrams and draft ERD.", "Carried out administrative healthcare tasks such as overseeing immunization programs, teeth and oral-care program for children; performing disease outbreak monitoring; providing smoking cessation assistance, pregnancy evaluations, cancer screenings; organizing educational campaigns, home-visits for bed-ridden patients and psychiatric patients."],
    dates: ['Jan \'15', 'Aug \'17'],
}
];

const education = [
    {
        school: "General Assembly, Software Engineering Immersive",
        degree: "Certificate of Completion",
        dates: ["Jun '23", "Sep '23"],
    },
    {
        school: "Coursera, Deep Learning Specialization",
        degree: "Certificate of Completion",
        dates: ["Dec '18"],
    },
    {
        school: "Coursera, Machine Learning by Standford University",
        degree: "Certificate of Completion",
        dates: ["Mar '16"],
    },
    {
        school: "Başkent Üniversitesi, General Practitioner",
        degree: "Medical Degree",
        dates: ["Sep '09", "Jul '15"],
    },

];

const projects = [
    {
        title: 'Workflow Catalog',
        achievements: ["Helped company go paperless!", "Developed a full-stack CRUD application with JWT authentication (integrated with in-house ID service) with .NET Core and Angular, utilized by BAs."],
    },
    {
        title: 'Medical Image Classifier',
        achievements: ["Identified inefficiencies in partnering with an external startup; designed an effective proof of concept, leading to formation of an in-house data-science team.", "Designed and trained an image classifier for early detection of diabetic retinopathy from retina images. Trained on public data, validated on in-house data."],
    }
];
export default function Resume() {
    return (
        <div className="resume">
            <img src="portfolio.svg" alt="Free Portfolio Icon by Grafix Point" title="Free Portfolio Icon by Grafix Point" className="bio" />
            <h1>Resumé</h1>
            <div className="work-experience">
                <h3>Work Experience</h3>
                {workExp.map((exp, i) => <WorkEntry
                    key={i}
                    title={exp.title}
                    company={exp.company}
                    achievements={exp.achievements}
                    dates={exp.dates} />)}
            </div>
            <div className="previous-projects">
                <h3>Previous Projects</h3>
                {projects.map((p, idx) => <ProjectEntry
                    key={idx}
                    title={p.title}
                    achievements={p.achievements} />)}
            </div>
            <div className="education">
                <h3>Education</h3>
                {education.map((ed,idx) => 
                    <EducationEntry school={ed.school} degree={ed.degree} dates={ed.dates} key={idx} />
                )}
            </div>
            <div className="resume-downloads">
                <a href="can-gologlu-resume-1page.pdf" className="download-button" target="_blank" rel="noreferrer">Download Single-Page Resume</a>
                <a href="can-gologlu-resume.pdf" className="download-button" target="_blank" rel="noreferrer">Download Three-Page Resume</a>
            </div>
        </div>
    );
}