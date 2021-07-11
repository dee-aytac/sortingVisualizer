
async function quickSort(arr, start, end) {
    if (start >= end) {
        return;
    }
    let index = await partition(arr, start, end);
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
    let arrSorted = [...arr];
    console.log("sorted", arrSorted.sort((a, b) => a - b));
    console.log("normal", arr);
    if (JSON.stringify(arr) == JSON.stringify(arrSorted)){
        console.log("d");
        drawSorted();
    }
    
}

async function partition(arr, start, end){
    let pivotValue = arr[end];
    let pivotIndex = start;
    
    for (let i = start; i < end; i++) {
        pivots.push(end);
        if (arr[i] < pivotValue) {
        mark(i, pivotIndex);
        await sleep();
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        unmark(i, pivotIndex);
        pivotIndex++;

        }
    
        await sleep();
        draw();
        pivots.pop(end);
    }
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 

    return pivotIndex;
}


