/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';

function AboutMe() {
    return (
        <div className="AboutMe__component">
            <p className="AboutMe__slide">
                Welcome to galengoforth.com!
            </p>
            <div className="AboutMe__container">
                <div className="AboutMe">
                    <img src={itsMe} className="itsMe" alt="logo" />
                </div>
            </div>
            <h3>Galen Goforth - Software Engineer</h3>
            <p>Specializing in Salesforce Commerce Cloud (SFCC) technical leadership & software development.</p>
        </div>
    );
}

export default AboutMe;
