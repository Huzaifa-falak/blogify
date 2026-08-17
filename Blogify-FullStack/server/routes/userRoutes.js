import express from "express";
import { register, login, getAuthorBlogs, getAuthorDashboard } from "../controllers/userController.js";
import { protect } from "../middleware/auth.js";

const userRouter = express.Router();

userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/blogs", protect, getAuthorBlogs);
userRouter.get("/dashboard", protect, getAuthorDashboard);

export default userRouter;
