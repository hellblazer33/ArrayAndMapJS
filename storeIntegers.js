let i=0,j=0,k=0;
let number = [];
let array = [];


for(i=0;i<10;i++){
    number[i] = Math.floor(Math.random() * 90 + 10);
}

for(i=0;i<10;i++){
    console.log(number[i]);
}

for(i=0;i<10;i++){
    for(j=i+1;j<10;j++){
        if(number[i] == number[j]){
            array[k]=number[i];
            k = k + 1;
        }
    }
}

console.log("Repeated numbers if any are");

for(k=0;k<array.length;k++){
    console.log(array[k]);
}