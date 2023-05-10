import React from 'react';
import '../Data-Archiving/DataArchiving.css'
import Sidebar from '../Sidebar/Sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useEffect, useState } from 'react';

function DataArchiving() {
    const [userName, setUserName] = useState('');
    useEffect(()=>{
        const userName = localStorage.getItem('currentUserName');
        setUserName(userName);
    },[])
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };

    const mongoDbLogs = ['mongo1','mongo2'];
    const sqlLogs = ['Quit', 'Commandtype','Error'];
    const oracleLogs = ['oracle1','oracle2'];
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
            console.log(response)
        })
    }
    return (
        <>
            <div className="main-container">
                <Sidebar username={userName} />
                <div className="data-source-heading">
                    <span>Data Source Logs</span>
                </div>
                <div className="data-source">
                    <Form.Select aria-label="Default select example" onChange={changeSelectOptionHandler}>
                        <option>Select Data Source</option>
                        <option value="MySQL">MySQL</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Oracle">Oracle</option>
                        <hr/>
                        <option value="4">Linux</option>
                        <option value="windows">Windows</option>
                    </Form.Select>
                    <Button variant="warning" onClick={fetchData}>Fetch</Button>{' '}
                </div>

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