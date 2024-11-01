// Moida Mansion - Main Game Logic File

console.log("Welcome to Moida Mansion!");

// Initialize Game State
let gameState = {
  player: {
    name: "Detective",
    inventory: [],
    currentRoom: "Entrance Hall",
  },
  rooms: {
    "Entrance Hall": { description: "A grand hall with portraits and a dark atmosphere.", items: [] },
    "Library": { description: "Shelves full of dusty books and a strange smell.", items: ["Key"] },
    "Dining Room": { description: "A large dining table with an eerie silence.", items: ["Note"] },
  },
};

// Game Functions
function startGame() {
  console.log("Game started! Explore the mansion to find clues and solve the mystery.");
  displayRoom(gameState.player.currentRoom);
}

function displayRoom(room) {
  console.log("You are in the " + room + ". " + gameState.rooms[room].description);
}

// Begin Game
startGame();
