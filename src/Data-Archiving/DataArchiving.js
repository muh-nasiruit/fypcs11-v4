import React from 'react';
import '../Data-Archiving/DataArchiving.css'
import Sidebar from '../Sidebar/Sidebar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function DataArchiving() {
    const [selected, setSelected] = React.useState("");

    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
      };

    const mongoDbLogs = ['mongo1','mongo2'];
    const sqlLogs = ['Quit', 'Commandtype','Error'];
    const oracleLogs = ['oracle1','oracle2'];
    let type = null;
    let options = null;

    if (selected === "MySql") {
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
    return (
        <>
            <div className="main-container">
                <Sidebar />
                <div className="data-source-heading">
                    <span>Data Source Logs</span>
                </div>
                <div className="data-source">
                    <Form.Select aria-label="Default select example" onChange={changeSelectOptionHandler}>
                        <option>Select Data Source</option>
                        <option value="MySql">MySql</option>
                        <option value="MongoDB">MongoDB</option>
                        <option value="Oracle">Oracle</option>
                        <hr/>
                        <option value="4">Linux</option>
                        <option value="5">Windows</option>
                    </Form.Select>
                    <Button variant="warning">Fetch</Button>{' '}
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