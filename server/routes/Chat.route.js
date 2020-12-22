import express from "express";

import { Sendmsg } from "../controllers/Chat.controller.js";

const router = express.Router();

router.get("/chat", Sendmsg);

export default router;
