import { User } from '../db/dbConnection.js';
import dotenv from "dotenv";

dotenv.config();

// Middleware de protección de los endpoints
const authorized = async (req, res, next) => {
    
    // Check si existe una sesión de usuario
    if(req.session.userId){
        try{
            // Check si existe el usuario en la BBDD
            const user = await User.findOne({ 
                where: {
                    userId: req.session.userId
                } 
            });

            // Si existe usuario se sigue al endpoint, si no se redirecciona a /login
            if(user){
                return next();
            }else{
                res.redirect(`${process.env.HOST}:${process.env.PORT}/login`);
            }
        }catch(e){
            console.log(`#=> JoBarcelon23: Authorization: ${e}`);
        }
    }else {
        // Si no existe sesión usuario se redirecciona a /login
        res.redirect(`${process.env.HOST}:${process.env.PORT}/login`);
    }
}

export default authorized;