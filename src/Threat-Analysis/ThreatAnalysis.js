import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        {/* new  */}
        <div className="data-source-heading">
                    <span>Data Source Logs</span>
                </div>
                <div className="data-source">
                    <Form.Select aria-label="Default select example">
                        <option>Select Data Source</option>
                        <option value="MySQL">MySQL</option>
                        <option value="mongodb">MongoDB</option>
                        <option value="oracle">Oracle</option>
                        <hr/>
                        <option value="linux">Linux</option>
                        <option value="windows">Windows</option>
                    </Form.Select>
                    <Button variant="warning">Fetch</Button>{' '}
                </div>
    </div>
  )
}

export default ThreatAnalysis