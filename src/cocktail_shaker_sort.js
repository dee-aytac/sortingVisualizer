async function cocktailSort(a){
    let swapped = true;
    let start = 0;
    let end = a.length;

    while (swapped == true) {
        swapped = false;
        sorted_indexes.push(end - 1);
        console.log(end - 1); 
    
        for (let i = start; i < end - 1; ++i) {
            
            if (a[i] > a[i + 1]) {
                mark(i, i+1);
                await sleep();
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                // let temp = a[i];
                // a[i] = a[i + 1];
                // a[i + 1] = temp;
                swapped = true;
                unmark(i, i+1);
            }
            
        }
        sorted_indexes.push(start); 
        if (swapped == false)
            break;
        swapped = false;
        end = end - 1;

        for (let i = end - 1; i >= start; i--) {
            if (a[i] > a[i + 1]) {
                mark(i, i+1);
                await sleep();
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                // let temp = a[i];
                // a[i] = a[i + 1];
                // a[i + 1] = temp;
                swapped = true;
                unmark(i, i+1);
            }
        }
        start = start + 1;
        await sleep();
        draw();
    }
    drawSorted();
}

