import React from 'react';
import DashboardCSS from './Dashboard.module.css';
import { useNavigate } from "react-router-dom";
const Dashboard = ()=> {
    const navigate = useNavigate();
    return (
    <>
    <div className={DashboardCSS["main-container"]}>
    <nav className={DashboardCSS["sidebar"]}>
        <div>
            <a href="index.html" className={DashboardCSS["brand"]}>
                <span className="material-icons-outlined" >
                    layers
                </span>
                <span>DRAW STACK</span>
            </a>
                <small className={DashboardCSS["menu-heading"]}>
                    <span>Admin Tools</span>
                </small>
                <ul className={DashboardCSS["tools"]}>
                    <li>
                        <a href="#" onClick={() => navigate("/overview")}>
                            <span className="material-icons-outlined">
                                stacked_line_chart
                            </span>
                            <span>Overview</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" >
                            <span className="material-icons-outlined">
                                shopping_bag
                            </span>
                            <span>Campaigns</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="material-icons-outlined">
                                explore
                            </span>
                            <span>Schedules</span>
                        </a>
                    </li>
                    <li>
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
                    </li>
                </ul>
                <hr/>
                <small className={DashboardCSS["menu-heading"]}>
                    <span>Insights</span>
                </small>
                <ul className={DashboardCSS["notifications"]}>
                    <li>
                        <a href="#">
                            <div>
                                <span className="material-icons-outlined">
                                    email
                                </span>
                                <span>Inbox</span>
                            </div>
                            <span className={DashboardCSS["badge"]}>18</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div>
                                <span className="material-icons-outlined">
                                    notifications
                                </span>
                                <span>Notifications</span>
                            </div>
                            <span className={DashboardCSS["badge"]}>7</span>
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
                            <span className={DashboardCSS["badge"]}>24</span>
                        </a>
                    </li>
                </ul>
                <div className={DashboardCSS["profile"]}>
                    <a href="#">
                        <img src="../Coffee Shop/Images/coffee10-removebg-preview.png" alt=""/>
                    </a>
                    <div>
                        <h4>John Doe</h4>
                        <small>Free Account</small>
                    </div>
                    <span className="material-icons-outlined">
                        verified_user
                    </span>
                </div>
        </div>
    </nav>
    </div>
    </>
    )
}
export default Dashboard