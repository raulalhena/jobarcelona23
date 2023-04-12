import { User } from "../db/dbConnection.js";

// Solicitud de todos los usuarios registrados en la BBDD
const getAllUsers = async (req, res) => {
    
    try{
        const users = await User.findAll();
        res.status(200).json({
            code: 200,
            users
        });
    }catch(e){
        res.status(400).json({
            code: 400,
            message: "Error retrieving the users"
        });
        console.log(`##=> JoBarcelona23: Error: ${e}`);
    }
    
};

export default getAllUsers;