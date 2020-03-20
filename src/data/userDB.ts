import { User } from "../business/entities/user";
import { BaseDB } from "./baseDB";
import { UserGateway } from "../business/gateways/UserGateway";

export class UserDB extends BaseDB implements UserGateway {
    
  
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

    async createUserFollowRelation(followerId: string, followedId: string): Promise<void>{
        await this.connection.raw(`INSERT INTO \`bouman-eduardo\`.\`users_relations\`
        (\`follower_id\`,
        \`followed_id\`)
        VALUES
        ('${followerId}','${followedId}');`)
    }

}
