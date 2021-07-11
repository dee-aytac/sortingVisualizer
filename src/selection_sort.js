async function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let min = i
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
        mark(i, min);
        await sleep();
      if (min !== i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];    
      }
      sorted_indexes.push(i);
      unmark(i, min);
      await sleep();
      draw();
      
    }
    sorted_indexes.push(i); // Pushing the last index
  }