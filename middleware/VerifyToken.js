import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
     const authHeader = req.headers["authorization"];
     const token = authHeader && authHeader.split(" ")[1]
     if (token == null) return res.status(401).json("شما باید ابتدا وارد حساب کاربری خود شوید")
     jwt.verify(token, "89sd7f89sdf7sd87dfg897gd8fg7", (err, decoded) => {
          if (err) return res.json("توکن منقضی شده است")
          req.userId = decoded.userId
          next();
     })
}

