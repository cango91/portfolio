import './WorkEntry.css';

export default function WorkEntry({title, company, achievements, dates}){
    return (
        <div className="work-entry">
          <h4>{title} at {company}</h4><br /><small className='dates'>{dates.join(' - ')}</small>
          <div className="achievements">
          <ul>
            {achievements.map((a,i) => <li key={i}>{a}</li> )}
          </ul>
          </div>
        </div>
    );
}