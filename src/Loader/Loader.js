import React from 'react';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './Loader.css'

function Loader() {
    const [userName, setUserName] = useState('');
    useEffect(()=>{
        const userName = localStorage.getItem('currentUserName');
        setUserName(userName);
    },[])
  return (
        <div className="loader-container">
            <Spinner className="spinner" animation="border" variant="info" />
        </div>
    )
  }
export default  Loader