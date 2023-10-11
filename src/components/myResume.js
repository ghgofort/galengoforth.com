/**
 * React component to render my resume in an interactive format.
 * @module src/components/myResume
 */

import { useState } from "react";
import './myResume.css';

import sfccArchitect from '../images/sfcc-architect-cert.png';
import sfccDeveloper from '../images/sfcc-developer-cert.png';

function MyResume() {
    const [currentSection, setCurrentSection] = useState('introduction');

    return (
        <div className="MyResume__component">
            <h1>Galen Goforth - Software Engineer</h1>
            <div id="introduction" className="MyResume__introduction">
                <h2>Introduction</h2>
                <p>Hi, I'm <span className="MyResume__name">Galen</span>! I'm a software engineer with a passion for learning and creating.</p>
            </div>
            <div className="MyResume__Certifications">
                <h2>Certifications</h2>
                <ul>
                    <li><p>Salesforce Commerce Cloud (SFCC) Technical Leadership & Experience</p>
                    </li>
                    <li>
                        <span>Salesforce Certified B2C Commerce Developer & Technical Architect</span>
                        <div>
                            <img className="MyResume__cert-img" src={sfccDeveloper} alt={'Salesforce B2C Commerce Developer Certification Badge'}/>
                            <img className="MyResume__cert-img" src={sfccArchitect} alt={'Salesforce B2C Commerce Technical Architect Certification Badge'}/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MyResume;