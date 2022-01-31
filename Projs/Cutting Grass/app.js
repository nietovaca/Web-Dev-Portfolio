// const prompt = require('prompt-sync')();
const player = {
  money: 0,
  tools: {
    teeth: {cost: 0},
    rustyScissors: {cost: 5},
    pushMower: {cost: 25},
    electricMower: {cost: 250},
    students: {cost: 500}
    }
}
let tool;
// GetStatus of money and tool
const getStatus = () => {
  alert (`You have $ ${player.money} & your tool is ${tool}.`);
  console.log(`You have $ ${player.money} & your tool is ${tool}.`);
}

//// CutGrass
const cutGrass =() => {
  if (tool === "your teeth") {
    player.money++
    alert(`Chomp. Munch. Crunch. You earned $1`);
    console.log(`Chomp. Munch. Crunch. You earned $1`);
    getStatus();
    playerAction();
  } else if (tool === "rusty scissors") {
    player.money += 5
    alert(`Snip. Snip. You earned $5`);
    console.log(`Snip. Snip. You earned $5`)
    getStatus();
    playerAction();
  } else if (tool === "push mower") {
    player.money += 50
    alert(`Pushhhhhhhhh. You earned $50.`);
    console.log(`Pushhhhhhhhh. You earned $50.`);
    getStatus();
    playerAction();
  } else if (tool === "electric mower") {
    player.money += 100
    alert(`Buzzzzzzz. You earned $100.`);
    console.log(`Buzzzzzzz. You earned $100.`);
    getStatus();
    playerAction();
  } else if (tool === "a crew of starving students") {
    player.money += 250
    alert(`Exploit the people. You earned $250.`);
    console.log(`Exploit the people. You earned $250.`);
    getStatus();
        if (player.money < 1000) {
          playerAction();
      } else {
        alert(`Your business is a success. You have ${player.money} and a team of exploited workers at your disposal.`);
        console.log(`Your business is a success. You have ${player.money} and a team of exploited workers at your disposal.`);
        process.exit();
      }
  }
}

//////////playerAction - actions a player can take each turn !!!Not INVOKED YET!!!
const playerAction = () => {
let choice = prompt(`Do you want to cut grass (c), buy a tool (b), restart (r), or exit (e)? (c/b/r/e): `);
    if (choice.toLowerCase() === `c`) {
      cutGrass();
    } else if (choice.toLowerCase() === 'b') {
      chooseTool()
    } else if (choice.toLowerCase() === 'r') {
      playStart();
    } else if (choice.toLowerCase() === 'e') {
      process.exit();
    } else {
      alert(`Incorrect choice.`);
      console.log(`Incorrect choice.`);
      playerAction(); }
  }
  ////ChooseTool
    const chooseTool =() => {
      let choice = prompt(`Which tool would you like to buy: rusty scissors = $5 (r), push mower = $25 (p), electric mower = $250 (m), or starving students $500 (s)? OR Type (e) to exit the game. Type (b) to go back: (r/p/m/s/e/b): `)
      if (choice.toLowerCase() === `r` && player.money >= 5){
          tool = "rusty scissors"
          player.money -= 5;
          alert(`You've purchased rusty scissors. You now have $ ${player.money} dollars.`);
          console.log(`You've purchased rusty scissors. You now have $ ${player.money} dollars.`);
          playerAction();
      } else if (choice.toLowerCase() === `p` && player.money >=25){
          tool = "push mower";
          player.money -= 25;
          alert(`You've purchased a push mower. You now have $ ${player.money} dollars.`);
          console.log(`You've purchased a push mower. You now have $ ${player.money} dollars.`);
          playerAction();
      } else if (choice.toLowerCase() === `m` && player.money >=25){
          tool = "electric mower";
          player.money -= 250;
          alert(`You've purchased an electric mower. You now have $ ${player.money} dollars.`);
          console.log(`You've purchased an electric mower. You now have $ ${player.money} dollars.`);
          playerAction();
      } else if (choice.toLowerCase() === `s` && player.money >= 500){
          tool = "a crew of starving students";
          player.money -= 500;
          alert(`You've purchased a crew of starving students. You now have $ ${player.money} dollars.`);
          console.log(`You've purchased a crew of starving students. You now have $ ${player.money} dollars.`);
          playerAction();
      } else if (choice.toLowerCase()=== `e`) {
          process.exit();
      } else if (choice.toLowerCase()=== 'b') {
          playerAction();
      } else {
          alert(`You don't have enough money to buy that. Time to put in some work.`);
          console.log(`You don't have enough money to buy that. You have ${player.money} dollars. Try again.`);
          playerAction();
        }
  }

const playStart =() => {
  let tool = 'your teeth';
  let money = player.money;
  alert(`You've decided to go into the lawn mowing business. To start, you only have your teeth. You'll earn $1 a day with this tool. Once you earn enough money, you can buy better tools to earn more money per day.`);
  console.log(`You've decided to go into the lawn mowing business. To start, you only have your teeth. You'll earn $1 a day with this tool. Once you earn enough money, you can buy better tools to earn more money per day.`);
  playerAction();
}
playStart();
