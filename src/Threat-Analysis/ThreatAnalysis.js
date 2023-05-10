import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import '../Threat-Analysis/ThreatAnalysis.css'

function ThreatAnalysis() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  useEffect(()=>{
      const userName = localStorage.getItem('currentUserName');
      setUserName(userName);
      const email = localStorage.getItem('currentUserEmail');
      setEmail(email);
  },[])

  return (
    <div className="main-container">
            <Sidebar username={userName}
            email = {email}
            />
        <div className="threat-heading">
                <span>Threat Analysis</span>
        </div>
    </div>
  )
}

export default ThreatAnalysis