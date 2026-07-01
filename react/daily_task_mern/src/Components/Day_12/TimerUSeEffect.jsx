import { useEffect, useState } from "react";

const TimerUSeEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold text-blue-600">
          {count}
        </h1>

        <p className="mt-4 text-gray-600">
          Timer updates every second
        </p>
      </div>
    </div>
  );
};

export default TimerUSeEffect;