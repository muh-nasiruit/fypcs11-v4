import React from 'react';
import mongoImg from '../../assets/mongo.png';
import oracleImg from '../../assets/oracle.jpg';
import windowsImg from '../../assets/windows.jpg';
import linuxImg from '../../assets/linux.jpg';
import sqlImg from '../../assets/sql.png';
import './Overview.css'

function Overview() {
  return (
    <>
    <div className="main-container">
        <div className="wrapper">
            <Card
            Img = {mongoImg}
            title = "Mongo DB Details"
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
            Img = {sqlImg}
            title = "MySQL Details"
            description = "Here you can view the logs of MySQL , click here for more description"
            btn = "Connect to MySQL"
            links = "http://mysqllog.draw-string.com"
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
    <div className="card">
    <div className="card-body">
        <img src={props.Img} alt="" className="card-img"/>
        <h2 className="card-title"> 
            {props.title}
            {/* Mongo DB Details */}
        </h2>
        <p className="card-description">
            {props.description}
            {/* Here you can view the logs of mongodb , click here for more description */}
        </p>
    </div>
    <a className="card-btn" href ={props.links}>{props.btn}</a>
</div> 
    )
}
export default Overview