// Main entry point for the LLD TypeScript project
import { SingletonExample } from './examples/SingletonExample';
import { PlayGame } from './examples/snake-and-ladder/play-game';
import { VehicleExample } from './examples/VehicleExample';


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



console.log('\n✅ All examples completed successfully!');
console.log('💡 Start building your LLD patterns in the src/ directory'); 
