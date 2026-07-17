import jwt from 'jsonwebtoken'
import { getJwtSecret } from '../configs/auth.js'

const protect = async (req, res, next) =>{
    const token = req.headers.authorization;
    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try {
        const decoded = jwt.verify(token, getJwtSecret())
        req.userId = decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({message: 'Unauthorized'})
    }
}

export default protect;