// VARIABLES :)
let spaceRock = 0
let clickUpgrades = {
sword: {
  price: 5,
  quantity: 0,
  multiplier: 5
},
portalCutter: {
  price: 10,
  quantity: 0,
  multiplier: 10
}
};

let autoUpgrades = {
  plasmaGun: {
    price: 25,
    quantity: 0,
    multiplier: 1
  },
  explosive: {
    price: 50,
    quantity: 0,
    multiplier: 2
  }
  };

  // FUNCTIONS :)
function mine(){
  spaceRock++
   update()
   for(let key in clickUpgrades){
    spaceRock +=  clickUpgrades[key].multiplier * clickUpgrades[key].quantity
    console.log(spaceRock)
    document.getElementById('currentSpaceRock').innerText = Math.round(spaceRock).toString()
    }

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
  Swal.fire({
    toast: true,
    text: 'NOT ENOUGH SPACE ROCK!!!! HINT: the aliens are hiding it on their spaceship',
    timer: 2000,
    timerProgressBar: true,
  })
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
  Swal.fire({
    toast: true,
    text: 'NOT ENOUGH SPACE ROCK!!!! HINT: the aliens are hiding it on their spaceship',
    timer: 2000,
    timerProgressBar: true,
  })
  }
  document.getElementById("currentPortalCutter").innerText = clickUpgrades.portalCutter.quantity.toString();
  document.getElementById('portalCutterPrice').innerText = clickUpgrades.portalCutter.price.toString();
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
    Swal.fire({
      toast: true,
      text: 'NOT ENOUGH SPACE ROCK!!!! HINT: the aliens are hiding it on their spaceship',
      timer: 2000,
      timerProgressBar: true,
    })
    }
    document.getElementById("currentPlasmaGun").innerText = autoUpgrades.plasmaGun.quantity.toString();
    document.getElementById('plasmaGunPrice').innerText = autoUpgrades.plasmaGun.price.toString();
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
    Swal.fire({
      toast: true,
      text: 'NOT ENOUGH SPACE ROCK!!!! HINT: the aliens are hiding it on their spaceship',
      timer: 2000,
      timerProgressBar: true,
    })
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


