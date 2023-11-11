import express from "express";
import { refreshToken } from "../controllers/RefreshToken.js";
import { Login, Logout, Register, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";


const router = express.Router();

router.get("/token", refreshToken)

router.delete("/api/users/logout", verifyToken, Logout)
router.get("/api/users", verifyToken, getAllUsers)
router.get("/api/user/:id", verifyToken, getSingleUser)
router.post("/api/users/register", verifyToken,Register)
router.post("/api/users/login", Login)
router.put("/api/users/:id", verifyToken, updateUser)
router.delete("/api/users/:id", verifyToken, deleteUser)

export default router;