import './ProjectEntry.css';

export default function ProjectEntry({ title, achievements }) {
    return (
        <div className="work-entry">
            <h4>{title}: </h4>
            <div className="achievements">
                <ul>
                {achievements.map((a,idx) => <li key={idx}>{a}</li>)}
                </ul>
            </div>
        </div>
    );
}