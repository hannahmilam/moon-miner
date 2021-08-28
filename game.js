// VARIABLES :)
let spaceRock = 0
let clickUpgrades = {
sword: {
  price: 5,
  quantity: 0,
  multiplier: 1
},
portalCutter: {
  price: 10,
  quantity: 0,
  multiplier: 5
}
};

let autoUpgrades = {
  plasmaGun: {
    price: 10,
    quantity: 0,
    multiplier: 10
  },
  explosive: {
    price: 25,
    quantity: 0,
    multiplier: 20
  }
  };

  // FUNCTIONS :)
function mine(){
  spaceRock++
   update()
}
// NOTE this section is buyUpgrades section. Need to make this re-usable after requirements are completed.
function buySword(){
  let price = clickUpgrades.sword.price;
  if(spaceRock >= price) {
  spaceRock -= price;
  clickUpgrades.sword.quantity++;
  clickUpgrades.sword.price += Math.floor(price * 0.30);
  }else {
  console.log("not enough space rock!")
  }
  document.getElementById("currentSword").innerText = clickUpgrades.sword.quantity.toString();
  document.getElementById('swordPrice').innerText = clickUpgrades.sword.price.toString();
  update();
  }

function buyPortalCutter(){
  let price = clickUpgrades.portalCutter.price;
  if(spaceRock >= price) {
  spaceRock -= price;
  clickUpgrades.portalCutter.quantity++;
  clickUpgrades.portalCutter.price += Math.floor(price * 0.30);
  }else if(spaceRock < price) {
  console.log("not enough space rock!")
  }
  document.getElementById("currentPortalCutter").innerText = clickUpgrades.portalCutter.quantity.toString();
  document.getElementById('portalCutterPrice').innerText = clickUpgrades.dynamite.price.toString();
  update();
  }

  function buyPlasmaGun(){
    let price = autoUpgrades.plasmaGun.price;
    if(spaceRock >= price) {
    spaceRock -= price;
    autoUpgrades.plasmaGun.quantity++;
    autoUpgrades.plasmaGun.price += Math.floor(price * 0.30);
    }else {
    console.log("not enough space rock!")
    }
    document.getElementById("currentPlasmaGun").innerText = autoUpgrades.plasmaGun.quantity.toString();
    document.getElementById('plasmaGunPrice').innerText = autoUpgrades.rover.price.toString();
    update();
    }

  function buyExplosive(){
   let price = autoUpgrades.explosive.price;
    if(spaceRock >= price) {
    spaceRock -= price;
    autoUpgrades.explosive.quantity++;
    autoUpgrades.explosive.price += Math.floor(price * 0.30);
    }else {
    console.log("not enough space rock!")
    }
    document.getElementById("currentExplosive").innerText = autoUpgrades.explosive.quantity.toString();
    document.getElementById('explosivePrice').innerText = autoUpgrades.explosive.price.toString();
    update();
     }
 //  NOTE end of buyUpgrades section
function update(){
  document.getElementById("currentSpaceRock").innerHTML = spaceRock.toString();
}

function collectAutoUpgrades() {
  let autoSpaceRockTotal = 0;
  for (let key in autoUpgrades) {
    autoSpaceRockTotal += autoUpgrades[key].quantity * autoUpgrades[key].multiplier;
  }
  spaceRock += autoSpaceRockTotal;
  document.getElementById("sps").innerText = autoSpaceRockTotal.toString();
  update();
}

function startInterval(collectionInterval) {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

startInterval()


