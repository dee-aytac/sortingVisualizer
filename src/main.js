const canvas = document.getElementById("canvas");
const sortingAlgorithm = document.getElementById("algorithm-select");
const sortSpeed = document.getElementById("sort-speed");
const arraySize = document.getElementById("array-size");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 1.75;
const ctx = canvas.getContext("2d");

const greenColor = "#73D248";
const redColor = "#ff006b";
const blueColor = "#5d54ff";
const whiteColor = "#01161e";
const barColor = "#008ED0";
let barWidth = (canvas.width / arraySize.value);
let arr = [];
let sorted_indexes = [];
let pivots = [];


// Generates a new array with given length
function generateNewArray(){
    sorted_indexes = [];
    let length = arraySize.value;
    console.log("Array size is", length, "bar width is", barWidth, "canvas width is ", canvas.width );
    barWidth = (canvas.width / length);
    for (let i =0 ;i < length; i++){
        arr[i] = Math.floor(Math.random() * (canvas.height - 5) + 5);
    }
    draw();
}


function sleep() {
    let ms = sortSpeed.value;
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to visualize swapped values
function mark(index1, index2){
    clearIndex(index1, index2);
    // First index
    ctx.strokeStyle = blueColor;
    ctx.fillStyle = blueColor;
    ctx.beginPath();
    ctx.rect(index1 * barWidth, canvas.height, barWidth, -arr[index1]);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    // Second index
    ctx.strokeStyle = redColor;
    ctx.fillStyle = redColor;
    ctx.beginPath();
    ctx.rect(index2 * barWidth, canvas.height, barWidth, -arr[index2]);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
}
function unmark(index1, index2){
    clearIndex(index1, index2);
    //First index
    ctx.strokeStyle = barColor;
    ctx.fillStyle = barColor;
    ctx.beginPath();
    ctx.rect(index1 * barWidth, canvas.height, barWidth, -arr[index1]);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();
    // Second index
    ctx.strokeStyle = barColor;
    ctx.fillStyle = barColor;
    ctx.beginPath();
    ctx.rect(index2 * barWidth, canvas.height, barWidth, -arr[index2]);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();

}

function clearIndex(index1, index2){
    ctx.strokeStyle = whiteColor;
    ctx.fillStyle = whiteColor;
    ctx.beginPath();
    ctx.rect(index1 * barWidth, canvas.height, barWidth, -canvas.height);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = whiteColor;
    ctx.stroke();
    // Second index
    ctx.beginPath();
    ctx.rect(index2 * barWidth, canvas.height, barWidth, -canvas.height);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = whiteColor;
    ctx.stroke();
}

// A function to draw the bars in current order
function draw() {
    clearScreen();
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        if (sorted_indexes.includes(i)){
            ctx.strokeStyle = greenColor;
            ctx.fillStyle = greenColor;
        }
        else if (pivots.includes(i)){
            ctx.strokeStyle = "#f5aa42";
            ctx.fillStyle = "#f5aa42";
        }
        else{
            ctx.strokeStyle = barColor;
            ctx.fillStyle = barColor;
        }
        ctx.beginPath();
        ctx.rect(x, canvas.height, barWidth, -arr[i]);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.stroke();
        x += barWidth;
    }
  }
function drawSorted(){
    clearScreen();
    let x = 0;
    for (let i = 0; i < arr.length; i++){
        ctx.strokeStyle = greenColor;
        ctx.fillStyle = greenColor;
        ctx.beginPath();
        ctx.rect(x, canvas.height, barWidth, -arr[i]);
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "black";
        ctx.stroke();
        x += barWidth;
    }
}


// Function to handle the sorting algorithm given by user
function sort(){
    if (sortingAlgorithm.value === "bubble-sort"){
        bubbleSort(arr);
    }
    else if (sortingAlgorithm.value === "merge-sort"){
        mergeSort(arr, 0, arr.length - 1);
    }
    else if (sortingAlgorithm.value === "insertion-sort"){
        insertionSort(arr, arr.length);
    }
    else if (sortingAlgorithm.value === "selection-sort"){
        selectionSort(arr);
    }
    else if (sortingAlgorithm.value === "quick-sort"){
        quickSort(arr, 0, arr.length - 1);
    }
    else if (sortingAlgorithm.value === "cocktail-sort"){
        cocktailSort(arr);
    }
}
//Clears the canvas
function clearScreen(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}