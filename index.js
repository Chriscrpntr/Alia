


// Add Player classes
const Mage = require('./mage.js');
const Warrior = require('./warrior.js');
const Classes = [Mage, Warrior]

// New Players
const Chris = new Classes[0]('Chris', 'Elf');
const Kyle = new Classes[1]('Kyle', 'Human');
// Create an array of players
const players = [Chris, Kyle];

// Add Boss class
const Boss = require('./boss.js');



// Battle Function
async function Battle (){
const Enemy = new Boss();

console.log(Enemy.name + ' has appeared!')
console.log('Enemy Health: ' + Enemy.health);
let teamhp = 0;
for (let i = 0; i < players.length; i++) {
  teamhp += players[i].health;
}
while (Enemy.health >= 0 && teamhp >= 0){
  // Perform combat round
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log(Enemy.name + ' attacks!')
  for (
    let i = 0;
    i < players.length;
    i++
  ) {
    Enemy.health = Enemy.health - players[i].attack();
  }

  for(let i = 0; i < players.length; i++) {
    players[i].health = players[i].health - Enemy.attack();
  }
  console.log('Enemy Health: ' + Enemy.health);
  console.log(players[0].name + ' Health: ' + players[0].health);
  console.log(players[1].name + ' Health: ' + players[1].health);
  teamhp = 0;
  for (let i = 0; i < players.length; i++) {
     teamhp += players[i].health;
  }
  // Check if enemy is dead
  if(Enemy.health <= 0){
  for(i = 0; i < players.length; i++){
    players[i].experience += 100;
    console.log(players[i].name + ' has gained 100 experience points!');
    if(players[i].experience >= 1000){
      players[i].level += 1;
      players[i].experience = 0;
      console.log(players[i].name + ' has leveled up!');
      
    }
  }}
  // Check if team is dead
  if(teamhp <= 0){
    console.log('You have been defeated!');
    break;
  }
}
Game();
};

const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');
// Create a server
const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  // read the index.html file
  fs.readFile('index.html', function(err, data) {
    if (err) {
      throw err;
    }
    // write the contents of the index.html file to the response
    response.end(data);
  }

);
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});
// Start the game
async function Game(){
  await Battle(players);
}

Game();
