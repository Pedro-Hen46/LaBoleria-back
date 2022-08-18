import insertClient from "../repositories/clientRepository.js"

export default async function createClient(req, res){
    const { name, address, phone } = req.body;
    
    try {
        await insertClient(name, address, phone);
        
        return res.status(201).send();
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

