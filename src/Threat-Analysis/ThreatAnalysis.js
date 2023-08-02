import Sidebar from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ThreatAnalysis.css";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import axios from "axios";

const ThreatAnalysis = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [res, setRes] = useState(null);
  const [flag1, setFlag1] = useState(false);
  const [flag2, setFlag2] = useState(false);
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

  const visualizeData = () => {
    const failedLoginAttempts = JSON.parse(selected);
    const payLoad = {
      check: failedLoginAttempts,
    };

    const url = "http://172.104.174.187:4000/linux-analysis";
    axios.post(url, payLoad).then(function (response) {
      if (payLoad.check === 0) {
        setFlag1(true);
        setFlag2(false);
        setRes(response.data.out);
        console.log("Pie: ", response);
      } else if (payLoad.check === 1) {
        setFlag1(false);
        setFlag2(true);
        const sdata = response.data.out.sort((a, b) => {
          return (
            new Date(`1970/01/01 ${a.time}`) - new Date(`1970/01/01 ${b.time}`)
          );
        });
        console.log("Line: ", response.data.out);
        setRes(sdata);
      }
    });
  };

  //   const data = [
  //     {
  //       "count": 1630,
  //       "date": "Jul 31"
  //   },
  //   {
  //       "count": 1039,
  //       "date": "Aug 1"
  //   },
  //   {
  //       "count": 995,
  //       "date": "Jul 30"
  //   },
  //   {
  //       "count": 398,
  //       "date": "Aug 2"
  //   }
  //   ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ffa726", "#e57373"];

  return (
    <div className="main-container">
      <Sidebar username={userName} email={email} />
      {/* new  */}
      <div className="data-source-heading">
        <span>Threat Analysis</span>
      </div>
      <div className="data-source">
        <div className="select-box">
          <Form.Select
            aria-label="Default select example"
            onChange={changeSelectOptionHandler}
          >
            <option>Select Timestamp for Detection</option>
            <option value="0">Day Wise Detection</option>
            <option value="1">Second Wise Detection</option>
          </Form.Select>
          <Button
            variant="warning"
            onClick={() => {
              visualizeData();
            }}
          >
            Visualize
          </Button>{" "}
        </div>
        {res && flag1 && (
          <div className="output">
            <div className="data-source-heading">
        <span>Pie Chart</span>
        </div>
      
            {/* <p>Pie chart showing detection of # of Failed of Log Attempts with day-wise</p> */}
            <ResponsiveContainer width="75%" height={400}   className="rechartss">
              <PieChart>
                <Pie
                  data={res}
                  dataKey="count"
                  nameKey="date"
                  cx={500}
                  cy={200}
                  innerRadius={40}
                  outerRadius={80}
                  labelLine={false}
                  fill="#82ca9d"
                 
                  label={({ percent }) => `${(percent * 100).toFixed(2)}%`}
                >
                  {res.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => value.toLocaleString()} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
        )}

        {res && flag2 && (
          
            <div className="output">
            {/* <h2>Failed Login Attempts Line Chart</h2> */}
            <div className="data-source-heading">
        <span>Failed Login Attempts Line Chart</span>
        </div>
            <ResponsiveContainer width="75%" height={400}>
              <LineChart
                data={res}
                margin={{ top: 20, right: 30, left: 385, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" tick={{ fontSize: 12, color: "#ffffff" }} />
                <YAxis tick={{ fontSize: 12, color: "#ffffff" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#f5f5f5",
                    border: "none",
                    borderRadius: "4px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: 14 }} />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#e4f531"
                  strokeWidth={2}
                  dot={{ fill: "#a8329b", r: 1 }}
                  activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreatAnalysis;
