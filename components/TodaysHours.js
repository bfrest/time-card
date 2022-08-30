import styled from 'styled-components';

const TodaysLogs = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function TodaysHours(logs) {
  return (
    <TodaysLogs>
      {logs.todaysHours.map((item) => (
        <span key={item}>
          {('0' + Math.floor((item / 3600000) % 24)).slice(-2)}:
          {('0' + Math.floor((item / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((item / 1000) % 60)).slice(-2)}:
          {('0' + Math.floor((item / 10) % 100)).slice(-2)}
        </span>
      ))}
    </TodaysLogs>
  );
}
