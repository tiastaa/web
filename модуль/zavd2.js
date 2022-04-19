let n =parseInt(prompt("Введіть елементів масива : "))
let numbers=[];
let firstzero ;
for (let index = 0; index < n; index++) {
    let x=parseInt(prompt(`Введіть ${index+1} елемент масива : `));
    numbers.push(x);
}
for (let index = 0; index < n; index++) {
    if(numbers[index]==0){
        firstzero=index+1;
        break;
    }
    
}
for (let index = firstzero; index < n; index++) {
    numbers[index]+=7;
    
}
for (let index = 0; index < n; index++) {
    
    document.write(`${numbers[index]} `)
}