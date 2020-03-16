import knex from "knex";

export class UserDB {
    private connection = knex({
      client: "mysql",
      connection: {
        host: "ec2-18-229-236-15.sa-east-1.compute.amazonaws.com",
        port: 3306,
        user: "eduardo",
        password: "v$vdxCYsib9BsCY38k0k",
        database: "bouman-eduardo"
      }
    });
  
    private userTableName = "people";

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