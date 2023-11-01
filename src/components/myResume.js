/**
 * React component to render my resume in an interactive format.
 * @module src/components/myResume
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import './myResume.css';
import itsMe from '../images/itsMe.jpg';
import sfccArchitect from '../images/sfcc-architect-cert.png';
import sfccDeveloper from '../images/sfcc-developer-cert.png';
import JobExperience from './jobExperience';


/**
 * Gets the job experience data from the firestore database.
 * @returns {Object} The job experience data from the firestore database.
 */
const getJobExperience = async () => {
    const url = 'https://pi-services.vercel.app/job_experience';
    const response = await fetch(url);
    const body = await response.json();
    console.log(body);

    if (response.status !== 200) {
        throw Error(body.message);
    } else if (!body.job_experience) {
        throw Error('Error: No job experience data found!');
    } else {
        return body.job_experience;
    }
};

function MyResume() {
    const [currentSection, setCurrentSection] = useState('introduction');
    const [stickyState, setStickyState] = useState(false);
    const [jobExperiences, setJobExperiences] = useState([]);
    const introRef = useRef(null);
    const expRef = useRef(null);
    const eduRef = useRef(null);
    const certRef = useRef(null);
    const currentRef = useRef(null);
    
    const setCurrentSectionOnScroll = useCallback((e) => {
        const scrollPosition = window.scrollY;
        const introPosition = introRef.current.offsetTop;
        const expPosition = expRef.current.offsetTop;
        const eduPosition = eduRef.current.offsetTop;
        const certPosition = certRef.current.offsetTop;
        const sectionSelectorPosition = currentRef.current.offsetTop;

        if (scrollPosition > sectionSelectorPosition) {
            setStickyState(true);
        }

        if (scrollPosition < introPosition) {
            setCurrentSection('introduction');
        } else if (scrollPosition < expPosition) {
            setCurrentSection('experience');
        } else if (scrollPosition < eduPosition) {
            setCurrentSection('education');
        } else if (scrollPosition < certPosition) {
            setCurrentSection('certifications');
        }
    }, []);

    useEffect(() => {
        getJobExperience().then((res) => {
            setJobExperiences(res);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', setCurrentSectionOnScroll);

        return () => { window.removeEventListener('scroll', setCurrentSectionOnScroll); };
    }, [setCurrentSectionOnScroll]);

    const scrollEffect = (ref) => {
        return () => {
            setCurrentSection(ref.current.id);
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="MyResume__component">
            <div ref={currentRef} className={stickyState ? 'MyResume__section-selector MyResume__section-selector--sticky' : 'MyResume__section-selector'}>
                <div className={currentSection === 'introduction' ? 'MyResume__section MyResume__section--selected' : 'MyResume__section'} onClick={scrollEffect(introRef)}>
                    <span>Introduction</span>
                </div>
                <div className={currentSection === 'experience' ? 'MyResume__section MyResume__section--selected' : 'MyResume__section'} onClick={scrollEffect(expRef)}>
                    <span>Experience</span>
                </div>
                <div className={currentSection === 'education' ? 'MyResume__section MyResume__section--selected' : 'MyResume__section'} onClick={scrollEffect(eduRef)}>
                    <span>Education</span>
                </div>
                <div className={currentSection === 'certifications' ? 'MyResume__section MyResume__section--selected' : 'MyResume__section'} onClick={scrollEffect(certRef)}>
                    <span>Certifications</span>
                </div>
            </div>
            <div id="introduction" ref={introRef} className="MyResume__header">
                <h1>Galen Goforth</h1>
                <h3>Software Engineer</h3>
            </div>
            <img className="MyResume__itsMe" src={itsMe} alt="Galen Goforth" />
            <div className="MyResume__content MyResume__introduction">
                <h2>Introduction</h2>
                <p>Hi, I'm <span className="MyResume__name">Galen Goforth</span>! I'm a software engineer with a passion for learning and creating.</p>
                <p>I have experience working on a wide variety of projects, from small personal projects to large enterprise level e-commerce websites. I have worked on projects in a variety of languages and frameworks, including JavaScript, ReactJS, NodeJS, Salesforce Commerce Cloud (SFCC), and others.</p>
            </div>
            <div id="contact" className="MyResume__content MyResume__contact">
                <h3>Contact</h3>
                <ul>
                    <li><p>email: <a href="emailto:galengoforth@gmail.com">galengoforth@gmail.com</a></p></li>
                    <li><p>phone: <span>928-220-5089</span></p></li>
                    <li><p>github: <a href="https://github.com/ghgoforth">github.com/ghgoforth</a></p></li>
                    <li><p>linkedin: <a href="https://www.linkedin.com/in/galen-goforth-87784442/">https://www.linkedin.com/in/galen-goforth-87784442/</a></p></li>
                </ul>
            </div>
            
            {/* My Experience Section */}
            <div id="experience" ref={expRef} className="MyResume__content MyResume__experience">
                <h2>Experience</h2>
                {jobExperiences.length > 0 ? jobExperiences.map((jobExperience, index) => { return <JobExperience key={index.toString()} expData={jobExperience} />; }) : <p>Loading...</p>}
            </div>

            {/* My Education Section */}
            <div id="education" ref={eduRef} className="MyResume__content MyResume__education">
                <h2>Education</h2>
                <ul>
                    <li>
                        <h3>B.S. in Software Engineering</h3>
                        <p>Arizona State University | (2013 – 2017)</p>
                        <ul>
                            <li>Graduated magna cum laude</li>
                            <li>Coursework included: Software Engineering, Software Development, Database Design, Data Structures & Algorithms, Web Application Development, and Operating Systems.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Associates Degree in General Education</h3>
                        <p>Coconino Community College | (2011 – 2013)</p>
                        <ul>
                            <li>Information Technology degree focus</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div id="certifications" ref={certRef} className="MyResume__content MyResume__Certifications">
                <h2>Certifications</h2>
                <ul>
                    <li><p>Salesforce Commerce Cloud (SFCC) Technical Leadership & Experience</p>
                    </li>
                    <li>
                        <span>Salesforce Certified B2C Commerce Developer & Technical Architect</span>
                        <div>
                            <img className="MyResume__cert-img" src={sfccDeveloper} alt={'Salesforce B2C Commerce Developer Certification Badge'} />
                            <img className="MyResume__cert-img" src={sfccArchitect} alt={'Salesforce B2C Commerce Technical Architect Certification Badge'} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MyResume;
