import knex from "knex";

export class UserDB {
    private connection = knex({
      client: "mysql",
      connection: {
        host: "<HOST>",
        port: 0,
        user: "<USER>",
        password: "<PASSWORD>",
        database: "<TABLE>"
      }
    });
  
    private userTableName = "<TABELA>";

    public async createUser(user: any): Promise<void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTableName} (id, email, password)
            VALUES(
                '${user.getId()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            );
        `);
    }

    public async getUserByEmail(user: any) Promise<any>{
        await this.connection.raw(`
            SELECT * FROM ${this.userTableName}
            WHERE email
        `);

        if (!user[0]){
            return undefined
        }
        return new User(user[0].id, user[0].email, user[0].password)
    }
}