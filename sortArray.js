let i=0,maxValue=0,secondLargest=0,temp=0;
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

//Sort Array

for(i=0;i<10;i++){
    for(j=i+1;j<10;j++){
    if(number[i]>number[j]){
        temp = number[i];
        number[i] = number[j];
        number[j] = temp;
    }
}
}

for(i=0;i<10;i++){
    console.log(number[i]);
}

console.log("Largest after sort " + number[9]);
console.log("2nd Largest after sort " + number[8]);