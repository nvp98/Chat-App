import express from "express";

import { getUser, postLogin, SignUp } from "../controllers/Auth.controller.js";

const router = express.Router();

router.post("/login", postLogin);
router.post("/signup", SignUp);
router.get("/user", getUser);

export default router;
