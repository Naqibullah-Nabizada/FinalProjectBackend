import jwt from "jsonwebtoken";
import Users from "../models/userModel.js";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const user = await Users.findAll({
      where: {
        refresh_token: refreshToken,
      },
    });
    if (!user[0]) return res.sendStatus(403);
    jwt.verify(refreshToken, "ghf8hg908s8f67sf65s76da7da7",
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const isAdmin = user[0].isAdmin;
        const accessToken = jwt.sign({ userId, name, email, isAdmin }, "89sd7f89sdf7sd87dfg897gd8fg7", { expiresIn: "45s" });
        res.json({ accessToken })
      }
    );
  } catch (error) {
    console.log(error);
  }
};
