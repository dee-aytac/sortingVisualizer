var itmd = [];
  
async function mergeArray(arr, start, end) {
    let mid = Math.floor((start + end) / 2);

    let start1 = start, start2 = mid + 1
    let end1 = mid, end2 = end
    let index = start
    
    while (start1 <= end1 && start2 <= end2) {
        sorted_indexes.push(index);
        
        if (arr[start1] <= arr[start2]) {
            mark(start1, start2);
            itmd[index] = arr[start1]
            index = index + 1
            start1 = start1 + 1;
            
        }
        else if(arr[start1] > arr[start2]) {
            mark(start1, start2);
            itmd[index] = arr[start2]
            index = index + 1
            start2 = start2 + 1;
        }
        await sleep();
        draw();
    }
    sorted_indexes.push(index);
    while (start1 <= end1) {
        itmd[index] = arr[start1]
        index = index + 1
        start1 = start1 + 1;
        sorted_indexes.push(index);
    }
  
    while (start2 <= end2) {
        itmd[index] = arr[start2]
        index = index + 1
        start2 = start2 + 1;
        sorted_indexes.push(index);
    }
  
    index = start
    while (index <= end) {
        arr[index] = itmd[index];
        index++;
        sorted_indexes.push(index);
    }
    console.log(itmd);
}
 
async function mergeSort(arr, start, end){
    if (start < end) {
        let mid = Math.floor((start + end) / 2);

        await mergeSort(arr, start, mid);
        await mergeSort(arr, mid + 1, end);
        await mergeArray(arr, start, end);
        await sleep();
    }
    draw();
}

