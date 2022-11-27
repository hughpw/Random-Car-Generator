const arrOfRand = [1];

imgFunc = () => {
  let randomNum = Math.floor(Math.random() * 31) + 1;
  arrOfRand.push(randomNum);
  if (randomNum === arrOfRand.length - 1) {
    let newrandomNum = Math.floor(Math.random() * 31) + 1;
    arrOfRand.push(newrandomNum);
    let newnewImg = `./images/car${newrandomNum}.jpg`;
    document.querySelector("img").src = newnewImg;
  } else {
  let newImg = `./images/car${randomNum}.jpg`;
  document.querySelector("img").src = newImg;
  }
}

prevImg = () => {
  let lastImgNum = arrOfRand[arrOfRand.length-2];
  arrOfRand.pop();
  // console.log(arrOfRand);
  let lastImg = `./images/car${lastImgNum}.jpg`;
  document.querySelector("img").src = lastImg;
  // let imgNum =   `This is a ${car[lastImgNum].brand} ${car[lastImgNum].model}`;;
  // document.querySelector(".car").innerHTML = imgNum;
}

const car = [
  {brand: "", model: "", colour: "", weight: "", bhp: "", zerosixty: ""},
  {brand: "BMW", model: "M2 Competition", colour: "Hockenheim Silver", weight: 1625, hp: 410, zerosixty: 4.4, topspeed: 155, drivetrain: "RWD"},
  {brand: "Lamborghini", model: "Huracán Performante Spyder", colour: "Rosso Mars", weight: 1382, hp: 631, zerosixty: 2.9, topspeed: 202, drivetrain: "AWD"},
  {brand: "Ferrari", model: "458 Spider", colour: "Rosso Corsa", weight: 1535, hp: 562, zerosixty: 3.3, topspeed: 199, drivetrain: "RWD"},
  {brand: "	Porsche", model: "911 Turbo S", colour: "Silver Metallic", weight: 1600, hp: 640, zerosixty: 2.2, topspeed: 205, drivetrain: "AWD"},
  {brand: "Lamborghini", model: "Urus Pearl Capsule", colour: "green", weight: 2200, hp: 640, zerosixty: 3.6, topspeed: 201, drivetrain: "AWD"},
  {brand: "Mercedes", model: "AMG A45 S", colour: "Mountain Grey Magno", weight: 1550, hp: 421, zerosixty: 3.9, topspeed: 168, drivetrain: "AWD"},
  {brand: "Hennessey", model: "Venom F5", colour: "blue(#002E6F)", weight: 1360, hp: 1817, zerosixty: 2.6, topspeed: 300, drivetrain: "RWD"},
  {brand: "Lamborghini", model: "Aventador LP 780-4 Ultimae", colour: "Grigio Artis", weight: 1550, hp: 780, zerosixty: 2.9, topspeed: 220, drivetrain: "AWD"},
  {brand: "BMW", model: "M3 Touring", colour: "Hockenheim Silver", weight: 1865, hp: 510, zerosixty: 4, topspeed: 155, drivetrain: "AWD"},
  {brand: "Bugatti", model: "Chiron Pur Sport", colour: "exposed blue carbon fiber with silver", weight: 1945, hp: 1479, zerosixty: 2.2, topspeed: 218, drivetrain: "AWD"},
  {brand: "Lotus", model: "Emira GT4", colour: "Optic Yellow", weight: 1320, hp: 400, zerosixty: 4, topspeed: 180, drivetrain: "RWD"},
  {brand: "Mercedes", model: "AMG GT Roadster", colour: "Mountain Grey Magno", weight: 1660, hp: 523, zerosixty: 3.7, topspeed: 196, drivetrain: "RWD"},
  {brand: "Chevrolet", model: "Corvette Z06", colour: "Lime Green", weight: 1558, hp: 670, zerosixty: 2.6, topspeed: 208, drivetrain: "RWD"},
  {brand: "Vauxhall", model: "Corsa", colour: "red", weight: 1066, hp: 89, zerosixty: 12.5, topspeed: 109, drivetrain: "FWD"},
  {brand: "VW", model: "Golf GTI Clubsport", colour: "Dolphin Grey Metallic ", weight: 1461, hp: 297, zerosixty: 5.3, topspeed: 169, drivetrain: "FWD"},
  {brand: "Audi", model: "A1 Sportback S line", colour: "Chronos Grey Metallic", weight: 1090, hp: 147, zerosixty: 7.5, topspeed: 137, drivetrain: "AWD"},
  {brand: "Tesla", model: "Model 3", colour: "Blue Metallic", weight: 1751, hp: 506, zerosixty: 3.1, topspeed: 162, drivetrain: "AWD"},
  {brand: "Tesla", model: "Model S Plaid", colour: "Blue Metallic", weight: 2069, hp: 1020, zerosixty: 1.99, topspeed: 200, drivetrain: "AWD"},
  {brand: "Koenigsegg", model: "Regera", colour: "Candy Apple Red", weight: 1588, hp: 1479, zerosixty: 2.6, topspeed: 250, drivetrain: "RWD"},
  {brand: "Audi", model: "R8 V10", colour: "Green Hell", weight: 1590, hp: 610, zerosixty: 3.1, topspeed: 206, drivetrain: "AWD"},
  {brand: "Lamborghini", model: "Huracán Performante", colour: "Arancio Borealis", weight: 1382, hp: 631, zerosixty: 2.9, topspeed: 202, drivetrain: "AWD"},
  {brand: "Ferrari", model: "SF90 Stradale", colour: "Blu Elettrico", weight: 1675, hp: 986, zerosixty: 2.5, topspeed: 211, drivetrain: "AWD"},
  {brand: "BMW", model: "M4 Convertible", colour: "Frozen Tanzanite Blue", weight: 1825, hp: 425, zerosixty: 4.3, topspeed: 155, drivetrain: "RWD"},
  {brand: "BMW", model: "M8 Convertible", colour: "Urban Green", weight: 2025, hp: 617, zerosixty: 3.0, topspeed: 192, drivetrain: "AWD"},
  {brand: "BMW", model: "M140i", colour: "Anthracite", weight: 1550, hp: 340, zerosixty: 4.5, topspeed: 155, drivetrain: "RWD"},
  {brand: "Bentley", model: "GT Speed", colour: "Ion Blue", weight: 1628, hp: 528, zerosixty: 3.6, topspeed: 190, drivetrain: "RWD"},
  {brand: "Brabus for", model: "Porsche Taycan Turbo S", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "Ferrari", model: "458 Speciale Aperta", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "Ferrari", model: "Enzo", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "BMW", model: "M5 Competition", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "Ford", model: "GT", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "", model: "", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
  {brand: "", model: "", colour: "", weight: "", hp: "", zerosixty: "", topspeed: "", drivetrain: ""},
]

descFunc = () => {
  let currImgNum = arrOfRand[arrOfRand.length-1];
  let currCarName = `${car[currImgNum].brand} ${car[currImgNum].model}`;
  let wheelDrive = "Delivered to the rear wheels is"
  if (car[currImgNum].drivetrain.includes("AWD")) {
    wheelDrive = "Delivered to each of the four wheels is" 
  } else if (car[currImgNum].drivetrain.includes("FWD")) {
    wheelDrive = "Delivered to the front wheels is"
  } else {
    wheelDrive = "Delivered to the rear wheels is"
  }
  let currCarDesc = `Finished in ${car[currImgNum].colour}. ${wheelDrive} ${car[currImgNum].hp} horsepower. It can reach ${car[currImgNum].topspeed} mph at its top speed and accelerates from 0 to 60 mph in ${car[currImgNum].zerosixty} seconds.`;
  document.querySelector("h3").innerHTML = currCarName;
  document.querySelector(".desc").innerHTML = currCarDesc;
}

if (arrOfRand.length - 1 == 16) {
  document.querySelector("img").style.objectPosition = "0 150%";
}

document.querySelector("img").addEventListener("click", imgFunc);
document.querySelector("img").addEventListener("click", descFunc);
document.querySelector("img").addEventListener("mouseover", descFunc);
document.querySelector("#randCar").addEventListener("click", imgFunc);
// console.log(arrOfRand);
document.querySelector("#prevCar").addEventListener("click", prevImg);
document.querySelector("#prevCar").addEventListener("click", descFunc);
// console.log(`This is image ${randomNum}`);

// more info could have and i in the corner of the image
// could have an array of objects and index corresponding with 
// car number in object brand, model, colour, retail price, estimated current value new
// when hover over image form display none
// figure out whats going on with buttons works when click on image
