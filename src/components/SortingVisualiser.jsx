import React, { useState, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";

function SortingVisualiser(props) {
  const [array, setArray] = useState([]);

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
        <div className={styles.arrayBars}></div>
      ))}
    </>
  );
}

export default SortingVisualiser;
