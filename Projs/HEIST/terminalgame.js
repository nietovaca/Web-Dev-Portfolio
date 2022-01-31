//created with Robert Garone in SEIR TOPH
const prompt = require('prompt-sync')();
let username;

//ACTORS
const police = {
  squad: {
    cars: [`Car1`, `Car2`, `Car3`, `Car4`],
    copters: [`Copter 1`, `Copter 2`]
  },
  weapon: [`pistol`, `baton`,],
  health: 100,
  car: `'70 Plymouth Fury`
}
const robber = {
  name: username,
  weapon: {
    pistol: true,
    pistolAmo: 12,
    shotgun:false,
    shotgunAmo:0
  },
  health: 100,
  murders: 0,
  car: `'70 chevy impala`,
  money: 0
}
/////////About menu option
const aboutGame = (vnR) => {
    console.log("Game programmed by: \n RG & VNT \n")
        mainMenu();
}

////////Start Game Play
const newGame = () => {
  let username = prompt(`What is your name? `);
  let choice = prompt(`It's April 3rd, 1972 and you just robbed the First Brooklyn Savings Bank. This isn't your first rodeo; however, the teller was able to press the panic button while you were doing crowd control with the customers. You are forced to make a quick choice: 1.) Run with the money you've collected from the registers, about $500 total.  2.) Go to the vault. You know the code and may be able to get in and out in time.  (1 / 2): `)
    if (choice === `1`){
      robber.money += 500
      run();
    }
    else if (choice === `2`){
      vault();
      robber.money += 5500
      rober.weapon.shotgun = true
      rober.weapon.shotgunAmo = 8
      } else {
      console.log(`Invalid choice, try again. Run (1) or Vault (2): `);
      newGame();
    }
}

///////////////////////At the Vault\\\\\\\\\\\\\\\\\\\\\\
const vault =() => {
  let choice = prompt(`At the vault you break in quickly. There was $5,000 in the vault and a shotgun. Score.`);
  run();
}
/////////////////////////// Run from Police \\\\\\\\\\\\\\\\\\\\\\\\\\\\
const run = () => {
  let choice = prompt(`With cash in hand ($${robber.money}), you run. You get to the car & the engine won't start. You see 4 police cars round the corner. Do you: 1.) Try to start the car again or 2.) Shoot at the police? (1 / 2):`);
    if (choice === `1`) {
      carTroubles();
    } else if (choice === `2`){
      shootOut();
    } else {
      console.log(`Invalid choice, try again. /n Try the car again (1) or Shoot at the police (2):`); }
}

//////Inventory
const checkInventory = () => {
  console.log(`Your weapon & amo count are: ${robber.weapon} and you have $${robber.money} dollars. You have killed ${robber.murders} cops.`);
}

///////WeaponChoice and gunFight
const weaponChoiceGunFight = () => {
let choice = prompt(`Check your inventory [i], Choose a weapon [w] (i / w): `)
  if (choice.toLowerCase === 'i') {
      checkInventory()
  }else if (choice.toLowerCase === `w`) {
      console.log(`Your weapons are ${robber.weapon}`);
      if (player.weapon.shotgun = true) {
            let weaponChoose = prompt(`Which weapon would you like to use? 1.) Pistol or 2.) Shotgun? (1 / 2): `)
            if (weaponChoose === `1`) {
              console.log("You pull your pistol out, aim it out the window and shoot two blind shots behind your car.");
              player.weapon.pistolAmo -= 2;
              console.log("One of your bullets connects with one of the police cars tire.  Your shot sent that car into spin causing all the other police cars to pile up behind.");
            } else if (weaponChoose === `2`){
              console.log("You pull your shotgun out, aim it out the window and shoot two blind shots behind your car.");
              console.log("One of your bullets hits the driver of a police car.  Your shot sent that car into spin causing all the other police cars to pile up behind. You killed a cop. No stopping now.");
              robber.weapon.shotgunAmo -= 2
              player.murders ++
          } else {
            console.log(`Invalid choice. Try again.`);
            weaponAndShootOut();
          }
      } else {
        console.log("You pull your pistol out, aim it out the window and shoot two blind shots behind your car.");
        player.weapon.pistolAmo -= 2;
        console.log("One of your bullets connects with one of the police cars tire.  Your shot sent that car into spin causing all the other police cars to pile up behind.");
      }
  } else {
    console.log(`Invalid choice. Try again.`);
    weaponChoiceGunFight();
  }
}




////Car Troubles
const carTroubles = () => {
  console.log(`This hooptie won't turn over. You should have gotten it serviced before robbing a bank. You are apprehended by the police.`);
  playAgain();
}
//////////////////////////You die/lost Play Again?\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const playAgain = () => {
  let choice = prompt(`Game over. Do you want to play again? Yes, No (Exit) (y / n ) :   `)
  if (choice.toLowerCase() === 'y'){
    newGame();
  } else if (choice.toLowerCase() === 'n'){
    console.log(`BYE!`);
    process.exit();
  } else {
    console.log(`Invalid choice.`);
    playAgain();
  }
}
//////////////////////// Main Menu - before game play begins \\\\\\\\\\\\\\\\\\\\
function mainMenu() {
    console.log("Welcome to the interactive terminal game, Heist!");
    let choice = prompt(" (1)New Game:  (2)About:  (3)Quit: ");
        if (choice == '1'){
            newGame();
        }else if (choice == '2'){
            aboutGame();
        }else if (choice == '3'){
            process.exit();
        }else{
            console.log("Invalid selection: Please try again");
            mainMenu();
        }

    }

mainMenu();

/////////////////////////////////////////////////
