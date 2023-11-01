import databaseConnection from '../db/db.js';

export default async function getUsers(req, res, next){
    try{
        let users = await databaseConnection.any("SELECT * FROM students");
        res.status(200).json({
            users,
            status: "Succes"
        })
    }catch(err){
        next(err);
    }
}
