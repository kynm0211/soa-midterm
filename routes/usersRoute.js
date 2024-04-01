import express from "express";
import {
    handleGetAllUser,
    createUser,
    deleteUser,
    editUser,
} from "../Controllers/Users.js";

const router = express.Router();

router.get("/api/getUsers", handleGetAllUser);
router.post("/api/createUser", createUser);
router.delete("/api/deleteUser", deleteUser);
router.put("/api/editUser", editUser);

export default router;
