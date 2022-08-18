import connection from "../database/db.js";

export default async function insertClient(name, address, phone){
    return await connection.query(`
        INSERT INTO clients
        (name, address, phone)
        VALUES ($1, $2, $3)
    `, [name, address, phone]);
}

