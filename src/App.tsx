import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Sub, SubsFromApi } from "../types";
import axios from "axios";
import { getAllSubs } from "./services/getAllSubs";

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setnewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  useEffect(() => {
    getAllSubs().then(setSubs);
  }, []);

  return (
    <div className="App">
      <h1>My Followers</h1>
      <List subs={subs} />
      <Form onSub={handleNewSub} />
    </div>
  );
}

export default App;
