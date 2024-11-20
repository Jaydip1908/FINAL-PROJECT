import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
// import { Button } from './components/ui/button';
// import { Routes, Route } from "react-router-dom"
// import AuthPage from './pages/auth';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/api/user")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }, []);

  // console.log(data);
  return (
    <div>
      im auth page.
    </div>
  )

 
}

export default App;
