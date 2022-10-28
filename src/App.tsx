import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import { Sub, SubsFromApi } from "../types";

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
    const fetchSubs = (): Promise<SubsFromApi> => {
      return fetch("http://localhost:3000/users").then((res) => res.json());
    };

    const mapSubsFromApi = (apiSubs: SubsFromApi): Array<Sub> => {
      return apiSubs.map((apiSub) => {
        const {
          nickname,
          month: monthSubs,
          profileURL: avatar,
          description,
        } = apiSub;
        return {
          nickname,
          monthSubs,
          avatar,
          description,
        };
      });
    };

    fetchSubs().then(mapSubsFromApi).then(setSubs);
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
