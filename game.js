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
  let currentCheese = cheese++
   console.log(cheese)
   update()
}
function buyShovel(){
  let shovel = clickUpgrades.shovel.quantity ++
  console.log(shovel)
  update()
}
function buyDynamite(){
  let dynamite = clickUpgrades.dynamite.quantity ++
  console.log(dynamite)
  update()
}
function buyRover(){
  let rover = autoUpgrades.rover.quantity ++
  console.log(rover)
  update()
}
function buyAlien(){
  let alien = autoUpgrades.alien.quantity ++
  console.log(alien)
  update()
}

function update(){
  document.getElementById("current-cheese").innerHTML = cheese
  document.getElementById("current-shovel").innerHTML = clickUpgrades.shovel.quantity
  document.getElementById("current-dynamite").innerHTML = clickUpgrades.dynamite.quantity
  document.getElementById("current-rover").innerHTML = autoUpgrades.rover.quantity
  document.getElementById("current-alien").innerHTML = autoUpgrades.alien.quantity

}
function startInterval() {
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

startInterval()