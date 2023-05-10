import React from 'react'
import '../Users-History/UsersHistory.css'
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table'
import axios from 'axios';
import Loader from '../Loader/Loader';
import { useNavigate } from "react-router-dom";

function UsersHistory() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(true);
    const [res, setRes] = useState([])
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    
    
    const uName = localStorage.getItem('currentUserName');
    const uMail = localStorage.getItem('currentUserEmail');
    const userId_string = localStorage.getItem('currentUserId');
    setUserName(uName);
    setEmail(uMail);
    
    const user_id = JSON.parse(userId_string);
    const payLoad = {
        id : user_id
    }
    
      useEffect(() => {
        const url = 'http://172.104.174.187:4000/api/get-history';
        axios.post(url, payLoad)
        .then(function(response){
            setRes(response.data)
            console.log(response)
            setLoading(false);
        })
      }, []);


  return (
    <div className="main-container">
    <div className="heading-user-name">
           <span className="springy-text" onClick={() => navigate('/users-history')}>
            Welcome {userName} 
            </span>
    </div>
            <Sidebar username={userName}
            email = {email}
            />
        <div className="recent-act-heading">
                <span>Recent Activities</span>
        </div>
        <div id="my-table" className="users-table">
        <Table className='table'>
        <thead className='table-dark'>
        <tr>
        <th scope='col'> UserName </th>
        <th scope='col'> Connector Type </th>
        <th scope='col'> Activity Time</th> 
        </tr>
        </thead>
        <tbody id='tbody-out'>
        {
                    res.map((item, index) => (
                        <tr key={index}>
                            <th scope='row'> {item.username}</th>
                            <td> {item.con_type} </td>
                            <td> {item.timestamp} </td>
                        </tr>
                        ))
                    } 
        </tbody>
        {isLoading && <Loader/>}
        </Table>
        </div>
    </div>
    
  )
}


export default UsersHistory
