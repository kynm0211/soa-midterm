import express from "express";
import { handleGetAllUser, createUser } from "../Controllers/Users.js";

const router = express.Router();

router.get("/api/getUsers", handleGetAllUser);
router.post("/api/createUser", createUser);

export default router;
