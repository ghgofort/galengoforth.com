/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';
import sfccArchitect from '../images/sfcc-architect-cert.png';
import sfccDeveloper from '../images/sfcc-developer-cert.png';

function AboutMe() {
    return (
        <div className="AboutMe__component">

            <div className="AboutMe__container">
                <div className="AboutMe"><img src={itsMe} className="itsMe" alt="logo"/></div>
            </div>
            <h3>Galen Goforth - Software Engineer</h3>
            <div className="AboutMe__content">
                <ul>
                    <li><p>I am a full stack developer with experience in a myriad of programming
                        languages & frameworks.</p></li>
                    <li><p>Salesforce Commerce Cloud (SFCC) Technical Leadership & Experience</p>
                    </li>
                    <li>
                        <span>Salesforce Certified B2C Commerce Developer & Technical Architect</span>
                        <div>
                            <img className="AboutMe__cert-img" src={sfccDeveloper} alt={'Salesforce B2C Commerce Developer Certification Badge'}/>
                            <img className="AboutMe__cert-img" src={sfccArchitect} alt={'Salesforce B2C Commerce Technical Architect Certification Badge'}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default AboutMe;
