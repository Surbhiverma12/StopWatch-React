import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [Time, setTime] = useState(0)
  let [Running, setRunning]= useState(false)
   let numStyle = {
    fontSize: "2rem",
  }

  useEffect(()=>{
    let interval;
    if(Running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime +10)
      }, 10);
    } else if (!Running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval)
  }, [Running]);

  return (
    <>
    <h1>Stopwatch</h1>
    <div style={numStyle}>
      <span >
        {('0' + Math.floor(Time/60000) % 60).slice(-2)}
      </span>
      &nbsp;
      <span>
        {('0' + Math.floor(Time/1000) % 60).slice(-2)}
      </span>
      &nbsp;
      <span>
        {('0' + (Time/10) % 100).slice(-2)}
      </span>
    </div>
    <div>
      <br />
      {Running ? 
      (<button onClick={() => {setRunning(false) }}>Stop</button>) :
      (<button onClick={() => {setRunning(true) }}>Start</button>)
      }
      <button onClick={() => { setTime(0)}}>Reset</button>
    </div>
    </>
  )
}

export default App
