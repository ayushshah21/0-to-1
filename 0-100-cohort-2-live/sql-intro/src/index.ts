import { Client } from 'pg';

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'ayushshah21',       // New role username
    password: 'Chalamli1',     // New role password
});

async function createUsersTable() {
    await client.connect();
    const result = await client.query(`
        CREATE Table Users
        (
        id SERIAL Primary Key,
        username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

createUsersTable();