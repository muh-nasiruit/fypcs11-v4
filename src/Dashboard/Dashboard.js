import React from 'react';
import DashboardCSS from './Dashboard.module.css';
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';


const Dashboard = () => {
    const [userName, setUserName] = useState('');
    useEffect(()=>{
        const userName = localStorage.getItem('currentUserName');
        setUserName(userName);
    },[])
    return (
    <>
    <div className={DashboardCSS["main-container"]}>
        <div className={DashboardCSS["heading-user-name"]}>
           <span className={DashboardCSS["springy-text"]}>Welcome {userName} </span>
        </div>
        <Sidebar username={userName} />
    </div>
    </>
    )
    }
export default Dashboard