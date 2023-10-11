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
            <div id="experience" className="MyResume__experience">
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
            <div className="MyResume__Certifications">
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