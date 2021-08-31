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
    <>
      {array.map((val, id) => (
        <div className={styles.arrayBars} key={id}>
          {val}
        </div>
      ))}
    </>
  );
}

export default SortingVisualizer;
