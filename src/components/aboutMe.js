/** React component for the About Me section of page. */
import './aboutMe.css';
import itsMe from '../images/itsMe.jpg';

function AboutMe() {
    return (
        <div className="AboutMe__component">
            <h2>About Me</h2>
            <div className="AboutMe__container">
                <div className="AboutMe"><img src={itsMe} className="itsMe" alt="logo"/></div>
            </div>
            <div className="AboutMe__intro">
                <div>
                    Hi, I'm <span className="AboutMe__name">Galen</span>! I'm a software engineer living in Berwick ME.
                </div>
                <div>
                    <p>I love to learn and create new things. I'm currently working on a few projects, including a Raspberry Pi weather station & this website. I'm always looking for new opportunities to apply my technical experience to solve problems, or to learn and grow my skills.</p>
                    <p>When I'm not coding, I enjoy skiing, hiking with my dogs, reading, and most of all spending time with my family.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
