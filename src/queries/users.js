const db = require('../db/db');

module.exports = {
    getUsers: async (req, res, next)=>{
            try{
                let users = await db.any("SELECT * FROM students");
                res.status(200).json({
                    users,
                    status: "Succes"
                })
            }catch(err){
                next(err);
            }
        }
}