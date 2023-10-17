/**
 * React component to render my resume in an interactive format.
 * @module src/components/myResume
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import './myResume.css';
import itsMe from '../images/itsMe.jpg';
import sfccArchitect from '../images/sfcc-architect-cert.png';
import sfccDeveloper from '../images/sfcc-developer-cert.png';


/**
 * Gets the job experience data from the firestore database.
 * @returns {Object} The job experience data from the firestore database.
 */
const getJobExperience = async () => {
    const url = 'https://pi-services.vercel.app/job_experiences';
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
};

function MyResume() {
    const [currentSection, setCurrentSection] = useState('introduction');
    const [stickyState, setStickyState] = useState(false);
    const introRef = useRef(null);
    const expRef = useRef(null);
    const eduRef = useRef(null);
    const certRef = useRef(null);
    const currentRef = useRef(null);
    
    const setCurrentSectionOnScroll = useCallback((e) => {
        console.log('scrolling', e.target);
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
            console.log(res);
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
                <ul>
                    <li>
                        <h3>Senior Salesforce Commerce Cloud Developer</h3>
                        <p>RafterOne (formerly PixelMEDIA) - Portsmouth, NH | (May 2022 - August 2023)</p>
                        <ul>
                            <li>Full stack JavaScript / ReactJS developer on Salesforce B2C e-commerce platform.</li>
                            <li>Implementation of headless SFCC PWA Kit with ReactJS storefront & Heroku running NodeJS back-end. Site used for the engineering team’s project estimation & proof of concept work.</li>
                            <li>Technical Lead for project implementing new content management system & implementation of a site redesign for Metallica.com.</li>
                            <li>A Senior Developer working on internal RafterOne SFRA reference architecture site used for new implementation projects.</li>
                            <li>Worked on headless integration for no-redirect Salesforce registration & login project for Ferguson.com.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Senior Salesforce Applications Engineer</h3>
                        <p>Hollander Sleep Products –Boca Raton, FL | (August 2021 – April 2022)</p>
                        <ul>
                            <li>Management of technical aspects of 3 Salesforce Commerce Cloud (SFCC) ecommerce websites including development, testing, code reviews, & deployment of releases.</li>
                            <li>Manage development projects for our services integration partner on both Direct to Consumer (D2C) sites and our Business to Business (B2B) site.</li>
                            <li>Manage technical aspects for our site’s 3rd party integrations including payment, OMS, product data, SEO Tags, product reviews, and others.</li>
                            <li>Customization on Salesforce Service Cloud Apex web components & B2C Commerce Cloud JavaScript code base to keep sites in line with ever changing needs of business.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>SFCC Technical Lead</h3>
                        <p>IBM – Andover, MA | (February 2021– August 2021)</p>
                        <ul>
                            <li>Responsible for leading complex Salesforce Commerce Cloud (SFCC) implementation projects & providing technical guidance where needed.</li>
                            <li>Integrated headless SFCC APIs into existing industry specific cloud connectors to streamline functionality & add Salesforce Customer 360.</li>
                            <li>Data connector updates in coordination with Salesforce to demonstrate data flow between different Salesforce cloud offerings.</li>
                            <li>Provided technical guidance and estimates for development & QA work required for sales of new SFCC site implementation for Lumen (formerly CenturyLink) Quantum Fiber internet service.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>SFCC Software Developer</h3>
                        <p>PixelMEDIA – Portsmouth, NH | (September 2018 – February 2021)</p>
                        <ul>
                            <li>Full Stack JavaScript Developer for new e-commerce website builds & other major implementation projects on the Salesforce Commerce Cloud (SFCC) platform.</li>
                            <li>Technical Lead for Storefront Reference Architecture (SFRA) site implementation of Brahmin.com</li>
                            <li>Developer & Architect for build of Salesforce Marketplace certified cartridge for Precognitive fraud prevention.</li>
                            <li>Creation of new integrations & implementation & customization of existing integrations for payment processing, order management, product information management, content management, fraud prevention, loyalty, address completion, and other custom functionality.</li>
                            <li>Member of the PixelMEDIA Implementations Technical Leadership Team.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Software Engineer</h3>
                        <p>Deckers Brands – Flagstaff, AZ | (August 2016 – August 2018)</p>
                        <ul>
                            <li>Full stack JavaScript developer responsible for new website features & integrations across 5 multinational ecommerce websites.</li>
                            <li>Lead SFCC developer for the loyalty program implementation on the Ugg.com site.</li>
                            <li>Lead SFCC developer for the implementation of custom returns and exchanges integration.</li>
                            <li>Worked with in-house ASP.net middleware team to implement core features in a scalable & secure manner to address technology needs of the growing business.</li>
                        </ul>
                    </li>
                    <li>
                        <h3>Medical Data Analyst</h3>
                        <p>North Country HealthCare – Flagstaff, AZ | (October 2013 – August 2016 )</p>
                        <ul>
                            <li>Built and maintained software applications for data collection and data reporting.</li>
                            <li>Created advanced SQL queries and data reporting applications to pull data from an array of sources, then filter, sort, and merge the datasets as needed.</li>
                            <li>Created reports utilizing Excel with VBA, SQL, & Crystal Reports to access & display pertinent health record summary data.</li>
                        </ul>
                    </li>
                </ul>
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
