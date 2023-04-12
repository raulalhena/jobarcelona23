import dotenv from "dotenv";
import { User } from "../db/dbConnection.js";

dotenv.config();

// Toma los datos de la BBDD y los devuelve al frontend
const getUserProfile = async (req, res) => {

    try{
        const user = await User.findOne({
            where: {
                userId: req.session.userId
            }
        });

        res.status(200).json({
            code: 200,
            user
        });
    }catch(e){
        res.status(400).json({
            code: 400,
            message: "Error user profile"
        });
        console.log(e);
    }
}

export default getUserProfile;