/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';

function AboutMe() {
    return (
        <div className="AboutMe">

            <p className="AboutMe__slide">
                Welcome to galengoforth.com!
            </p>
            <img src={itsMe} className="itsMe" alt="logo" />
        </div>
    );
}

export default AboutMe;
