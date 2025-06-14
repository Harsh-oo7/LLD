// Main entry point for the LLD TypeScript project
import { SingletonExample } from './examples/SingletonExample';
import { PlayGame } from './examples/snake-and-ladder/play-game';
import { VehicleExample } from './examples/VehicleExample';
import { ParkingMain } from './examples/parking-lot/parking-main';
import { PlayGame as PlayTicTacToeGame } from './examples/tic-tac-toe/play-game';
import { StrategyExample } from './patterns/behavioral/strategy/main';
import { ObserverExample } from "./patterns/behavioral/observer/main";
import { DecoratorExample } from './patterns/structural/decorator/main';
import { FactoryExample } from './patterns/creational/factory/main';
import { ChainOfResponsibilityExample } from './patterns/behavioral/chain-of-responsibility/main';
import { ProxyExample } from './patterns/structural/proxy/main';
import { StateDemo } from './patterns/behavioral/state/main';
import { CompositeExample } from './patterns/structural/composite/main';
import { AdapterExample } from './patterns/structural/adapter/main';


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

// Example 6: Strategy Pattern
console.log('\n📝 Example 6: Strategy Pattern');
const strategyExample = new StrategyExample();
strategyExample.demonstrate();

// Example 7: Observer Pattern
console.log('\n📝 Example 7: Observer Pattern');
const observerExample = new ObserverExample();
observerExample.demonstrate();

// Example 8: Decorator Pattern
console.log('\n📝 Example 8: Decorator Pattern');
const decoratorExample = new DecoratorExample();
decoratorExample.demonstrate();

// Example 9: Factory Pattern
console.log('\n📝 Example 9: Factory Pattern');
const factoryExample = new FactoryExample();
factoryExample.demonstrate();

// Example 10: Chain of Responsibility Pattern
console.log('\n📝 Example 10: Chain of Responsibility Pattern');
const chainOfResponsibilityExample = new ChainOfResponsibilityExample();
chainOfResponsibilityExample.demonstrate();

// Example 11: Proxy Pattern
console.log('\n📝 Example 11: Proxy Pattern');
const proxyExample = new ProxyExample();
proxyExample.demonstrate();

// Example 12: State Pattern
console.log('\n📝 Example 12: State Pattern');
const stateDemo = new StateDemo();
stateDemo.demonstrate();

// Example 13: Composite Pattern
console.log('\n📝 Example 13: Composite Pattern');
const compositeExample = new CompositeExample();
compositeExample.demonstrate();

// Example 14: Adapter Pattern
console.log('\n📝 Example 14: Adapter Pattern');
const adapterExample = new AdapterExample();
adapterExample.demonstrate();


console.log('\n✅ All examples completed successfully!');
console.log('💡 Start building your LLD patterns in the src/ directory'); 
