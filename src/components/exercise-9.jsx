import { useEffect, useState } from "react"

const Exercise9 = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);


    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Seconds: {seconds}</h1>
    </div>
  );
};

export default Exercise9