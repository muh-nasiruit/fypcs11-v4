import React from 'react';
import SidebarCSS from './Sidebar.module.css';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

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
        </ul>
        <hr/>
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
        </ul>
        <hr />
        <div className={SidebarCSS.profile}>
        <h5>{props.username}</h5>
                {/* <small>johndoe@gmail.com</small> */}
            <span className="material-icons-outlined">
                verified_user
            </span>
        </div>
        <Button className={SidebarCSS["logout-btn"]} variant="primary" onClick={() => navigate("/")}>
            End Session
        </Button>

</div>
</nav>
</div>
)
} 
export default Sidebar