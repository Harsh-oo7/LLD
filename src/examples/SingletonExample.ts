// Example demonstrating the Singleton Design Pattern

// Singleton class - only one instance can exist
class DatabaseConnection {
    private static instance: DatabaseConnection;
    private connectionString: string;
    private isConnected: boolean;

    // Private constructor prevents direct instantiation
    private constructor() {
        this.connectionString = 'mongodb://localhost:27017/lld_database';
        this.isConnected = false;
        console.log('🔌 Database connection instance created');
    }

    // Static method to get the singleton instance
    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }

    public connect(): string {
        if (!this.isConnected) {
            this.isConnected = true;
            return `✅ Connected to database: ${this.connectionString}`;
        }
        return `⚠️  Already connected to database`;
    }

    public disconnect(): string {
        if (this.isConnected) {
            this.isConnected = false;
            return `❌ Disconnected from database`;
        }
        return `⚠️  Already disconnected`;
    }

    public getConnectionStatus(): string {
        return this.isConnected ? 'Connected' : 'Disconnected';
    }

    public executeQuery(query: string): string {
        if (!this.isConnected) {
            return `🚫 Cannot execute query. Database is not connected.`;
        }
        return `📊 Executing query: "${query}" - Result: Success`;
    }
}

// Another singleton example - Logger
class Logger {
    private static instance: Logger;
    private logs: string[] = [];

    private constructor() {
        console.log('📝 Logger instance created');
    }

    public static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    public log(message: string, level: 'INFO' | 'WARN' | 'ERROR' = 'INFO'): void {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] ${message}`;
        this.logs.push(logEntry);
        console.log(`📋 ${logEntry}`);
    }

    public getLogs(): string[] {
        return [...this.logs]; // Return a copy to prevent external modification
    }

    public clearLogs(): void {
        this.logs = [];
        console.log('🗑️  Logs cleared');
    }
}

export class SingletonExample {
    demonstrate(): void {
        console.log('Testing Singleton Pattern...\n');

        // Test DatabaseConnection Singleton
        console.log('🗄️  Database Connection Singleton:');
        const db1 = DatabaseConnection.getInstance();
        const db2 = DatabaseConnection.getInstance();

        console.log(`Are db1 and db2 the same instance? ${db1 === db2}`);
        console.log(db1.connect());
        console.log(db2.executeQuery('SELECT * FROM users'));
        console.log(`Connection status: ${db1.getConnectionStatus()}`);
        console.log(db1.disconnect());
        console.log('');

        // Test Logger Singleton
        console.log('📋 Logger Singleton:');
        const logger1 = Logger.getInstance();
        const logger2 = Logger.getInstance();

        console.log(`Are logger1 and logger2 the same instance? ${logger1 === logger2}`);
        logger1.log('Application started', 'INFO');
        logger2.log('This is a warning message', 'WARN');
        logger1.log('This is an error message', 'ERROR');

        console.log('\n📜 All logs:');
        logger1.getLogs().forEach(log => console.log(`   ${log}`));

        logger1.clearLogs();
    }
} 