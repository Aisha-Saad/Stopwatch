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
    <div className="max-w-md flex flex-col items-center justify-center py-8" >
      <div>
      <h1 className="text-2xl font-semibold"> 01- stopwatch</h1>
      <div className=" text-xl font-semibold py-4">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div className="w-3/2 max-w-sm flex flex-row justify-evenly ">
        {runing ? (
          <button  className="border px-2 py-1"
            onClick={() => {
              setRining(false);
            }}
          >
            Stop
          </button>
        ) : (
          <button className="border py-1 px-2"
            onClick={() => {
              setRining(true);
            }}
          >
            Start
          </button>
        )}

        <button className=" border rounded-l py-1 px-2"
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
