/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';

function AboutMe() {
    return (
        <div className="AboutMe__component">
            <h1>About Me</h1>
            <div className="AboutMe__container">
                <div className="AboutMe"><img src={itsMe} className="itsMe" alt="logo"/></div>
            </div>
            <div className="AboutMe__intro">
                <div>
                    Hi, I'm <span className="AboutMe__name">Galen</span>! I'm a software engineer living in Berwick ME.
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
