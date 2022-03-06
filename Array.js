let i=0,maxValue=0,secondLargest=0;
let number = [];


for (i = 0; i < 10; i++) {
    number[i] = Math.floor(Math.random()*(999-100+1)+100);
}

for (i = 0 ; i < 10 ; i++){
    console.log(number[i]);
}

for(i=0;i<10;i++){

if (number[i] > maxValue) {
    secondLargest = maxValue;
    maxValue = number[i];
} else if (number[i] > secondLargest) {
    secondLargest = number[i];
}
}
console.log("Max value and Second largest is");
console.log("Max value = "+ maxValue);
console.log("Second Largest = "+ secondLargest);


