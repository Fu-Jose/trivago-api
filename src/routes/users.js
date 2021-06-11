import express from "express";
import UserModel from "../models/Users.js";
import { adminOnlyMiddleware, jwtAuthMiddleware } from "../auth/index.js";
import { authenticate, refreshToken } from "../auth/tools.js";

const usersRouter = express.Router();

usersRouter.post("/register", async (req, res, next) => {
  try {
    const newUser = new UserModel(req.body);
    const { _id } = await newUser.save();

    res.status(201).send(_id);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.checkCredentials(email, password);
    const tokens = await authenticate(user);
    res.send(tokens);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/me", async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

export default usersRouter;
