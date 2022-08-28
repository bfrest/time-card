import { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimerStyle = styled.div`
  border: 2px solid gray;
  font-size: 5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    font-size: 3rem;
    padding: 1rem;
    margin: 0 1rem;
  }
  span {
    padding: 0.5rem;
    text-align: center;
  }
`;

export default function Timer() {
  const [running, setRunning] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prevtime) => prevtime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);
  return (
    <TimerStyle>
      <div>
        <span>{('0' + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>

      <span>
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Start
        </button>
        <button onClick={() => setRunning(null)}>Pause</button>
        <button
          onClick={() => {
            setRunning(null);
            setTime(0);
          }}
        >
          Reset
        </button>
      </span>
    </TimerStyle>
  );
}
