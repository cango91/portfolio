import "./BrandStatement.css";

export default function BrandStatement() {

    return (
        <div className="brand-statement">
            <div className="text-reveal__wrapper"><h1>About</h1>
            </div><p>
                Hi! My name’s Can, and I have a passion for turning words into software. I’m a life-long learner and a <b>former physician</b>, and my journey with programming began as a hobbyist <b>over 20 years ago</b>. Before graduating from the <b>GA SEI bootcamp</b>, I had the firsthand experience of observing the conversion of a giant modular monolithic Hospital Information Management system into a microservices architecture. This experience informed my <b>deep passion for clean software architecture</b>, and I developed a dedication to <b>creating efficient</b> and <b>user-friendly software experiences</b> and <b>pushing technology’s boundaries</b>.
            </p><p>
                Outside of my professional pursuits, I find balance and inspiration through sailing and bouldering. These activities not only challenge me physically but mentally as well, reflecting my approach to problem-solving in software development. Just like setting a course on open water or finding the next grip on a climb, I approach each project with <b>precision, creativity, and a drive to reach new heights</b>.
            </p>
            <img className='headshot' title='Mugshot of the dev' src="headshot.webp" alt="Headshot" />
        </div>
    );
}