import { useState } from 'react'
import './App.css'
import Form from './components/Form';
import List from './components/List';
import {Sub} from '../types'

interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nickname: "dapelu",
    monthSubs: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Senior developer @ Vercel"
  },
    {
    nickname: "chuyi",
    monthSubs: 7,
    avatar: "https://i.pravatar.cc/150?u=chuyi",
 
  }
]



function App() {

  const [subs, setSubs] = useState<AppState["subs"]>(INITIAL_STATE)
  const [newSubsNumber, setnewSubsNumber] = useState<AppState["newSubsNumber"]>(0)

  const handleNewSub = (newSub: Sub): void => {
  setSubs(subs => [...subs, newSub])
}

  return (
    <div className="App">
      <h1>My Followers</h1>
        <List subs = {subs}/>
        <Form  onSub={handleNewSub}/>
    </div>
  )
}

export default App
