import dayjs from "dayjs";
import {
  insertOrder,
  selectIdUser,
  selectIdCake,
  getOrdersDataBase,
} from "../repositories/ordersRepositories.js";

export async function createOrder(req, res) {
  const { clientId, cakeId, quantity, totalPrice } = req.body;

  try {
    const { rows: searchingUserId } = await selectIdUser(clientId);
    if (searchingUserId.length === 0)
      return res.status(404).send(`User doesn't exist`);

    const { rows: searchingCakeId } = await selectIdCake(cakeId);
    if (searchingCakeId.length === 0)
      return res.status(404).send(`Cake doesn't exist`);

    const createdAt = dayjs().format("YYYY-MM-DD HH:mm");

    await insertOrder(clientId, cakeId, quantity, totalPrice, createdAt);
    return res.status(201).send("Order successfully added");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("An internal server error occurred in insert order");
  }
}

export async function getOrders(req, res) {
  const { date } = req.query;

  let queryStringText = "";

  if (date) {
    queryStringText = `WHERE o."createdAt"::date = '${date}'`;
  }

  try {
    const { rows: orders } = await getOrdersDataBase(queryStringText);

    if (orders.length === 0) return res.status(404).send(orders);

    const allOrders = orders.map((order) => {
      return {
        client: {
          id: order.clientId,
          name: order.clientName,
          address: order.address,
          phone: order.phone,
        },
        cake: {
          id: order.cakeId,
          name: order.cakeName,
          price: order.price,
          description: order.description,
          image: order.image,
        },
        orderId: order.orderId,
        createdAt: order.createdAt,
        quantity: order.quantity,
        totalPrice: order.totalPrice,
      };
    });

    res.status(200).send(allOrders);
  } catch (err) {
    console.log(err);
    return res.status(500).send("An internal error occurred in getting orders");
  }
}

export async function getOrderById(req, res) {
  const { id } = req.params;
  
  const regexId = /[0-9]/;
  
  if (regexId.test(id) === false) return res.status(400).send("Invalid Parameter");
  
  const queryStringText = `WHERE o.id = '${id}'`;
  
  try {
    const { rows: orders } = await getOrdersDataBase(queryStringText);

    if (orders.length === 0) return res.status(404).send(orders);

    const allOrders = orders.map((order) => {
        return {
          client: {
            id: order.clientId,
            name: order.clientName,
            address: order.address,
            phone: order.phone,
          },
          cake: {
            id: order.cakeId,
            name: order.cakeName,
            price: order.price,
            description: order.description,
            image: order.image,
          },
          orderId: order.orderId,
          createdAt: order.createdAt,
          quantity: order.quantity,
          totalPrice: order.totalPrice,
        };
      });    

      return res.status(200).send(allOrders);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("An internal server error occurred getting order by id");
  }
}
