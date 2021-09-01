export const mergeSort = (arr) => {
  if (arr.length === 0) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const firstHalf = mergeSort(arr.slice(0, midIdx));
  const secondHalf = mergeSort(arr.slice(midIdx));
  const sortedArr = [];
  let i = 0,
    j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArr.push(firstHalf[i++]);
    } else {
      sortedArr.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) sortedArr.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArr.push(secondHalf[j++]);
  return sortedArr;
};
