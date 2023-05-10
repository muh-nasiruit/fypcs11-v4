import React from 'react';
import mongoImg from '../assets/mongo.png';
import oracleImg from '../assets/oracle.jpg';
import windowsImg from '../assets/windows.jpg';
import linuxImg from '../assets/linux.jpg';
import sqlImg from '../assets/sql.png';
import ConnectorsCSS from './Connectors.module.css'
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from "react-router-dom";
import iFrame from 'react-iframe'
import { useEffect, useState } from 'react';

function Connectors() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(()=>{
        const userName = localStorage.getItem('currentUserName');
        setUserName(userName);
        const email = localStorage.getItem('currentUserEmail');
        setEmail(email);
    },[])

    // const Greetings = () => {
    //     const [userName, setUserName] = useState('');
    //     useEffect(()=>{
    //         const userName = localStorage.getItem('currentUserName');
    //         setUserName(userName);
    //     },[])

  return (
    <>
    <div className={ConnectorsCSS["main-container"]}>
    <div className={ConnectorsCSS["heading-user-name"]}>
           <span className={ConnectorsCSS["springy-text"]} onClick={() => navigate('/users-history')}>
            Welcome {userName} 
            </span>
    </div>
    <div className={ConnectorsCSS["connector-heading"]}>
        <span>Database & OS Connectors</span>
    </div>
        <Sidebar username={userName}
        email = {email}
        />
        <div className={ConnectorsCSS.wrapper}>
            <Card
            Img = {sqlImg}
            title = "MySQL Details"
            description = "Here you can view the logs of MySQL , click here for more description"
            btn = "Connect to MySQL"
            links = "http://mysqllog.draw-string.com"
            />
            <Card
            Img = {mongoImg}
            title = "MongoDB Details"
            description = "Here you can view the logs of mongodb , click here for more description"
            btn = "Connect to MongoDB"
            links = "http://mongodblog.draw-string.com"
            />
            <Card
            Img = {oracleImg}
            title = "Oracle Details"
            description = "Here you can view the logs of Oracle , click here for more description"
            btn = "Connect to Oracle"
            links = "http://oraclelog.draw-string.com"
            />
            <Card
            Img = {linuxImg}
            title = "Linux Details"
            description = "Here you can view the logs of Linux , click here for more description"
            btn = "Connect to Linux"
            links = "http://linuxlog.draw-string.com"
            />
             <Card
             Img = {windowsImg}
            title = "Windows logs Details"
            description = "Here you can view the logs of Windows , click here for more description"
            btn = "Connect to Windows"
            links = "http://windowslog.draw-string.com"
            />
        </div>
        </div>
    </>
  )
}
function Card(props){
    return(
    <div className={ConnectorsCSS.card}>
    <div className={ConnectorsCSS["card-body"]}>
        <img src={props.Img} alt="" className={ConnectorsCSS["card-img"]}/>
        <h2 className={ConnectorsCSS["card-title"]}> 
            {props.title}
            {/* Mongo DB Details */}
        </h2>
        <p className={ConnectorsCSS["card-description"]}>
            {props.description}
            {/* Here you can view the logs of mongodb , click here for more description */}
        </p>
    </div>
    <a className={ConnectorsCSS["card-btn"]} href ={props.links}>{props.btn}</a>
    {/* <a className={ConnectorsCSS["card-btn"]}> 
    <iFrame url="http://mysqllog.draw-string.com"
        width="640px"
        height="320px"
        id=""
        className=""
        display="block"
        position="relative"/>
    </a> */}
</div> 
    )
}
export default Connectors