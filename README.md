# LLD TypeScript Learning Project

A clean TypeScript Node.js project setup for learning **Low Level Design (LLD)** patterns and object-oriented programming concepts.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Project
```bash
# Run in development mode (with live reloading)
npm run dev

# Or build and run
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── index.ts              # Main entry point
│   ├── examples/
│   │   ├── VehicleExample.ts # Inheritance & Polymorphism demo
│   │   └── SingletonExample.ts # Singleton pattern demo
│   └── patterns/             # Your LLD patterns go here
├── dist/                     # Compiled JavaScript (auto-generated)
├── package.json
├── tsconfig.json
└── README.md
```

## 🎯 What's Included

### Basic Examples
- **VehicleExample**: Demonstrates classes, inheritance, abstract classes, interfaces, and polymorphism
- **SingletonExample**: Shows the Singleton design pattern implementation

### TypeScript Features
- ✅ Strict type checking
- ✅ Decorators support (for advanced patterns)
- ✅ Modern ES2020 features
- ✅ Source maps for debugging
- ✅ Declaration files generation

## 🛠️ Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run with ts-node (development) |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled JavaScript |
| `npm run watch` | Watch for changes and recompile |
| `npm run clean` | Remove dist folder |

## 📚 Learning Path for LLD

### 1. **SOLID Principles**
Create examples in `src/patterns/solid/`:
- Single Responsibility Principle (SRP)
- Open/Closed Principle (OCP)
- Liskov Substitution Principle (LSP)
- Interface Segregation Principle (ISP)
- Dependency Inversion Principle (DIP)

### 2. **Creational Patterns**
Implement in `src/patterns/creational/`:
- Singleton ✅ (already included)
- Factory Method
- Abstract Factory
- Builder
- Prototype

### 3. **Structural Patterns**
Build in `src/patterns/structural/`:
- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### 4. **Behavioral Patterns**
Develop in `src/patterns/behavioral/`:
- Observer
- Strategy
- Command
- State
- Template Method
- Chain of Responsibility
- Mediator
- Memento
- Visitor
- Iterator

### 5. **System Design Practice**
Create real-world examples in `src/systems/`:
- Parking Lot System
- Library Management System
- Hotel Booking System
- Chat Application
- E-commerce Platform

## 💡 Usage Example

```typescript
// Create a new pattern file: src/patterns/creational/FactoryPattern.ts

abstract class Animal {
    abstract makeSound(): string;
}

class Dog extends Animal {
    makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }
}

class AnimalFactory {
    static createAnimal(type: 'dog' | 'cat'): Animal {
        switch (type) {
            case 'dog':
                return new Dog();
            case 'cat':
                return new Cat();
            default:
                throw new Error(`Unknown animal type: ${type}`);
        }
    }
}

// Usage
const dog = AnimalFactory.createAnimal('dog');
console.log(dog.makeSound()); // Output: Woof!
```

## 🔧 TypeScript Configuration Highlights

- **Strict Mode**: Enabled for better code quality
- **Decorators**: Enabled for advanced patterns (useful for frameworks)
- **Source Maps**: For easy debugging
- **Declaration Files**: Auto-generated for library usage

## 📖 Best Practices

1. **Use access modifiers** (`private`, `protected`, `public`) appropriately
2. **Implement interfaces** to define contracts
3. **Use abstract classes** for common base functionality
4. **Apply SOLID principles** in your designs
5. **Write descriptive comments** explaining design decisions
6. **Use meaningful names** for classes, methods, and variables

## 🎓 Next Steps

1. Start with the provided examples to understand the setup
2. Implement basic SOLID principles
3. Work through creational patterns
4. Move to structural and behavioral patterns
5. Build complete system designs
6. Practice with real-world scenarios

Happy coding and learning LLD! 🚀 