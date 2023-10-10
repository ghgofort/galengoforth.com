/** React component that holds tabs for each of the sections of the page. */
import { useState } from 'react';
import './tabs.css';
import AboutMe from './aboutMe';
import DataGraph from './dataGraph';

/**
 * React component that holds tabs for each of the sections of the page.
 * @returns {JSX.Element}
 * @constructor
 */
function Tabs() {
    const [selectedTab, setSelectedTab] = useState('tab-1');

    function setSelection(e) {
        const selectedId = e.target.id || e.target.parentElement.id;
        setSelectedTab(selectedId);
        // REMOVE ME
        // eslint-disable-next-line no-console
        console.log(selectedId);
    }

    return (
        <div className="Tabs__component" role="tabpanel">
            <div className="Tabs__container" role="tablist">
                <div id="tab-1" onClick={setSelection} className={selectedTab === 'tab-1' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Home</span>
                </div>
                <div id="tab-2" onClick={setSelection} className={selectedTab === 'tab-2' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Personal Projects</span>
                </div>
                <div id="tab-3" onClick={setSelection} className={selectedTab === 'tab-3' ? 'Tabs__tab Tabs__tab--selected' : 'Tabs__tab'} role="tab">
                    <span>Resume</span>
                </div>
            </div>
            <div className="Tabs__content-container">
                    <div className={selectedTab === 'tab-1' ? 'Tabs__content Tabs__content--selected' : 'Tabs__content'}>
                        <AboutMe/>
                    </div>
                    <div className={selectedTab === 'tab-2' ? 'Tabs__content Tabs__content--selected' : 'Tabs__content'}>
                        <DataGraph/>
                    </div>
                    <div className={selectedTab === 'tab-3' ? 'Tabs__content Tabs__content--selected' : 'Tabs__content'}>
                        <h3>Coming soon...</h3>
                    </div>
            </div>
    </div>);
}

export default Tabs;
