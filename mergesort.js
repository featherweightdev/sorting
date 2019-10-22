const split = function(array) {
  const leftSide = array.slice(0, Math.ceil(array.length / 2));
  const rightSide = array.slice(Math.ceil(array.length / 2));
  const leftMerge = mergeSort(leftSide);
  const rightMerge = mergeSort(rightSide);
  return leftMerge.concat(rightMerge);
};

const merge = function(array) {
  let newArray = [];
  if (array.length < 2) {
    return array[0];
  } else {
    if (array[0].length === 0 && array[1].length === 0) {
      // pop empty arrays off and merget again
      merge(array.shift().shift());
    }
    // compare array[0][0] vs array [1][0]
    // eslint-disable-next-line no-lonely-if
    if (!array[0][0]) {
      newArray.push(array[1].shift());
    } else if (!array[1][0]) {
      newArray.push(array[0].shift());
    } else if (array[0][0] > array[1][0]) {
      newArray.push(array[1].shift());
    } else {
      newArray.push(array[0].shift());
    }

    return merge(array);
  }
};

const mergeSort = function(array) {
  const splitArray = [];
  // base case if array is only 1, we're done splitting
  if (array.length < 2) {
    splitArray.push(array);
    return splitArray;
  } else {
    merge(split(array));
  }
};
