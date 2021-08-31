import React, { useState, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";

function SortingVisualizer(props) {
  const [array, setArray] = useState([]);

  function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //set random array
  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(randomIntFromIntervals(10, 1000));
    }
    setArray(arr);
  };

  useEffect(() => {
    resetArray();
  }, []);

  return (
    <div className={styles.arrayContainer}>
      {array.map((val, id) => (
        <div key={id}>{val}</div>
      ))}
    </div>
  );
}

export default SortingVisualizer;
