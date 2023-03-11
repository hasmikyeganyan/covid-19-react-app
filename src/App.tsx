import React, { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import "./assets/styles/app.scss";
import Select from "./components/Select";
import { fetchData, fetchRegions } from "./services/fetchseletc";
import Title from "./components/Title";
import Input from "./components/Input";
function App() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [regions, setRegions] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    fetchRegions().then((res) => setRegions(res.data));
  }, []);

  useEffect(() => {
    fetchData(date).then((res) => setData(res.data));
  }, [date]);

  return (
    <div className="App">
      <div className="container">
        <div className="navbar navbar-light bg-light justify-content-between">
          <Title title="Coronavirus(COVID-19)" updated={date} />
          <Input onValueChange={(e) => setDate(e)} />
        </div>
        <Dashboard data={data as any} />
        <div className="region d-flex">
          <Select data={regions} />
        </div>
      </div>
    </div>
  );
}

export default App;
