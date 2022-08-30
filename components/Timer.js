import { useState, useEffect } from 'react';
import TodaysHours from './TodaysHours';
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
    padding: 2rem;
  }
`;

export default function Timer() {
  const [running, setRunning] = useState(null);
  const [time, setTime] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(null);

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
      {/* 
        timer should show all hours totaled up for the day
        toggle switch to show todays breakdown ontop of total hours worked 
        i.e. machine name, job name,  
      */}

      <div>
        <span>
          {('0' + Math.floor((time / 3600000) % 24)).slice(-2)}:
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 10) % 100)).slice(-2)}
        </span>
      </div>

      <span>
        <button
          onClick={() => {
            setRunning(true);
          }}
        >
          Clock In
        </button>
        <button
          onClick={() => {
            let hours;
            setRunning(null);
            if (hoursWorked === null) {
              hours = [time];
            } else {
              hours = [...hoursWorked, time];
            }
            setHoursWorked(hours);
            // add the time to worked state
            // show all times added on that day with timestamp
            // if the time was added to same cost code && job, add time to previously logged time
          }}
        >
          Clock Out
        </button>
        <button
          onClick={() => {
            setRunning(null);
            setTime(0);
          }}
        >
          Reset
        </button>
      </span>
      {hoursWorked && <TodaysHours todaysHours={hoursWorked} />}
    </TimerStyle>
  );
}
