// Singleton - GoF | Factory method
export class Database {
  private static database: Database;
  private constructor(private user: string, private host: string) {}
  connect(): void {
    console.log(
      `Connecting the user: ${this.user} to the server: ${this.host}`,
    );
  }
  static getDatabase(user: string, host: string): Database {
    if (Database.database) {
      console.log('Retornando instância já criada');
      return Database.database;
    }
    console.log('Criando nova instâcia');
    Database.database = new Database(user, host);
    return Database.database;
  }
}
const db1 = Database.getDatabase('Bruno', 'http:\\localhost:3000');
db1.connect();
const db2 = Database.getDatabase('Bruno', 'http:\\localhost:3000');
db2.connect();
console.log(
  'Retornando se o valor das duas instâncias são iguais:',
  db1 === db2,
);
