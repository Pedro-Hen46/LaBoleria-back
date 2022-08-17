import { getCakeByName } from "../repositories/cakesRepositories.js"

export async function checkNameConflict(req, res, next){
    const { name } = req.body;

    try {
        const { rows: cakeProperties } = await getCakeByName(name);

        if (cakeProperties.length === 1) return res.status(409).send("An conflict was found with the cake name, try again.");

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send("An internal server error occurred ", err);
    }
}