import './WorkEntry.css';

export default function WorkEntry({title, company, achievements}){
    return (
        <div className="work-entry">
          <h4>{title} at {company}</h4>
          <div className="achievements">
          <ul>
            {achievements.map((a,i) => <li key={i}>{a}</li> )}
          </ul>
          </div>
        </div>
    );
}