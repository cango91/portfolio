import './ScrollSpy.css';

export default function ScrollSpy({ currentSection }) {
    let lineClass;
    const sections = ["brand-statement", "tech-stack", "portfolio", "resumé", "contact"];
    switch (currentSection) {
        case 'brand-statement':
            lineClass = 'scroll-spy__line--bg-10';
            break;
        case 'tech-stack':
            lineClass = 'scroll-spy__line--bg-30';
            break;
        case 'portfolio':
            lineClass = 'scroll-spy__line--bg-50';
            break;
        case 'resumé':
            lineClass = 'scroll-spy__line--bg-70';
            break;
        case 'contact':
            lineClass = 'scroll-spy__line--bg-90';
            break;
        default:
            lineClass = 'scroll-spy__line--bg-10';
    }
    return (
        <div className="scroll-spy">
            <div className={`scroll-spy__line ${lineClass}`}></div>
            <div
                className={`scroll-spy__stop ${sections.findIndex(el => el === currentSection) >= sections.findIndex(el => el === 'brand-statement') ? 'scroll-spy__stop--active' : ''}`}
                style={{ top: '10%' }}
            ><div className={`scroll-spy__stop__text ${currentSection === 'brand-statement' ? 'active' : ''}`}><a href="#brand-statement">About</a></div></div>
            <div
                className={`scroll-spy__stop ${sections.findIndex(el => el === currentSection) >= sections.findIndex(el => el === 'tech-stack') ? 'scroll-spy__stop--active' : ''}`}
                style={{ top: '30%' }}
            ><div className={`scroll-spy__stop__text ${currentSection === 'tech-stack' ? 'active' : ''}`}><a href="#tech-stack">Tech Stack</a></div></div>
            <div
                className={`scroll-spy__stop ${sections.findIndex(el => el === currentSection) >= sections.findIndex(el => el === 'portfolio') ? 'scroll-spy__stop--active' : ''}`}
                style={{ top: '50%' }}
            ><div className={`scroll-spy__stop__text ${currentSection === 'portfolio' ? 'active' : ''}`}><a href="#portfolio">Portfolio</a></div></div>
            <div
                className={`scroll-spy__stop ${sections.findIndex(el => el === currentSection) >= sections.findIndex(el => el === 'resumé') ? 'scroll-spy__stop--active' : ''}`}
                style={{ top: '70%' }}
            ><div className={`scroll-spy__stop__text ${currentSection === 'resumé' ? 'active' : ''}`}><a href="#resumé">Resumé</a></div></div>
            <div
                className={`scroll-spy__stop ${sections.findIndex(el => el === currentSection) >= sections.findIndex(el => el === 'contact') ? 'scroll-spy__stop--active' : ''}`}
                style={{ top: '90%' }}
            ><div className={`scroll-spy__stop__text ${currentSection === 'contact' ? 'active' : ''}`}><a href="#contact">Contact</a></div></div>
        </div>);
}