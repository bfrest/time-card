import getCurrentDate from '../utils/getCurrentDate';
import getTime from '../utils/getCurrentTime';

export default function Home() {
  let minute = 0;
  let hour = 0;
  let seconds = 0;
  let miliSeconds = 0;
  let cron;

  const startTimer = () => {
    pauseTimer();
    cron = setInterval(() => {
      timer;
    }, 10);
  };

  const pauseTimer = () => {
    //
    clearInterval(cron);
  };

  const resetTimer = () => {
    //
    let minute = 0;
    let hour = 0;
    let seconds = 0;
    let miliSeconds = 0;
    let cron;
  };

  function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    hour;
    minute;
    seconds;
    miliSeconds;
  }

  return (
    <div>
      <div>{`${hour}:${minute}:${seconds}:${miliSeconds}`}</div>
      <button
        onClick={() => {
          startTimer();
          console.log('started');
        }}
      >
        Start
      </button>
      <button>Pause</button>
      <button>Reset</button>
    </div>
  );
}
