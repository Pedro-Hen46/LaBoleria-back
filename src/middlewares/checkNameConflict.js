import { getCakeByName } from "../repositories/cakesRepositories.js"

export async function checkNameConflict(req, res, next){
    const { name } = req.body;

    try {
        const { rows: cakeProperties } = await getCakeByName(name);

        if (cakeProperties.length === 1) return res.sendStatus(409);

        next();
    } catch (err) {
        console.log(err);
        return res.status(500).send("An internal server error occurred ", err);
    }
}