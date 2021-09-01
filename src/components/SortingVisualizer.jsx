import React, { useState, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import { mergeSort } from "./SortingAlgorithms";

function SortingVisualizer(props) {
  const [array, setArray] = useState([]);

  function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //set random array of 100 numbers
  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(randomIntFromIntervals(10, 900));
    }
    setArray(arr);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const mergeSortViz = () => {
    const javascriptSortedArray = array.slice().sort();
    const sortedArray = mergeSort(array);
    console.log(javascriptSortedArray);
    console.log(sortedArray);
  };

  const quickSortViz = () => {};

  const heapSortViz = () => {};

  const bubbleSortViz = () => {};

  return (
    <>
      <div className={styles.arrayContainer}>
        {array.map((val, id) => (
          <div
            className={styles.arrayBar}
            key={id}
            style={{ height: `${val}px` }}
          ></div>
        ))}
      </div>
      <button
        className={styles.newArrBtn}
        onClick={() => {
          resetArray();
        }}
      >
        Generate New Array
      </button>
      <button
        className={styles.newArrBtn}
        onClick={() => {
          mergeSortViz();
        }}
      >
        Merge Sort
      </button>
      <button
        className={styles.newArrBtn}
        onClick={() => {
          quickSortViz();
        }}
      >
        Quick Sort
      </button>
      <button
        className={styles.newArrBtn}
        onClick={() => {
          heapSortViz();
        }}
      >
        Heap Sort
      </button>
      <button
        className={styles.newArrBtn}
        onClick={() => {
          bubbleSortViz();
        }}
      >
        Bubble Sort
      </button>
    </>
  );
}

export default SortingVisualizer;
