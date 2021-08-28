// VARIABLES :)
let spaceGem = 0;
let collectionInterval = 0;

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
  spaceGem++
   update()
   for(let key in clickUpgrades){
    spaceGem +=  clickUpgrades[key].multiplier * clickUpgrades[key].quantity
    console.log(spaceGem)
    document.getElementById('currentSpaceGem').innerText = Math.round(spaceGem).toString()
    }
}
// TODO this section is buyUpgrades section. Need to make this re-usable after requirements are completed.
function buySword(){
  let price = clickUpgrades.sword.price;
  if(spaceGem >= price) {
  spaceGem -= price;
  clickUpgrades.sword.quantity++;
  clickUpgrades.sword.price += Math.floor(price * 0.30);
  }else {
  console.log("not enough space gems!")
  Swal.fire({
    toast: true,
    text: 'NOT ENOUGH SPACE GEMS!!!! HINT: the aliens are hiding it on their spaceship',
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
  if(spaceGem >= price) {
  spaceGem -= price;
  clickUpgrades.portalCutter.quantity++;
  clickUpgrades.portalCutter.price += Math.floor(price * 0.30);
  }else if(spaceGem < price) {
  console.log("not enough space gems!")
  Swal.fire({
    toast: true,
    text: 'NOT ENOUGH SPACE GEMS!!!! HINT: the aliens are hiding it on their spaceship',
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
    if(spaceGem >= price) {
    spaceGem -= price;
    autoUpgrades.plasmaGun.quantity++;
    autoUpgrades.plasmaGun.price += Math.floor(price * 0.30);
    }else {
    console.log("not enough space gems!")
    Swal.fire({
      toast: true,
      text: 'NOT ENOUGH SPACE GEMS!!!! HINT: the aliens are hiding it on their spaceship',
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
    if(spaceGem >= price) {
    spaceGem -= price;
    autoUpgrades.explosive.quantity++;
    autoUpgrades.explosive.price += Math.floor(price * 0.30);
    }else {
    console.log("not enough space gems!")
    Swal.fire({
      toast: true,
      text: 'NOT ENOUGH SPACE GEMS!!!! HINT: the aliens are hiding it on their spaceship',
      timer: 2000,
      timerProgressBar: true,
    })
    }
    document.getElementById("currentExplosive").innerText = autoUpgrades.explosive.quantity.toString();
    document.getElementById('explosivePrice').innerText = autoUpgrades.explosive.price.toString();
    update();
     }

function update(){
  document.getElementById("currentSpaceGem").innerHTML = spaceGem.toString();
}

function collectAutoUpgrades() {
  let autoSpaceGemTotal = 0;
  for (let key in autoUpgrades) {
    autoSpaceGemTotal += autoUpgrades[key].quantity * autoUpgrades[key].multiplier;
  }
  spaceGem += autoSpaceGemTotal;
  document.getElementById("sps").innerText = autoSpaceGemTotal.toString();
  update();
}

function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

startInterval()


