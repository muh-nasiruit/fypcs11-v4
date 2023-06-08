import React from 'react'
import '../Users-History/UsersHistory.css'
import Sidebar from '../Sidebar/Sidebar';
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";

function UsersHistory() {
    const navigate = useNavigate();
    
    const userName = localStorage.getItem('currentUserName');
    const email = localStorage.getItem('currentUserEmail');
    const userHist_str = localStorage.getItem('currentUserHistory');
    const user_hist = JSON.parse(userHist_str)

    
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
                    user_hist.map((item, index) => (
                        <tr key={index}>
                            <th scope='row'> {item.username}</th>
                            <td> {item.con_type} </td>
                            <td> {item.timestamp} </td>
                        </tr>
                        ))
                    } 
        </tbody>
        </Table>
        </div>
    </div>
    
  )
}


export default UsersHistory
