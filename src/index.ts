// Main entry point for the LLD TypeScript project
import { SingletonExample } from './examples/SingletonExample';
import { PlayGame } from './examples/snake-and-ladder/play-game';
import { VehicleExample } from './examples/VehicleExample';
import { ParkingMain } from './examples/parking-lot/parking-main';
import { PlayGame as PlayTicTacToeGame } from './examples/tic-tac-toe/play-game';


console.log('🚀 LLD TypeScript Project Started!');
console.log('=====================================');

// Example 1: Basic class usage
console.log('\n📝 Example 1: Basic Vehicle Class');
const vehicleExample = new VehicleExample();
vehicleExample.demonstrate();

// Example 2: Singleton Pattern
console.log('\n📝 Example 2: Singleton Pattern');
const singletonExample = new SingletonExample();
singletonExample.demonstrate();

// Example 3: Snake and Ladder
console.log('\n📝 Example 3: Snake and Ladder');
const playGame = new PlayGame();
playGame.play();

// Example 4: Parking Lot
console.log('\n📝 Example 4: Parking Lot');
const parkingMain = new ParkingMain();
parkingMain.main();

// Example 5: Tic Tac Toe
console.log('\n📝 Example 5: Tic Tac Toe');
const playTicTacToeGame = new PlayTicTacToeGame();
playTicTacToeGame.main();




console.log('\n✅ All examples completed successfully!');
console.log('💡 Start building your LLD patterns in the src/ directory'); 
