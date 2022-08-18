import connection from "../database/db.js";

async function insertOrder(clientId, cakeId, quantity, totalPrice){
    return await connection.query(`
        INSERT INTO orders
        ("clientId", "cakeId", quantity, "totalPrice", "createdAt")
        VALUES
        ($1, $2, $3, $4, now())
    `, [clientId, cakeId, quantity, totalPrice])
}

async function selectIdUser(clientId){
    return await connection.query(`
        SELECT * FROM clients
        WHERE id = $1
    `, [clientId]);
}

async function selectIdCake(cakeId){
    return await connection.query(`
        SELECT * FROM cakes
        WHERE id = $1
    `, [cakeId]);
}


export { insertOrder, selectIdUser, selectIdCake }