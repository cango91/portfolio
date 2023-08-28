import './TechStack.css';

export default function TechStack() {
    return (
        <div className="tech-stack">
            <img src="stack.svg" alt="stack icon by Elegant Themes on IconScout" title="Free Stack Icon by Elegant Themes on IconScout" className="stack" />
            <h1>Tech Stack</h1>
            <div className="stack-grid">
                <div className="stack-grid__group">
                    <i className="devicon-javascript-plain"></i>
                    <i className="devicon-html5-plain-wordmark"></i>
                    <i className="devicon-css3-plain-wordmark"></i>
                </div>
                <div className="stack-grid__group">
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                </div>
                <div className="stack-grid__group">
                    <i className="devicon-mongodb-plain-wordmark"></i>
                    <i className="devicon-express-original-wordmark"></i>
                    <i className="devicon-react-original-wordmark"></i>
                    <i className="devicon-nodejs-plain-wordmark"></i>
                </div>
                <div className="stack-grid__group">
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                </div>
                <div className="stack-grid__group">
                    <i className='devicon-python-plain-wordmark'></i>
                    <i className="devicon-django-plain-wordmark"></i>
                </div>
                <div className="stack-grid__group">
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                </div>
                <div className="stack-grid__group">
                    <i className="devicon-tensorflow-original"></i>
                    <i className="devicon-opencv-plain-wordmark"></i>
                </div>
                <div className="stack-grid__group">
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                    <div className="vr"></div>
                </div>
                <div className="stack-grid__group">
                    <i className="devicon-heroku-original-wordmark"></i>
                    <i className="devicon-docker-plain-wordmark"></i>
                    <i className="devicon-amazonwebservices-plain-wordmark"></i>
                </div>
            </div>
        </div>
    );
}