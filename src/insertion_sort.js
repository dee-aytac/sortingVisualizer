async function insertionSort(arr, n){
    let i = 1
    while (i < n) {
        let j = i
        while (j > 0 && arr[j - 1] > arr[j]) {
        mark(j, j-1);
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        // let temp = arr[j];
        // arr[j] = arr[j - 1];
        // arr[j - 1] = temp;
        j = j - 1;
        
        await sleep();
        draw();
        
        }
        sorted_indexes.push(i - 1);
        i = i + 1;
        
        //sorted_indexes.push(i);
    }
    sorted_indexes.push(i - 1);
    sorted_indexes.push(i);
    draw();
}

