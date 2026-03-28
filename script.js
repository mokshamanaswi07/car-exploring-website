const cars = [
  {
    name: "Tesla Model S",
    price: 80000,
    speed: 250,
    mileage: 600,
    engine: "Electric Motor",
    city: "San Francisco",
    img: "https://www.pngall.com/wp-content/uploads/11/White-Tesla-Model-S-No-Background.png",
    description: "The Tesla Model S is a luxury electric sedan powered by cutting-edge battery technology. It offers exceptional acceleration, a minimalist interior, and advanced autopilot features. Perfect for tech-savvy drivers who want zero-emission transportation without compromising on performance.",
    details: "The Model S is the flagship of Tesla's lineup, featuring dual motors in high-performance variants, a 15-inch touchscreen display, and over-the-air software updates. The battery provides impressive range and charging infrastructure is growing worldwide."
  },

  {
    name: "Audi R8",
    price: 150000,
    speed: 330,
    mileage: 280,
    engine: "5.2L V10",
    city: "Ingolstadt",
    img: "https://www.pngplay.com/wp-content/uploads/13/Audi-R8-2019-Transparent-File.png",
    description: "The Audi R8 is a mid-engine supercar that blends Italian design with German precision. Its potent V10 engine and lightweight construction make it a thrilling track and street machine.",
    details: "The R8 features Audi's Quattro all-wheel-drive system, ensuring superior traction. Available in both coupe and spyder variants, it's designed for drivers who demand both style and substance."
  },

  {
    name: "Porsche 911",
    price: 120000,
    speed: 310,
    mileage: 320,
    engine: "3.8L Twin-Turbo",
    city: "Stuttgart",
    img: "https://www.pngplay.com/wp-content/uploads/15/911-Porsche-Transparent-Images.png",
    description: "The iconic Porsche 911 is the ultimate sports car, combining timeless design with relentless performance. Its rear-engine layout and precision engineering deliver an unmatched driving experience.",
    details: "Available in multiple variants from Carrera to Turbo S, the 911 offers options for every driving preference. The legendary handling characteristics and iconic design make it a collector's dream."
  },
  {
    name: "Lamborghini Huracan",
    price: 260000,
    speed: 325,
    mileage: 250,
    engine: "5.2L V10",
    city: "Bologna",
    img: "https://www.pngarts.com/files/3/Lamborghini-Transparent-Background-PNG.png",
    description: "The Lamborghini Huracán is a fierce supercar combining Italian passion with cutting-edge technology. Its sharp angles and aggressive styling match its explosive performance capabilities.",
    details: "Powered by a naturally aspirated V10, the Huracán delivers over 600 horsepower. Available as coupe or spyder, with all-wheel drive or rear-wheel drive configurations for maximum versatility."
  },
  {
    name: "Ferrari 488",
    price: 330000,
    speed: 330,
    mileage: 240,
    engine: "3.9L Twin-Turbo V8",
    city: "Maranello",
    img: "https://th.bing.com/th/id/R.d0840db016baad0f17eb21f8645f81ea?rik=iO3hnr9vRrpOIQ&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-red-ferrari-488-gtb-carcarferrarivehicletransport-961524661486wvwf1.png&ehk=0Vc%2brqhiVUBohD2YRgX8J3iMgq%2bcrniLQUglCr%2b6gkQ%3d&risl=&pid=ImgRaw&r=0",
    description: "The Ferrari 488 is a mid-engine masterpiece representing Ferrari's racing heritage. Its turbocharged V8 unleashes incredible power while its aerodynamic design ensures stability at extreme speeds.",
    details: "The 488 replaces the iconic 458, featuring turbocharging for more power from less displacement. Race-derived technology and luxury interiors combine for an uncompromising supercar experience."
  },
  {
    name: "McLaren 720S",
    price: 300000,
    speed: 341,
    mileage: 260,
    engine: "4.0L Twin-Turbo V8",
    city: "Woking",
    img: "https://dubaisportcarrentals.ae/wp-content/uploads/2022/09/McLaren-720s-Coupe-Black.png",
    description: "The McLaren 720S is a British supercar pushing boundaries with its innovative design and blistering performance. Every element is engineered for speed and precision on both road and track.",
    details: "Features McLaren's innovative dihedral doors and carbon fiber monocoque chassis. The 720S offers track-focused performance with surprising daily usability and stunning visibility."
  },
  {
    name: "Bugatti Chiron",
    price: 3000000,
    speed: 304,
    mileage: 280,
    engine: "8.0L Quad-Turbo W16",
    city: "Molsheim",
    img: "https://www.pngarts.com/files/8/Black-Bugatti-Chiron-PNG-Image-Background.png",
    description: "The Bugatti Chiron is the pinnacle of luxury hypercar engineering. Its quad-turbocharged W16 engine produces extraordinary power and breathtaking road presence.",
    details: "With a top speed exceeding 260 mph, the Chiron is one of the fastest production cars ever built. Hand-assembled and extremely exclusive, it symbolizes ultimate automotive prestige."
  },
  {
    name: "Koenigsegg Agera",
    price: 2500000,
    speed: 273,
    mileage: 300,
    engine: "5.0L Twin-Turbo V8",
    city: "Ängelholm",
    img: "https://www.pngplay.com/wp-content/uploads/13/Koenigsegg-Agera-R-No-Background.png",
    description: "The Koenigsegg Agera is a Swedish hypercar pushing the boundaries of physics and engineering. It combines innovative technology with breathtaking performance.",
    details: "Known for its radical design and advanced aerodynamics, the Agera delivers extreme performance with a focus on lightweight construction. Each model is customized to its owner."
  },
  {
    name: "Mercedes AMG GT",
    price: 120000,
    speed: 315,
    mileage: 310,
    engine: "4.0L Twin-Turbo V8",
    city: "Stuttgart",
    img: "https://www.pngkey.com/png/full/141-1417751_2018-mercedes-benz-amg-gt-mercedes-benz-gts.png",
    description: "The Mercedes-AMG GT is a grand touring sports car blending luxury with performance. Its elegant proportions hide a true racer underneath.",
    details: "Available in multiple configurations from standard to Black Series, the AMG GT gives thrilling speed while maintaining premium refinement."
  },
  {
    name: "Chevrolet Corvette",
    price: 70000,
    speed: 312,
    mileage: 320,
    engine: "6.2L V8",
    city: "Kentucky",
    img: "https://freepngimg.com/download/corvette/33690-2-corvette-car-transparent-background.png",
    description: "The Chevrolet Corvette is an American icon delivering supercar-like performance at an accessible price. Its bold style and strong V8 make it a favorite.",
    details: "Featuring a mid-engine layout in recent generations, the Corvette offers performance that rivals much more expensive competitors."
  },
  {
    name: "Mini Cooper S",
    price: 45000,
    speed: 146,
    mileage: 410,
    engine: "2.0L 4-Cylinder Turbo",
    city: "Oxford",
    img: "https://www.pngplay.com/wp-content/uploads/13/Mini-Cooper-S-Transparent-PNG.png",
    description: "The Mini Cooper S is a premium compact hatchback renowned for its 'go-kart' handling and iconic British styling.",
    details: "This model features a 201 hp turbocharged engine, a minimalist 9.4-inch OLED display, and high-quality recycled interior materials."
  },
  {
    name: "Kia EV6",
    price: 52000,
    speed: 116,
    mileage: 339,
    engine: "Electric (77.4 kWh Battery)",
    city: "Seoul",
    img: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev6/ev6-pe-my25/digital-discover/kia-ev6-pe-baseline-34front.png",
    description: "The Kia EV6 is a fully electric crossover that blends futuristic design with ultra-fast 800V charging capabilities.",
    details: "The AWD GT-Line variant offers 320 hp, a 0-60 mph time of 5.1 seconds, and a spacious 'V2L' enabled cabin that can power external devices."
  },

  {
    name: "Bentley Continental GT Speed",
    price: 310000,
    speed: 208,
    mileage: 450,
    engine: "4.0L V8 Hybrid",
    city: "Crewe",
    img: "https://www.pngplay.com/wp-content/uploads/15/Continental-Gt-Bentley-PNG-Clipart-Background.png",
    description: "The Bentley Continental GT Speed is the ultimate grand tourer, offering a perfect balance of handcrafted luxury and supercar performance.",
    details: "The 2026 'Ultra Performance Hybrid' powertrain delivers 771 hp and 738 lb-ft of torque, enabling a 0-60 mph sprint in just 3.1 seconds."
  },
  {
    name: "Dodge Challenger",
    price: 60000,
    speed: 197,
    mileage: 340,
    engine: "5.7L V8",
    city: "Auburn Hills",
    img: "https://www.pngplay.com/wp-content/uploads/13/Dodge-Challenger-Transparent-Free-PNG.png",
    description: "The Dodge Challenger combines retro muscle-car styling with modern performance and powerful engine options.",
    details: "The Challenger focuses on straight-line speed, bold looks, and a classic American driving feel with updated technology."
  },
  {
    name: "Jaguar F-Type",
    price: 80000,
    speed: 186,
    mileage: 330,
    engine: "3.0L Supercharged V6",
    city: "Coventry",
    img: "https://th.bing.com/th/id/R.83d744eca364aaafe6fbeda07ff7e934?rik=UXhnPU%2b%2bH1V9Ww&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-black-jaguar-f-type-coupe-carcarvehicletransportjaguar-961524646356o2udu.png&ehk=18QQRQF8h3N7uOhDUGNE5%2bf8VjZygpH4ZXVwY%2ffd6Ao%3d&risl=&pid=ImgRaw&r=0",
    description: "The Jaguar F-Type is a British sports car combining elegant design with exciting performance and a distinctive exhaust note.",
    details: "With responsive handling and stylish coupe or convertible designs, the F-Type offers strong emotional appeal and strong road presence."
  },
  {
    name: "Aston Martin Vantage",
    price: 150000,
    speed: 195,
    mileage: 320,
    engine: "5.2L Twin-Turbo V12",
    city: "Gaydon",
    img: "https://www.pngplay.com/wp-content/uploads/13/Aston-Martin-Vantage-PNG-Photo-Image.png",
    description: "The Aston Martin Vantage is a sophisticated British grand tourer with stunning looks, handcrafted luxury, and serious performance.",
    details: "Powered by a potent engine and wrapped in beautiful design, the Vantage is a blend of elegance, prestige, and driving thrill."
  }
];

const defaultCars = ["Tesla Model S", "Audi R8", "Porsche 911"];

const carList = document.getElementById("carList");
const favoriteList = document.getElementById("favoriteList");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const priceFilter = document.getElementById("priceFilter");
const carCount = document.getElementById("carCount");
const favoriteCount = document.getElementById("favoriteCount");
const compareBtn = document.getElementById("compareBtn");
const compareResult = document.getElementById("compareResult");
const exploreBtn = document.getElementById("exploreBtn");
const favoritesBtn = document.getElementById("favoritesBtn");

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

function getFavorites() {
  return JSON.parse(localStorage.getItem("favoriteCars")) || [];
}

function setFavorites(favorites) {
  localStorage.setItem("favoriteCars", JSON.stringify(favorites));
}

function isFavorite(carName) {
  return getFavorites().includes(carName);
}

function toggleFavorite(carName) {
  let favorites = getFavorites();

  if (favorites.includes(carName)) {
    favorites = favorites.filter(name => name !== carName);
  } else {
    favorites.push(carName);
  }

  setFavorites(favorites);
  renderCurrentCars();
  renderFavorites();
  updateStats();
}

function viewCarDetail(index) {
  localStorage.setItem("selectedCar", index);
  window.location.href = "car-detail.html";
}

function createCarCard(car, index) {
  return `
    <div class="card">
      <div class="card-image-wrap">
        <img src="${car.img}" alt="${car.name}">
        <button class="favorite-btn ${isFavorite(car.name) ? "active" : ""}" onclick="toggleFavorite('${car.name.replace(/'/g, "\\'")}')">
          ${isFavorite(car.name) ? "♥" : "♡"}
        </button>
      </div>

      <div class="card-content">
        <h3>${car.name}</h3>
        <p>${car.description.slice(0, 110)}...</p>

        <div class="card-specs">
          <span>💰 $${car.price.toLocaleString()}</span>
          <span>⚡ ${car.speed} km/h</span>
          <span>⛽ ${car.mileage} km/L</span>
          <span>📍 ${car.city}</span>
        </div>

        <div class="card-actions">
          <button class="view-btn" onclick="viewCarDetail(${index})">View Details</button>
          <button class="ghost-btn" onclick="fillCompare('${car.name.replace(/'/g, "\\'")}')">Compare</button>
        </div>
      </div>
    </div>
  `;
}

function getFilteredCars() {
  const searchValue = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const sortValue = sortSelect ? sortSelect.value : "default";
  const priceValue = priceFilter ? priceFilter.value : "all";

  let filtered = [...cars];

  if (searchValue !== "") {
    filtered = filtered.filter(car =>
      car.name.toLowerCase().startsWith(searchValue)
    );
  }

  if (priceValue !== "all") {
    filtered = filtered.filter(car => car.price <= Number(priceValue));
  }

  switch (sortValue) {
    case "priceLow":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "priceHigh":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "speedHigh":
      filtered.sort((a, b) => b.speed - a.speed);
      break;
    case "nameAZ":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return filtered;
}

function renderCards(list) {
  if (!carList) return;

  if (list.length === 0) {
    carList.innerHTML = `<div class="empty-message">No cars found. Try a different search.</div>`;
    if (carCount) {
      carCount.textContent = "0 Cars Found";
    }
    return;
  }

  carList.innerHTML = list
    .map(car => createCarCard(car, cars.indexOf(car)))
    .join("");

  if (carCount) {
    carCount.textContent = `${list.length} Cars Found`;
  }
}

function renderDefaultCars() {
  const initialCars = cars.filter(car => defaultCars.includes(car.name));
  renderCards(initialCars);

  if (carCount) {
    carCount.textContent = "Showing 3 Cars";
  }
}

function renderCurrentCars() {
  const searchValue = searchInput ? searchInput.value.trim() : "";
  const sortValue = sortSelect ? sortSelect.value : "default";
  const priceValue = priceFilter ? priceFilter.value : "all";

  if (searchValue === "" && sortValue === "default" && priceValue === "all") {
    renderDefaultCars();
    return;
  }

  const filteredCars = getFilteredCars();
  renderCards(filteredCars);
}

function renderFavorites() {
  if (!favoriteList) return;

  const favorites = getFavorites();
  const favoriteCars = cars.filter(car => favorites.includes(car.name));

  if (favoriteCars.length === 0) {
    favoriteList.innerHTML = `<div class="empty-message">No favorite cars yet. Tap the heart icon to save some.</div>`;
    return;
  }

  favoriteList.innerHTML = favoriteCars
    .map(car => createCarCard(car, cars.indexOf(car)))
    .join("");
}

function updateStats() {
  if (favoriteCount) {
    favoriteCount.textContent = `${getFavorites().length} Favorites Saved`;
  }
}

function fillCompare(carName) {
  const input1 = document.getElementById("c1");
  const input2 = document.getElementById("c2");

  if (!input1 || !input2) return;

  if (!input1.value.trim()) {
    input1.value = carName;
  } else if (!input2.value.trim()) {
    input2.value = carName;
  } else {
    input1.value = carName;
  }

  const compareSection = document.getElementById("compare");
  if (compareSection) {
    compareSection.scrollIntoView({ behavior: "smooth" });
  }
}

function findCarByInput(value) {
  return cars.find(car => car.name.toLowerCase().includes(value.toLowerCase().trim()));
}

function compareCars() {
  if (!compareResult) return;

  const c1 = document.getElementById("c1").value;
  const c2 = document.getElementById("c2").value;

  const car1 = findCarByInput(c1);
  const car2 = findCarByInput(c2);

  if (!car1 || !car2) {
    compareResult.innerHTML = `<div class="empty-message">Please enter two valid car names.</div>`;
    return;
  }

  const betterSpeed = car1.speed > car2.speed ? car1.name : car2.name;
  const betterMileage = car1.mileage > car2.mileage ? car1.name : car2.name;
  const cheaper = car1.price < car2.price ? car1.name : car2.name;

  compareResult.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Feature</th>
          <th>${car1.name}</th>
          <th>${car2.name}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Price</td>
          <td>$${car1.price.toLocaleString()}</td>
          <td>$${car2.price.toLocaleString()}</td>
        </tr>
        <tr>
          <td>Top Speed</td>
          <td>${car1.speed} km/h</td>
          <td>${car2.speed} km/h</td>
        </tr>
        <tr>
          <td>Mileage</td>
          <td>${car1.mileage} km/L</td>
          <td>${car2.mileage} km/L</td>
        </tr>
        <tr>
          <td>Engine</td>
          <td>${car1.engine}</td>
          <td>${car2.engine}</td>
        </tr>
        <tr>
          <td>City</td>
          <td>${car1.city}</td>
          <td>${car2.city}</td>
        </tr>
        <tr>
          <td>Best Speed</td>
          <td colspan="2" class="compare-highlight">${betterSpeed}</td>
        </tr>
        <tr>
          <td>Best Mileage</td>
          <td colspan="2" class="compare-highlight">${betterMileage}</td>
        </tr>
        <tr>
          <td>More Affordable</td>
          <td colspan="2" class="compare-highlight">${cheaper}</td>
        </tr>
      </tbody>
    </table>
  `;
}

function goToCars() {
  const carsSection = document.getElementById("cars");
  if (carsSection) {
    carsSection.scrollIntoView({ behavior: "smooth" });
  }
}

function goToFavorites() {
  const favoritesSection = document.getElementById("favorites");
  if (favoritesSection) {
    favoritesSection.scrollIntoView({ behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
  renderDefaultCars();
  renderFavorites();
  updateStats();
});

if (searchInput) searchInput.addEventListener("input", renderCurrentCars);
if (sortSelect) sortSelect.addEventListener("change", renderCurrentCars);
if (priceFilter) priceFilter.addEventListener("change", renderCurrentCars);
if (compareBtn) compareBtn.addEventListener("click", compareCars);
if (exploreBtn) exploreBtn.addEventListener("click", goToCars);
if (favoritesBtn) favoritesBtn.addEventListener("click", goToFavorites);
