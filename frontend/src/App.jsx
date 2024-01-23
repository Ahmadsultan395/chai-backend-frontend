import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios";

function App() {
 const[jokes, setjokes]=useState([])

 useEffect(()=>{
  axios.get('/api/joke')
  .then((response)=>{
    setjokes(response.data)
  })
  .catch((error)=>{
    console.log(error)
  })
 });

  return (
    <>
        <h1>ahmad sultan</h1>
        <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke,index)=>(
          <div key={joke.userId}>
            <h2>{joke.id}</h2>
            <h3>{joke.title}</h3>
            <p>{joke.body}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
