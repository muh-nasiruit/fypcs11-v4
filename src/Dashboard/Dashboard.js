import React from 'react';
import DashboardCSS from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
    <>
    <div className={DashboardCSS["main-container"]}>
        <Sidebar />
    </div>
    </>
    )
    }
export default Dashboard