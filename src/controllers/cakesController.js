import { insertCake } from "../repositories/cakesRepositories.js";

export async function createCake(req, res){
    const { name, price, image, description } = req.body;

    try {
        await insertCake(name, price, image, description);

        return res.status(201).send("Cake successfully created");
    } catch (err) {
        console.log(err);
        return res.status(500).send("An internal server error occurred: ", err);
    }
}