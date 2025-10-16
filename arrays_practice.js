//three ways to create array
let fruits =["apple", "mango", "banana"];
let num = new Array(1,0,1,0,1,0);
let colors =[];
colors[0] ="red";
colors[1] ="blue";


//data tybe can be stored inside array 
let mixedArray= [1, "blue", true]

//how array is defferent from singl variables
let name = "gorashi"//single var
let names = ["moha", "mkrma","hababa"]//array

//how to access a specific item in aray 
let bai =["apple", "mango", "banana"];
console.log(bai[0]);
console.log(bai[bai.length -1])
 
//add new element
bai[3] = "blha";
console.log(bai)

// what does .length do ?
console.log(bai.length);

//level 3
//printing elemint usingf three loops

// 
let numb = [1,1,5];
for (let i = 0; i < numb.length; i++){
console.log(numb[i] * 2);
}


//upeercase
//let blaon =["home","martinking","hala"];
//for (let i = 0; i < blaon.length; i++){
//console.log(blaon[i],toUpperCase());
//}



//counting 
let books =["home","martinking","hala"];
let count =0 ;
for (let book of books){
    count++;
    console.log(count)
}
//max ans min 
let numbers=[1,30,5,90];
let max = numbers[0];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++){
    if (numbers[i] > max ) max = numbers[i];
    if (numbers[i] < min ) min = numbers [i];

}
console.log("max:" ,max)
console.log("min:", min)