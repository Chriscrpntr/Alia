const http = require('http');
// add the fs library for reading from the file system
const fs = require('fs');
// Add Player class
const Player = require('./player.js');
const Mage = require('./mage.js');
const Warrior = require('./warrior.js');
const Classes = [Mage, Warrior]
function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}
// New Players
const Chris = new Classes[0]('Chris', 'Elf', Classes[0]);
const Kyle = new Classes[1]('Kyle', 'Human', Classes[1]);
// Create an array of players
const players = [Chris, Kyle];
// Add Boss class
const Boss = require('./boss.js');
// Create a boss
const Enemy = new Boss();
// Combat
combat = (players, Enemy) => {
for (
  let i = 0;
  i < players.length;
  i++
) {
  Enemy.health = Enemy.health - players[i].attack();
}

for(let i = 0; i < players.length; i++) {
  players[i].health - Enemy.attack();
}
}
// Call combat function
while (Enemy.health > 0){
  combat(players, Enemy);
  console.log('Enemy Health: ' + Enemy.health);
  console.log(players[0].name + ' Health: ' + players[0].health);
  console.log(players[1].name + ' Health: ' + players[1].health);
  delay(1000);

}
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

