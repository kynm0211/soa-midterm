import express from "express";
import {
    handleGetAllUser,
    createUser,
    deleteUser,
} from "../Controllers/Users.js";

const router = express.Router();

router.get("/api/getUsers", handleGetAllUser);
router.post("/api/createUser", createUser);
router.delete("/api/deleteUser", deleteUser);

export default router;
