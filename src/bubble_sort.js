async function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {

            mark(j, j + 1);
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];    
        }
        await sleep();
        sorted_indexes.push(arr.length - i);
        draw();
        
        
      }
      
    }
    sorted_indexes.push(1); // pushing the last indexes
    sorted_indexes.push(0);
    draw();
  }

