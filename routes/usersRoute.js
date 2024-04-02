import express from "express";
import {
    handleGetAllUser,
    createUser,
    deleteUser,
    editUser,
    loginUser,
} from "../Controllers/Users.js";

const router = express.Router();

router.get("/api/getUsers", handleGetAllUser);
router.post("/api/createUser", createUser);
router.delete("/api/deleteUser", deleteUser);
router.put("/api/editUser", editUser);
router.post("/login", loginUser);

export default router;
