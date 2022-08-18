import connection from "../database/db.js";

async function insertCake(name, image, price, description){
    return await connection.query(`
    INSERT INTO cakes 
    (name, price, image, description) VALUES
    ($1, $2, $3, $4)
    `, [name, image, price, description])
}

async function getCakeByName(name){
    return await connection.query(`
    SELECT * FROM cakes WHERE name = $1 LIMIT 1
    `, [name]);
}

export { insertCake, getCakeByName }