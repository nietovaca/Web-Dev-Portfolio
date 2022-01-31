const prompt = require('prompt-sync')();

//make player object
const playerShip = {
  name: 'USS Schwarzenegger',
  hull: 5,
  firepower: 5,
  accuracy: .7
}
//make enemyShip object
const enemyShip = {
  eName: ['eShip1', 'eShip2', 'eShip3', 'eShip4', 'eship5', 'eShip6'],
  eHull: [3, 4, 5, 6],
  eFirepower: [2,3,4],
  eAccuracy: [.6, .7, .8]
}
//global variables
let eShipName="";
let eHealth="";
let eFPower="";
let eAcc="";
let replay ="";
let lives = 3;

//battle function
const battle =() => {
 // checking is if player has lives left
  if (lives <0){
    process.exit()
  }
  // console.log(`player health b4 battle is ${playerShip.hull}`);
  // console.log(`enemy health b4 battle is ${eHealth}`);
  //make sure player and enemy has health b4 battling
  if (playerShip.hull>0 && enemyShip.eHull[eHealth]>0  ) {
    // compare player accuracy to enemy accuracy to see who hits first
    if(playerShip.accuracy> enemyShip.eAccuracy[eAcc]){
      //if player value is higher do this
      enemyShip.eHull[eHealth]-= playerShip.firepower
      console.log(`PLAYER WINS player acc is ${playerShip.accuracy} this is eAcc ${enemyShip.eAccuracy[eAcc]}`);
      eAcc = Math.floor(Math.random() * 3)
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      console.log("\n\n\n\n\n\n\n\n\n\n");
      battle()
    }//if enemy value is higher, do this
    else if (enemyShip.eAccuracy[eAcc]> playerShip.accuracy){
      playerShip.hull -= enemyShip.eFirepower[eFPower];
      console.log(`ENEMY WINS player acc is ${playerShip.accuracy} this is eAcc ${enemyShip.eAccuracy[eAcc]}`);
      eAcc = Math.floor(Math.random() * 3)
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      console.log("\n\n\n\n\n\n\n\n\n\n\n\n");
      battle()
    }// acc values are equal do this
    else if (playerShip.accuracy=== enemyShip.eAccuracy[eAcc]){
      console.log(`TIE player acc is ${playerShip.accuracy} this is eAcc ${enemyShip.eAccuracy[eAcc]}`);
      eAcc = Math.floor(Math.random() * 3)
      console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
      console.log("\n\n\n\n\n\n\n\n");
      battle()
    }
  }
  else if (playerShip.hull<=0 ){
    console.log('////////\\\\\\\\\\\\\\\\');
    console.log('You are dead');
    console.log("\\\\\\\\\\\\\\\\//////// \n");
    if (lives ==0){
      console.log(`\nYou have ${lives} left. BYE!!!!`);
      process.exit()
    }
    console.log(`\nYou have ${lives} left. Would you like to continue?\n`);

    // user prompt
    replay = prompt("Y || N  " )
    while (!(replay.toLowerCase() ==="y"|| replay.toLowerCase() ==="n")){
      console.log('Please enter "y" or "n"');
      // user prompt to replay
       replay = prompt("Y || N  " )
    }
    if(replay.toLowerCase() =="y"){
      playerShip.hull = 5;// giving player health to replay
      lives--;// takes 1 life away when prompt is yes
      battle()
    }
    else if(replay.toLowerCase() == "n"){
      console.log("BYE!!!");
      process.exit()
    }
  }// if user has one battle and destroyed ship, do this
  else if (enemyShip.eHull[eHealth]<=0){
    console.log("\n\n\n\n\n\n\n\n");
    console.log('////////\\\\\\\\\\\\\\\\');
    console.log('You won the Battle');
    console.log("\\\\\\\\\\\\\\\\//////// \n");
    enemyShip.eName.splice(eShipName,1)// remove enemy ship from array
      if (enemyShip.eName.length<=0){
        console.log('>>>>>>>>>>>>>>><<<<<<<<<<<<<<<');
        console.log('You destroyed all enemy ships');
        console.log('>>>>>>>>>>>>>>><<<<<<<<<<<<<<<');
        console.log("\n\n\n");
        process.exit();
      }
   console.log("\nThe war is not over. Would you like to continue?\n");
   console.log(`\nThere are ${enemyShip.eName.length} enemy ships left\n`);
   // user prompt
   replay = prompt("Y || N  " )
   // comparing user prompt to see if they want to attack another ship
   while (!(replay.toLowerCase() ==="y"|| replay.toLowerCase() ==="n")){
     console.log('Please enter "y" or "n"');
    // user prompt
     replay = prompt("Y || N  " )
   }
 }
 if(replay.toLowerCase() =="y"){
   playerShip.hull = 5;//if yes give player more health
                      //randomizing a new enemy ship
   if(enemyShip.eName.length !==0) {
     //randomize shipName
     eShipName = Math.floor(Math.random() * enemyShip.eName.length);
     //randomize hull
     eHealth = Math.floor(Math.random() * 4);
     enemyShip.eHull[eHealth]
     //randomize firepower
     eFPower = Math.floor(Math.random() * 3);
     enemyShip.eFirepower[eFPower]
     //randomize accuracy
     eAcc = Math.floor(Math.random() * 3);
     enemyShip.eAccuracy[eAcc]
    battle()
  }
  else{//
    console.log('>>>>>>>>>>>>>>><<<<<<<<<<<<<<<');
    console.log('You destroyed all enemy ships');
    console.log('>>>>>>>>>>>>>>><<<<<<<<<<<<<<<');
      process.exit();
    }
  }// if user does not want to continue, stop program/game
  else if(replay.toLowerCase() == "n"){
    console.log("You have retreated. BYE!!!");
    process.exit()
  }
}
    //creates random ship
const randShip =() => {
  while(playerShip.hull>0){
    if(enemyShip.eName.length!==0) {
      //randomize shipName
      eShipName = Math.floor(Math.random() * enemyShip.eName.length);
      //randomize hull
      eHealth = Math.floor(Math.random() * 4);
      enemyShip.eHull[eHealth]
      //randomize firepower
      eFPower = Math.floor(Math.random() * 3);
      enemyShip.eFirepower[eFPower]
      //randomize accuracy
      eAcc = Math.floor(Math.random() * 3);
      enemyShip.eAccuracy[eAcc]
      battle()
    }
  }
}

randShip()

////////Coded by Vanessa and Roderick///////////
