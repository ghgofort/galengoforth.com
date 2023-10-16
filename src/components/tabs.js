/** React component that holds tabs for each of the sections of the page. */
import { useState } from 'react';
import './tabs.css';
import AboutMe from './aboutMe';
import AboutSite from './aboutSite';
import MyResume from './myResume';
import RPIWeather from './rpiWeather';

/**
 * React component that holds tabs for each of the sections of the page.
 * @returns {JSX.Element}
 */
function Tabs() {
    let currentTab = window.location.pathname.replaceAll('/', '');
    if (currentTab === '') { currentTab = 'home'; }
    const [selectedTab, setSelectedTab] = useState(currentTab);

    function setSelection(e) {
        const selectedId = e.target.id || e.target.parentElement.id;
        setSelectedTab(selectedId);
        // Set URL to match tab selection.
        window.history.pushState({}, '', `/${selectedId}`);
    }

    return (
        <div className="Tabs__component" role="tabpanel">
            <div className="Tabs__container" role="tablist">
                <div id="home" onClick={setSelection} className={selectedTab === 'home' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Home</span>
                </div>
                <div id="projects" onClick={setSelection} className={selectedTab === 'projects' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Personal Projects</span>
                </div>
                <div id="resume" onClick={setSelection} className={selectedTab === 'resume' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Resume</span>
                </div>
            </div>
            <div className="Tabs__content-container">
                    <div className={selectedTab === 'home' ? 'Tabs__content Tabs__content--home Tabs__content--selected' : 'Tabs__content'}>
                        <AboutMe/>
                        <AboutSite/>
                    </div>
                    <div className={selectedTab === 'projects' ? 'Tabs__content Tabs__content--projects Tabs__content--selected' : 'Tabs__content'}>
                        <RPIWeather/>
                    </div>
                    <div className={selectedTab === 'resume' ? 'Tabs__content Tabs__content--resume Tabs__content--selected' : 'Tabs__content'}>
                        <MyResume/>
                    </div>
            </div>
    </div>);
}

export default Tabs;
