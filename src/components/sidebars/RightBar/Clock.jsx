import { useState, useEffect } from 'react';

import clock from '../../../utils/clock';
import clockStyles from '../../../styles/components/sidebars/RightBar/Clock.module.css';

function Clock() {
  const [time, setTime] = useState(clock());
  const { hour, min } = time;

  useEffect(() => {
    const getTime = () => {
      const newTime = clock();
      setTime(newTime);
    };
    let intervalId = setInterval(getTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={clockStyles.clock}>
      <p>
        <time>
          {`${hour}`}&thinsp;:&thinsp;{`${min}`}
        </time>
      </p>
    </div>
  );
}

export default Clock;
