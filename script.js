let dropdown1 = document.getElementById("date"); 
const num = [];
 for (let i = 1; i < 31; i++){
        num.push(i);   
}
num.forEach(number=>{
    let opt = document.createElement('option');
    opt.value = num.indexOf(number);
    opt.innerText = number
    dropdown1.appendChild(opt);
});

// month
let dropdown2 = document.getElementById("month");
let mon = []; 
for(let month in months){
  mon.push(month);
 }
 console.log(mon);
 mon.forEach(mahina=>{
    let opt1 = document.createElement('option');
    opt1.value = mahina.indexOf(mahina);
    opt1.innerText = mahina
    dropdown2.appendChild(opt1);
});
// year

let dropdown3 = document.querySelector("#year");
const num23 = [];
const d = new Date();
let year = d.getFullYear();
 for (let i = year; i>=1905; i--){
        num23.push(i);   
}
console.log(num23)
num23.forEach(yr=>{
    let opt3 = document.createElement('option');
    opt3.value = num23.indexOf(yr);
    opt3.innerText = yr
    dropdown3.appendChild(opt3);
});
