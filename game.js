// VARIABLES :)
let cheese = 0
let clickUpgrades = {
shovel: {
  price: 100,
  quantity: 0,
  multiplier: 1
},
dynamite: {
  price: 500,
  quantity: 0,
  multiplier: 5
}
};

let autoUpgrades = {
  rover: {
    price: 250,
    quantity: 0,
    multiplier: 10
  },
  alien: {
    price: 500,
    quantity: 0,
    multiplier: 20
  }
  };

  // FUNCTIONS :)
function mine(){
  let currentCheese = cheese++
   console.log(cheese)
   update()
   return (currentCheese)
}


function drawClickUpgrades(){
  for(let key in clickUpgrades){
    console.log(key)
    let item = clickUpgrades[key]
  }
  
}

function drawAutoUpgrades(){
  for(let key in autoUpgrades){
    console.log(key)
    let item = autoUpgrades[key]
  }
}

function update(){
  document.getElementById("current-cheese").innerHTML = cheese
  document.getElementById("current-shovel").innerHTML = clickUpgrades.shovel.quantity
  document.getElementById("current-dynamite").innerHTML = clickUpgrades.dynamite.quantity
  document.getElementById("current-rover").innerHTML = autoUpgrades.rover.quantity
  document.getElementById("current-alien").innerHTML = autoUpgrades.alien.quantity
}

function startInterval(){
  collectionInterval = setInterval(collectAutoUpgrades, 3000);
}

function collectAutoUpgrades(){

}