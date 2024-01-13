import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'
import CardAction from '../../Partials/Widgets/CardAction/CardAction';
import Tasks from './Components/Tasks';
import Emails from './Components/Emails';

import avatar1 from '../../assets/images/xs/avatar1.jpg';
import avatar2 from '../../assets/images/xs/avatar2.jpg';
import avatar3 from '../../assets/images/xs/avatar3.jpg';
import avatar4 from '../../assets/images/xs/avatar4.jpg';
import avatar5 from '../../assets/images/xs/avatar5.jpg';
import SidebarContent from './SidebarContent';

const CommonRightbar = () => {
    const [activeTab, setActiveTab] = useState('pills_today'); 

    const handleTabSelect = (tabId) => {
        setActiveTab(tabId);
    };

  return (
    <aside className="ps-4 pe-3 py-3 rightbar" id='rightbar' data-bs-theme="none">
        <div className="navbar navbar-expand-xxl px-3 px-xl-0 py-0">
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvas_rightbar" aria-labelledby="offcanvas_rightbar">
                <div className="offcanvas-header" style={{"background": "var(--body-color)"}}>
                    <h5 className="offcanvas-title">Rightbar quick access</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body flex-column custom_scroll" style={{"background": "var(--body-color)"}}>
                   
                   <SidebarContent />
                </div>
            </div>
        </div>
    </aside>
  )
}

export default CommonRightbar