import React from 'react';
import SidebarCSS from './Sidebar.module.css';
import { useNavigate } from "react-router-dom";

const Sidebar = (props)=> {
    const navigate = useNavigate();


return(
<div  className={SidebarCSS["main-container"]}>
<nav className={SidebarCSS.sidebar}>
<div>
    <a href="/dashboard" className={SidebarCSS.brand}>
        <span className="material-icons-outlined" >
            layers
        </span>
        <span>DRAW STACK</span>
    </a>
        <small className={SidebarCSS["menu-heading"]}>
            <span>User Tools</span>
        </small>
        <ul className={SidebarCSS.tools}>
            <li>
                <a href="#" onClick={() => navigate("/connectors")}>
                    <span className="material-icons-outlined">
                        cable
                        {/* stacked_line_chart */}
                    </span>
                    <span>Connectors</span>
                </a>
            </li>
            <li>
                <a href="#" onClick={() => navigate("/data-archiving")}>
                    <span className="material-icons-outlined">
                        storage
                    </span>
                    <span>Data Archiving</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="material-icons-outlined">
                        analytics
                    </span>
                    <span>Threat Analysis</span>
                </a>
            </li>
            {/* <li>
                <a href="#">
                    <span className="material-icons-outlined">
                        account_balance_wallet
                    </span>
                    <span>Payouts</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="material-icons-outlined">
                        article
                    </span>
                    <span>Statements</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <span className="material-icons-outlined">
                        settings
                    </span>
                    <span>Settings</span>
                </a>
            </li> */}
        </ul>
        <hr/>
        {/* <small className={SidebarCSS["menu-heading"]}>
            <span>Insights</span>
        </small> */}
        <ul className={SidebarCSS.notifications}>
            <li>
                <a href="#">
                    <div>
                        <span className="material-icons-outlined">
                            person
                        </span>
                        <span>User Information</span>
                    </div>
                    {/* <span className={SidebarCSS.badge}>18</span> */}
                </a>
            </li>
            {/* <li>
                <a href="#">
                    <div>
                        <span className="material-icons-outlined">
                            notifications
                        </span>
                        <span>Notifications</span>
                    </div>
                    <span className={SidebarCSS.badge}>7</span>
                </a>
            </li>
            <li>
                <a href="#">
                    <div>
                        <span className="material-icons-outlined">
                            textsms
                        </span>
                        <span>Comments</span>
                    </div>
                    <span className={SidebarCSS.badge}>24</span>
                </a>
            </li> */}
        </ul>
        <div className={SidebarCSS.profile}>
            {/* <a href="#">
                <img src="../Coffee Shop/Images/coffee10-removebg-preview.png" alt=""/>
            </a> */}
            <div>
        <h5>{props.username}</h5>
                {/* <small>johndoe@gmail.com</small> */}
            </div>
            <span className="material-icons-outlined">
                verified_user
            </span>
        </div>
</div>
</nav>
</div>
)
} 
export default Sidebar