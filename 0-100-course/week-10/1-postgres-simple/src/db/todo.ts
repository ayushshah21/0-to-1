import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
interface Todo {
    id: number;
    userId: number;
    title: string;
    description: string;
    done: boolean;
  }
export async function createTodo(userId: number, title: string, description: string) {
    if (!client.connect) await client.connect();
    const todoText = `
    Insert into Todos (user_id, title, description, done)
    Values($1, $2, $3, $4)
    Returning id, user_id, title, description, done;
    `;
    const values = [userId, title, description, false];
    const response = await client.query(todoText, values);
    console.log(response);
    return response.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    if (!client.connect) await client.connect();
    const updateText = `
    Update Todos
    Set done = true
    Where id = $1
    Returning id, user_id, title, description, done;
    `;
    const res = await client.query(updateText, [todoId]);
    console.log(res);
    return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    if (!client.connect) await client.connect();
    const getText =
        `Select * from Todos Where id = $1;
        `;
    const res = await client.query(getText, [userId]);
    console.log(res);
    return res.rows;
}