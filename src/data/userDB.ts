import { User } from "../business/entities/user";
import { BaseDB } from "./baseDB";

export class UserDB extends BaseDB{
    
  
    private userTableName = "people";


    public async createUser(user: User): Promise<User | void> {
        await this.connection.raw(`
            INSERT INTO ${this.userTableName} 
            VALUES(
                '${user.getId()}',
                '${user.getEmail()}',
                '${user.getPassword()}'
            );
        `);
    }

    public async getUserByEmail(email: string): Promise<User | undefined>{
        const user = await this.connection.select('*').from('people')
        .where({email});

        if (!user[0]){
            return undefined
        }
        return new User(user[0].id, user[0].email, user[0].password)
    }

    public async getUserById(id: string): Promise<User | undefined>{
        const user = await this.connection.select('*').from('people')
        .where({id});

        if (!user[0]){
            return undefined
        }
        return new User(user[0].id, user[0].email, user[0].password)
    }
}