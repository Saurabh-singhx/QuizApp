import { useState } from 'react'

import './App.css'
import Mainpage from './Mainpage'
import { getlocaldata, setLocalStorage } from './storage'
import { useEffect } from 'react';

function App() {
  
  const [data, setdata] = useState([]);
  const [qusnumber, setqusnumber] = useState(0);
  
  useEffect(() => {
    setLocalStorage();
    setdata(getlocaldata());
  }, [])

  // console.log(data);
  
  return (
    <>
      <Mainpage data = {data} number = {qusnumber} setnumber={setqusnumber}/>
    </>
  )
}

export default App
