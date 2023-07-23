import "./../styles/App.css";
import React, { useEffect, useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setProgress((prev) => prev + 50);
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, []);

  if (progress > 500) {
    setProgress(0);
  }

  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Progress Bar</h3>
      <div
        id="barOuter"
        style={{ width: "500px", height: "15px", backgroundColor: "grey" }}
      >
        <div
          id="barInner"
          style={{
            width: `${progress}px`,
            height: "100%",
            backgroundColor: "blue",
          }}
        ></div>
      </div>
      <p>{Math.floor(progress / 5)}%</p>
    </div>
  );
};

export default App;
