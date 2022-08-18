import { insertOrder, selectIdUser, selectIdCake } from "../repositories/ordersRepositories.js";

export default async function createOrder(req, res){
    const { clientId, cakeId, quantity, totalPrice } = req.body;

    try {
        const {rows: searchingUserId} = await selectIdUser(clientId);
        if ( searchingUserId.length === 0 ) return res.status(404).send(`User doesn't exist`);
        
        const {rows: searchingCakeId} = await selectIdCake(cakeId);
        if ( searchingCakeId.length === 0 ) return res.status(404).send(`Cake doesn't exist`);
        
        await insertOrder(clientId, cakeId, quantity, totalPrice);
        return res.status(201).send("Order successfully added");
        
    } catch (err) {
        console.log(err);
        return res.status(500).send("An internal server error occurred in insert order");
    }
}