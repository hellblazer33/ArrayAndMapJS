let n = 16;
let i = 0;

console.log("Prime factors are");

for(i=1;i<=n/2;i++){
    if(n%i==0){
        console.log(i);
    }
}