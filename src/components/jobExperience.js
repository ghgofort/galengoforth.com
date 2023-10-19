/** 
 * React component for a creative way to display my past work & other relevant
 * experience in a digital format. 
 */

import './jobExperience.css';

/**
 * Job experience component that represnts a job or education experience that is
 * relevant to my career.
 * @param {{ expData: Object,}} props - The props object that contains the job
 *      description & any highlights that are relevant to the job.
 * @returns {JSX.Element} - returns the JSX for the job experience component.
 */
const JobExperience = (props) => {
    return (
        <div className="job-experience__component">
            <h3>{props.expData.title}</h3>
            <h4>{props.expData.companyName}</h4>
            <h5>{props.expData.companyCity + ', ' + props.expData.companyState}</h5>
            <h5>{props.expData.startDateMonth + '/' + props.expData.startDateYear + ' - ' + props.expData.endDateMonth + '/' + props.expData.endDateYear}</h5>
            <p>{props.expData.description}</p>
            <div className="job-experience__component__examples">
                {props.expData.highlights.map((highlight, index) => {
                    let key = index;
                    return (
                        <div key={key} className="job-experience__component__highlight">
                            <img src={highlight.img} alt={highlight.alt} />
                            <p>{highlight.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default JobExperience;