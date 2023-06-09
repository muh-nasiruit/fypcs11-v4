import React from 'react';
import '../Data-Archiving/DataArchiving.css'
import Sidebar from '../Sidebar/Sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function DataArchiving() {
    const [showLog, setLogs] = useState(null);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(()=>{
        const userName = localStorage.getItem('currentUserName');
        setUserName(userName);
        const email = localStorage.getItem('currentUserEmail');
        setEmail(email);
    },[])
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };

    const mongoDbLogs = ['All', 'mongo1','mongo2'];
    const sqlLogs = ['All', 'Quit', 'Connect','Query','Execute'];
    const oracleLogs = ['All', 'startup','shutdown', 'process start'];
    const windows = ['All','Information','Warning','Error'];
    let type = null;
    let options = null;

    if (selected === "MySQL") {
        type = sqlLogs;
      } else if (selected === "MongoDB") {
        type = mongoDbLogs;
      } else if (selected === "Oracle") {
        type = oracleLogs;
      }

      if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
        console.log(options)
      }
      const fetchData = () => {
          const userId_string = localStorage.getItem('currentUserId');
          const user_id = JSON.parse(userId_string);
        const payLoad = {
            user_id: user_id,
            data_src: selected
        } 
        const url = 'http://172.104.174.187:4000/api/get/arch-logs';
        axios.post(url, payLoad)
        .then(function(response){
            const logsData = response.data.log_data;
            setLogs(logsData)
            console.log(response)
        })
    }
    return (
        <>
            <div className="main-container">
            <Sidebar username={userName}
            email = {email}
            />
                <div className="data-source-heading">
                    <span>Data Source Logs</span>
                </div>
                <div className="data-source">
                    <Form.Select aria-label="Default select example" onChange={changeSelectOptionHandler}>
                        <option>Select Data Source</option>
                        <option value="MySQL">MySQL</option>
                        <option value="mongodb">MongoDB</option>
                        <option value="oracle">Oracle</option>
                        <hr/>
                        <option value="linux">Linux</option>
                        <option value="windows">Windows</option>
                    </Form.Select>
                    <Button variant="warning" onClick={()=> {handleShow(); fetchData()}}>Fetch</Button>{' '}
                </div>
                <Modal show={show} onHide={handleClose}>
                        {/* <div className={MainCss.header}> */}
                        <Modal.Header closeButton>
                            <Modal.Title>Fetched logs</Modal.Title>
                        </Modal.Header>
                        {/* </div> */}
                        <Modal.Body>
                             <div className="logs">
                                 {showLog && 
                                 <div>
                                     {showLog}
                                 </div>
                                 }
                             </div>
                        </Modal.Body>
                    </Modal>

                <div className="data-source-heading">
                    <span>Command Type</span>
                </div>
                <div className="data-source">
                    <Form.Select aria-label="Default select example">
                        { options}
                        
                    </Form.Select>
                    <Button variant="warning">Analyze</Button>{' '}
                </div>
            </div>
        </>
    )
}
export default DataArchiving
