const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');
// Create a server
const server = http.createServer(function(request, response) {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/html');
  // read the index.html file
  fs.readFile('index.html', function(error, data) {
    if (error) {
      response.statusCode = 500;
      response.end();
    } else {
      // send the contents of index.html
      response.end(data);
    }
  });
});

server.listen({ port: 3000, host: 'localhost' }, function() {
  console.log('Server is running!');
});




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
const Enemy = new Boss();

// Battle Function
async function Battle (){
console.log('A wild enemy has appeared!');
let teamhp = 0;
for (let i = 0; i < players.length; i++) {
  teamhp += players[i].health;
}
while (Enemy.health >= 0 && teamhp >= 0){
  // Perform combat round
  await tick();
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


}};


// Combat Function
combat = (players,Enemy) => {
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
};
async function tick() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  combat(players,Enemy);
}




// Start the game
Battle(players, Enemy);
