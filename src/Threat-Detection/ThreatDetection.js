import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from 'axios';
import Table from 'react-bootstrap/Table'
import "./ThreatDetection.css";

function ThreatDetection() {
  const [res, setRes] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const userName = localStorage.getItem("currentUserName");
    setUserName(userName);
    const email = localStorage.getItem("currentUserEmail");
    setEmail(email);

  }, []);


const changeSelectOptionHandler = (event) => {
      setSelected(parseInt(event.target.value));
    };

  const fetchData = () => {
    const failedLoginAttempts = JSON.parse(selected);;
  const payLoad = {
      check: failedLoginAttempts
  } 
 
  const url = 'http://172.104.174.187:4000/linux-fetch';
  axios.post(url, payLoad)
  .then(function(response){
      console.log(response)
      if(payLoad.check == 0){
        setFlag(false)
      }else{
        setFlag(true)
      }
      setRes(response.data.out)
  })
}

  return (
    <div className="main-container">
      <Sidebar username={userName} email={email} />
      {/* new  */}
      <div className="data-source-heading">
        <span>Threat Detection</span>
      </div>
      <div className="data-source">
        <Form.Select aria-label="Default select example" onChange={changeSelectOptionHandler}>
          <option>Select Data Source</option>
          <option value="0">Failed Login Attempts</option>
          <option value="1">Detect Intrusion</option>
        </Form.Select>
        <Button variant="warning" onClick={()=> {fetchData()}}>Fetch</Button>{" "}
      </div>
      {/* 0 table */}
      {res && !flag &&
      <div id="my-table" className="users-table">
        <Table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col"> Date </th>
              <th scope="col"> Time </th>
              <th scope="col">Message </th>
            </tr>
          </thead>
          <tbody id="tbody-out">
            {res.map((item, index) => (
              <tr key={index}>
                <th scope="row"> {item.date}</th>
                <td> {item.time} </td>
                <td> {item.msg} </td>
              </tr>
            ))}
          </tbody>


        </Table>
      </div>
}
{/* check 1 table */}
{flag && res &&
<div id="my-table" className="users-table">
        <Table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col"> Attacks Count </th>
              <th scope="col"> IP Address </th>
            </tr>
          </thead>
          <tbody id="tbody-out">
            {res.map((item, index) => (
              <tr key={index}>
                <th scope="row"> {item[0]}</th>
                <td> {item[1]} </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
}
    </div>       
  );
}

export default ThreatDetection;
