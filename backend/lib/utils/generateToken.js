import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userId,res) => {  
    const token = jwt.sign({userId}, process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

    //sending it as a cookie
    res.cookie("jwt", token,{
        maxAge: 15*24*60*60*1000, //milliseconds
        httpOnly: true, // to prevent XSS attacks cross-site scripting attacks
        sameSite: "strict", //CSRF attacks cross site request forgery attacks
        secure: process.env.NODE_ENV !== "development", //only sends cookie over HTTP in production
    })

}   