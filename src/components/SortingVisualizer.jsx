import React, { useState, useEffect } from "react";
import styles from "./SortingVisualizer.module.css";
import * as SortingAlgorithms from "./SortingAlgorithms.js";

function SortingVisualizer(props) {
  const [array, setArray] = useState([]);

  function randomIntFromIntervals(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //set random array of 200 numbers
  const resetArray = () => {
    const arr = [];
    for (let i = 0; i < 200; i++) {
      arr.push(randomIntFromIntervals(10, 900));
    }
    setArray(arr);
    // console.log(arr);
  };

  useEffect(() => {
    resetArray();
  }, []);

  const mergeSortViz = () => {
    const javascriptSortedArray = array.slice().sort((a, b) => a - b);

    console.log(javascriptSortedArray);

    const sortedArray = SortingAlgorithms.mergeSort(array);
    console.log(sortedArray);
    // console.log(arraysAreEqual(javascriptSortedArray, sortedArray));
  };

  const quickSortViz = () => {};

  const heapSortViz = () => {};

  const bubbleSortViz = () => {};

  function arraysAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
  }

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
