import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [runing, setRining] = useState(false);

  useEffect(() => {
    let interval;
    if (runing) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!runing) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [runing]);

  return (
    <div >
      <div className="  w-3/2  gap-4 items-center text-xl p-5">
      <h1> 01- stopwatch</h1>
      <div className="">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className=" flex flex-colum items-center text-xl">
        {runing ? (
          <button 
            onClick={() => {
              setRining(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button
            onClick={() => {
              setRining(true);
            }}
          >
            Start
          </button>
        )}

        <button
          onClick={() => {
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
