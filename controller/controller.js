const db = require('../db/db');
const {successResponse, failedResponse} = require('../utils/responses');

module.exports = {
    // showTables: async (req, res) => {
    //     try{
    //         const [tables] = await db.showTables();
    //         if(!tables){
    //             const err = new Error("No table found");
    //             err.status = 404;
    //             throw err;
    //         }
    //         return res.status(200)
    //         .json(successResponse({tables: tables}))
    //     }catch(err){
    //         console.log(err, "[controller][showTables]");
    //         return res.status(err.status || 500)
    //         .json(
    //             failedResponse(
    //                 err.status ? 
    //                 err.message : 
    //                 "Something went wrong"
    //             ))
    //     }
    // }
};
