import jwt from "jsonwebtoken";

const generateToke = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET, {expiresIn:"10d"})
}

export default generateToke;