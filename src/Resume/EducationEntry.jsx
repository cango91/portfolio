import './EducationEntry.css';

export default function EducationEntry({school,degree,dates}){
    return (
        <div className='education-entry'>
            <span className='school-info'>{school}</span>
            <div className='graduation-info'>
                <span>{degree}</span><span className='dates'>{dates.join(' - ')}</span>
            </div>
        </div>
    );
}