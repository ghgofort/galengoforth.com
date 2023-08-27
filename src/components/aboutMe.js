/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';

function AboutMe() {
    return (
        <div className="AboutMe__container">

            <p className="AboutMe__slide">
                Welcome to galengoforth.com!
            </p>
            <div className="AboutMe">
                <img src={itsMe} className="itsMe" alt="logo" />
            </div>
        </div>
    );
}

export default AboutMe;
