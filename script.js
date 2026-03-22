const cars = [
{
name:"Tesla Model S",
price:80000,
speed:250,
img:"https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-No-Background.png"
},
{
name:"BMW M4",
price:70000,
speed:280,
img:"bmw.png"
},
{
name:"Audi R8",
price:150000,
speed:330,
img:"https://www.pngplay.com/wp-content/uploads/13/Audi-R8-2019-Transparent-File.png"
}
];

// Load cars
function loadCars(){
let output="";
cars.forEach(c=>{
output += `
<div class="card">
<img src="${c.img}">
<h3>${c.name}</h3>
</div>`;
});
document.getElementById("carList").innerHTML = output;
}

// Search
function searchCar(){
let input = document.getElementById("searchInput").value.toLowerCase();
let result = cars.filter(c => c.name.toLowerCase().includes(input));

let output="";
result.forEach(c=>{
output += `
<div class="card">
<img src="${c.img}">
<h3>${c.name}</h3>
<p>Price: $${c.price}</p>
<p>Speed: ${c.speed} km/h</p>
</div>`;
});

document.getElementById("results").innerHTML = output;
}

// Compare
function compareCars(){
let c1 = document.getElementById("c1").value.toLowerCase();
let c2 = document.getElementById("c2").value.toLowerCase();

let car1 = cars.find(c => c.name.toLowerCase().includes(c1));
let car2 = cars.find(c => c.name.toLowerCase().includes(c2));

if(car1 && car2){
let better = car1.speed > car2.speed ? car1.name : car2.name;
document.getElementById("compareResult").innerText =
"Better performance: " + better;
}else{
document.getElementById("compareResult").innerText =
"Enter valid car names";
}
}

// Scroll
function scrollToCars(){
window.scrollTo({top:700,behavior:"smooth"});
}

loadCars();
