import styled from 'styled-components';
import Timer from '../components/timer';

const HomePage = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <HomePage>
      <Timer />
    </HomePage>
  );
}
