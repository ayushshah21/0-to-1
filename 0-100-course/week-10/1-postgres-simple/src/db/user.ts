import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    if (!client.connect) await client.connect();
    const createUserText =
        `Insert into USERS (username, password, name)
        Values ($1, $2, $3)
        Returning id, username, password, name`;
    const userRes = await client.query(createUserText, [username, password, name]);
    if (userRes.rowCount === 0) {
        throw new Error('User creation failed');
    }
    console.log(userRes);
    return userRes.rows[0];
    
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    if (!client.connect) await client.connect();
    const userInfo = await client.query(`
        Select id, username, password, name From Users where id = $1`, [userId]);
    console.log(userInfo);
    return userInfo.rows[0];
}
