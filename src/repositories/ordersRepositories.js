import connection from "../database/db.js";

async function insertOrder(clientId, cakeId, quantity, totalPrice, createdAt) {
  return await connection.query(
    `
        INSERT INTO orders
        ("clientId", "cakeId", quantity, "totalPrice", "createdAt")
        VALUES
        ($1, $2, $3, $4, $5)
    `,
    [clientId, cakeId, quantity, totalPrice, createdAt]
  );
}

async function selectIdUser(clientId) {
  return await connection.query(
    `
        SELECT * FROM clients
        WHERE id = $1
    `,
    [clientId]
  );
}

async function selectIdCake(cakeId) {
  return await connection.query(
    `
        SELECT * FROM cakes
        WHERE id = $1
    `,
    [cakeId]
  );
}

async function getOrdersDataBase(queryStringText) {

  return await connection.query(`SELECT cl.id AS "clientId", cl.name AS "clientName", cl.address AS address, cl.phone AS phone, ca.id as "cakeId", ca.name AS "cakeName", ca.price AS price, ca.description AS description, ca.image AS image, o."createdAt" AS "createAt", o.quantity AS quantity, o."totalPrice", o.id AS "orderId"
    FROM orders o
    JOIN clients cl ON o."clientId" = cl.id
    JOIN cakes ca ON o."cakeId" = ca.id 
    ${queryStringText}`);
}

export { insertOrder, selectIdUser, selectIdCake, getOrdersDataBase };
