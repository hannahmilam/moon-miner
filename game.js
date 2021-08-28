// VARIABLES :)
let cheese = 0
let clickUpgrades = {
shovel: {
  price: 5,
  quantity: 0,
  multiplier: 1
},
dynamite: {
  price: 10,
  quantity: 0,
  multiplier: 5
}
};

let autoUpgrades = {
  rover: {
    price: 10,
    quantity: 0,
    multiplier: 10
  },
  alien: {
    price: 25,
    quantity: 0,
    multiplier: 20
  }
  };

  // FUNCTIONS :)
function mine(){
   cheese++
   update()
}
function buyShovel(){
  let price = clickUpgrades.shovel.price;
  if(cheese >= price) {
  cheese -= price;
  clickUpgrades.shovel.quantity++;
  clickUpgrades.shovel.price += Math.floor(price * 0.10);
  }else {
  console.log("not enough cheese!")
  }
  document.getElementById("currentShovel").innerText = clickUpgrades.shovel.quantity.toString();
  document.getElementById('shovelPrice').innerText = clickUpgrades.shovel.price.toString();
  update();
  }

function buyDynamite(){
  let price = clickUpgrades.dynamite.price;
  if(cheese >= price) {
  cheese -= price;
  clickUpgrades.dynamite.quantity++;
  clickUpgrades.dynamite.price += Math.floor(price * 0.10);
  }else if(cheese < price) {
  return alert("try to mine for more cheese!")
  }
  document.getElementById("currentDynamite").innerText = clickUpgrades.dynamite.quantity.toString();
  document.getElementById('dynamitePrice').innerText = clickUpgrades.dynamite.price.toString();
  update();
  }

  function buyRover(){
    let price = autoUpgrades.rover.price;
    if(cheese >= price) {
    cheese -= price;
    autoUpgrades.rover.quantity++;
    autoUpgrades.rover.price += Math.floor(price * 0.10);
    }else {
    console.log("not enough cheese!")
    }
    document.getElementById("currentRover").innerText = autoUpgrades.rover.quantity.toString();
    document.getElementById('roverPrice').innerText = autoUpgrades.rover.price.toString();
    update();
    }

  function buyAlien(){
   let price = autoUpgrades.alien.price;
    if(cheese >= price) {
    cheese -= price;
    autoUpgrades.alien.quantity++;
    autoUpgrades.alien.price += Math.floor(price * 0.10);
    }else {
    console.log("not enough cheese!")
    }
    document.getElementById("currentAlien").innerText = autoUpgrades.alien.quantity.toString();
    document.getElementById('alienPrice').innerText = autoUpgrades.alien.price.toString();
    update();
     }

function update(){
  document.getElementById("currentCheese").innerHTML = cheese.toString();
}

