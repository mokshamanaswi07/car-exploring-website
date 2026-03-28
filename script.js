const cars = [
{
name:"Tesla Model S",
price:80000,
speed:250,
mileage:600,
engine:"Electric Motor",
city:"San Francisco",
img:"https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-No-Background.png",
description:"The Tesla Model S is a luxury electric sedan powered by cutting-edge battery technology. It offers exceptional acceleration, a minimalist interior, and advanced autopilot features. Perfect for tech-savvy drivers who want zero-emission transportation without compromising on performance.",
details:"The Model S is the flagship of Tesla's lineup, featuring dual motors in high-performance variants, a 15-inch touchscreen display, and over-the-air software updates. The battery provides impressive range and charging infrastructure is growing worldwide."
},
{
name:"BMW M4",
price:70000,
speed:280,
mileage:350,
engine:"3.0L Twin-Turbo",
city:"Munich",
img:"bmw.png",
description:"The BMW M4 is a high-performance sports coupe combining German engineering with thrilling speed. Featuring a turbocharged engine and sophisticated handling, it delivers an exhilarating driving experience for enthusiasts.",
details:"With its carbon fiber components, adaptive suspension, and aggressive styling, the M4 represents BMW's commitment to performance. The interior combines luxury with tech, offering cutting-edge infotainment and comfort."
},
{
name:"Audi R8",
price:150000,
speed:330,
mileage:280,
engine:"5.2L V10",
city:"Ingolstadt",
img:"https://www.pngplay.com/wp-content/uploads/13/Audi-R8-2019-Transparent-File.png",
description:"The Audi R8 is a mid-engine supercar that blends Italian design with German precision. Its potent V10 engine and lightweight construction make it a thrilling track and street machine.",
details:"The R8 features Audi's Quattro all-wheel-drive system, ensuring superior traction. Available in both coupe and spyder variants, it's designed for drivers who demand both style and substance."
},
{
name:"Nissan Skyline GT-R",
price:150000,
speed:320,
mileage:300,
engine:"3.8L Twin-Turbo",
city:"Tokyo",
img:"nissangtr.png",
description:"The legendary Nissan Skyline GT-R is a Japanese icon known for its performance and cult following. With a legendary inline-6 turbo engine and advanced AWD system, it's a platform for tuning enthusiasts worldwide.",
details:"The GT-R has dominated racing for decades. Its advanced all-wheel-drive, multi-plate clutch, and electronically controlled suspension make it one of the most capable performance cars ever built."
},
{
name:"Porsche 911",
price:120000,
speed:310,
mileage:320,
engine:"3.8L Twin-Turbo",
city:"Stuttgart",
img:"https://www.pngplay.com/wp-content/uploads/15/911-Porsche-Transparent-Images.png",
description:"The iconic Porsche 911 is the ultimate sports car, combining timeless design with relentless performance. Its rear-engine layout and precision engineering deliver an unmatched driving experience.",
details:"Available in multiple variants from Carrera to Turbo S, the 911 offers options for every driving preference. The legendary handling characteristics and iconic design make it a collector's dream."
},
{
name:"Lamborghini Huracan",
price:260000,
speed:325,
mileage:250,
engine:"5.2L V10",
city:"Bologna",
img:"https://www.pngarts.com/files/3/Lamborghini-Transparent-Background-PNG.png",
description:"The Lamborghini Huracán is a fierce supercar combining Italian passion with cutting-edge technology. Its sharp angles and aggressive styling match its explosive performance capabilities.",
details:"Powered by a naturally aspirated V10, the Huracán delivers over 600 horsepower. Available as coupe or spyder, with all-wheel drive or rear-wheel drive configurations for maximum versatility."
},
{
name:"Ferrari 488",
price:330000,
speed:330,
mileage:240,
engine:"3.9L Twin-Turbo V8",
city:"Maranello",
img:"https://th.bing.com/th/id/R.d0840db016baad0f17eb21f8645f81ea?rik=iO3hnr9vRrpOIQ&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-red-ferrari-488-gtb-carcarferrarivehicletransport-961524661486wvwf1.png&ehk=0Vc%2brqhiVUBohD2YRgX8J3iMgq%2bcrniLQUglCr%2b6gkQ%3d&risl=&pid=ImgRaw&r=0",
description:"The Ferrari 488 is a mid-engine masterpiece representing Ferrari's racing heritage. Its turbocharged V8 unleashes incredible power while its aerodynamic design ensures stability at extreme speeds.",
details:"The 488 replaces the iconic 458, featuring turbocharging for more power from less displacement. Race-derived technology and luxury interiors combine for an uncompromising supercar experience."
},
{
name:"McLaren 720S",
price:300000,
speed:341,
mileage:260,
engine:"4.0L Twin-Turbo V8",
city:"Woking",
img:"https://dubaisportcarrentals.ae/wp-content/uploads/2022/09/McLaren-720s-Coupe-Black.png",
description:"The McLaren 720S is a British supercar pushing boundaries with its innovative design and blistering performance. Every element is engineered for speed and precision on both road and track.",
details:"Features McLaren's innovative dihedral doors and carbon fiber monocoque chassis. The 720S offers track-focused performance with surprising daily usability and stunning visibility."
},
{
name:"Bugatti Chiron",
price:3000000,
speed:304,
mileage:280,
engine:"8.0L Quad-Turbo W16",
city:"Molsheim",
img:"https://www.pngarts.com/files/8/Black-Bugatti-Chiron-PNG-Image-Background.png",
description:"The Bugatti Chiron is the ultimate hypershypercar, representing the pinnacle of automotive engineering and luxury. Its quad-turbocharged W16 engine produces over 1,500 horsepower.",
details:"With a top speed exceeding 260 mph, the Chiron is one of the fastest production cars ever built. Hand-assembled and limited to just 500 units worldwide, it embodies exclusivity and unmatched performance."
},
{
name:"Koenigsegg Agera",
price:2500000,
speed:273,
mileage:300,
engine:"5.0L Twin-Turbo V8",
city:"Ängelholm",
img:"https://www.pngplay.com/wp-content/uploads/13/Koenigsegg-Agera-R-No-Background.png",
description:"The Koenigsegg Agera is a Swedish hypercar pushing the boundaries of physics and engineering. It combines innovative technology with jaw-dropping performance and breathtaking design.",
details:"Known for its radical design and advanced aerodynamics, the Agera delivers extreme performance with a focus on lightweight construction. Each model is customized to the owner's specifications."
},
{
name:"Mercedes AMG GT",
price:120000,
speed:315,
mileage:310,
engine:"4.0L Twin-Turbo V8",
city:"Stuttgart",
img:"https://www.pngkey.com/png/full/141-1417751_2018-mercedes-benz-amg-gt-mercedes-benz-gts.png",
description:"The Mercedes-AMG GT is a grand touring sports car blending luxury with performance. Its elegant proportions hide a thoroughbred racer under the skin.",
details:"Available in multiple configurations from standard to the track-focused Black Series, the AMG GT offers options for different driving preferences while maintaining exceptional quality and style."
},
{
name:"Chevrolet Corvette",
price:70000,
speed:312,
mileage:320,
engine:"6.2L V8",
city:"Kentucky",
img:"https://freepngimg.com/download/corvette/33690-2-corvette-car-transparent-background.png",
description:"The Chevrolet Corvette is an American icon delivering supercar performance at an accessible price. Its lightweight construction and potent V8 make it a true performance bargain.",
details:"Featuring a mid-engine layout in recent generations, the Corvette offers handling to match supercars costing three times the price. It remains one of the best values in performance motoring."
},
{
name:"Ford Mustang GT",
price:55000,
speed:155,
mileage:350,
engine:"5.0L V8",
city:"Dearborn",
img:"ford.png",
description:"The Ford Mustang GT is an American muscle car delivering raw power and unmistakable style. Its iconic design and accessible performance make it a favorite among enthusiasts.",
details:"With its naturally aspirated V8, independent rear suspension, and aggressive styling, the Mustang GT continues the legendary Mustang tradition of American performance."
},
{
name:"Dodge Challenger",
price:60000,
speed:197,
mileage:340,
engine:"5.7L V8",
city:"Auburn Hills",
img:"https://www.pngplay.com/wp-content/uploads/13/Dodge-Challenger-Transparent-Free-PNG.png",
description:"The Dodge Challenger is a muscle car bringing retro styling and modern performance together. Its bold design and powerful engines make it a head-turner on any road.",
details:"Available with various engine options, the Challenger prioritizes straight-line power and classic American muscle car styling with modern technology."
},
{
name:"Jaguar F-Type",
price:80000,
speed:186,
mileage:330,
engine:"3.0L Supercharged V6",
city:"Coventry",
img:"https://th.bing.com/th/id/R.83d744eca364aaafe6fbeda07ff7e934?rik=UXhnPU%2b%2bH1V9Ww&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-jaguar-f-type-coupe-carcarvehicletransportjaguar-961524646356o2udu.png&ehk=18QQRQF8h3N7uOhDUGNE5%2bf8VjZygpH4ZXVwY%2ffd6Ao%3d&risl=&pid=ImgRaw&r=0",
description:"The Jaguar F-Type is a British sports car combining elegant design with thrilling performance. Its distinctive sound and responsive handling deliver driving pleasure.",
details:"With a focus on lightweight construction and driver engagement, the F-Type offers a purer driving experience. Available in coupe and convertible forms for maximum enjoyment."
},
{
name:"Aston Martin Vantage",
price:150000,
speed:195,
mileage:320,
engine:"5.2L Twin-Turbo V12",
city:"Gaydon",
img:"https://www.pngplay.com/wp-content/uploads/13/Aston-Martin-Vantage-PNG-Photo-Image.png",
description:"The Aston Martin Vantage is a British grand tourer combining sophistication with high performance. Its stunning design and handcrafted interior epitomize luxury sports cars.",
details:"Powered by a potent V12 engine, the Vantage delivers both power and elegance. It represents Aston Martin's commitment to creating cars that are as beautiful as they are fast."
}
];

// Load cars
function loadCars(){
let output="";
cars.slice(0, 4).forEach((c, index)=>{
output += `
<div class="card" onclick="viewCarDetail(${index})">
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
result.forEach((c, index)=>{
let carIndex = cars.indexOf(c);
output += `
<div class="card" onclick="viewCarDetail(${carIndex})">
<img src="${c.img}">
<h3>${c.name}</h3>
<p>Price: $${c.price}</p>
<p>Speed: ${c.speed} km/h</p>
</div>`;
});

document.getElementById("results").innerHTML = output;
}

// View car detail
function viewCarDetail(index){
localStorage.setItem('selectedCar', index);
window.location.href = 'car-detail.html';
}

// Compare
function compareCars(){
let c1 = document.getElementById("c1").value.toLowerCase();
let c2 = document.getElementById("c2").value.toLowerCase();

let car1 = cars.find(c => c.name.toLowerCase().includes(c1));
let car2 = cars.find(c => c.name.toLowerCase().includes(c2));

if(car1 && car2){
let better = car1.speed > car2.speed ? car1.name : car2.name;
document.getElementById("compareResult").innerHTML = 
`<strong>${car1.name}</strong> (${car1.speed} km/h) vs <strong>${car2.name}</strong> (${car2.speed} km/h)<br>
<span style="color:#00d4ff; margin-top:10px; display:block;">Winner: ${better}</span>`;
}else{
document.getElementById("compareResult").innerText =
"Enter valid car names (ex: Tesla, Ferrari, Lamborghini)";
}
}

// Scroll
function scrollToCars(){
window.scrollTo({top:700,behavior:"smooth"});
}

// Display total car count
function displayCarCount(){
document.getElementById("carCount").innerHTML = `<strong>Total Cars Available: ${cars.length}</strong>`;
}

loadCars();
displayCarCount();
