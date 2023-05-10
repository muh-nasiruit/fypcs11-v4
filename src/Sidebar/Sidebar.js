import React from 'react';
import SidebarCSS from './Sidebar.module.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import logoImg from '../assets/logo.png';

const Sidebar = (props)=> {
    const navigate = useNavigate();


return(
<div  className={SidebarCSS["main-container"]}>
<nav className={SidebarCSS.sidebar}>
<div>
    <span className={SidebarCSS.brand} onClick={() => navigate('/connectors')}>
        <img src={logoImg} className={SidebarCSS.logo}/>
        {/* <span className="material-icons-outlined" >
            layers
        </span>
        <span>DRAW STACK</span> */}
    </span>
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
                <a href="#" onClick={() => navigate("/threat-analysis")}>
                    <span className="material-icons-outlined">
                        analytics
                    </span>
                    <span>Threat Analysis</span>
                </a>
            </li>
        </ul>
        <hr/>
        <small className={SidebarCSS["menu-heading"]}>
            <span>User Details</span>
        </small>
        <ul className={SidebarCSS.notifications}>
            <li>
                <a href="#" onClick={() => navigate("/users-history")}>
                    <div>
                        <span className="material-icons-outlined">
                            person
                        </span>
                        <span>User Information</span>
                    </div>
                    {/* <span className={SidebarCSS.badge}>18</span> */}
                </a>
            </li>
        </ul>
        <hr />
        <div className={SidebarCSS.profile}>
        <h5>{props.username}</h5>
            <span className="material-icons-outlined">
                verified_user
            </span>
        </div>
        <div className={SidebarCSS.email}>{props.email}</div>
        <Button className={SidebarCSS["logout-btn"]} variant="primary" onClick={() => navigate("/")}>
            End Session
        </Button>

</div>
</nav>
</div>
)
} 
export default Sidebar