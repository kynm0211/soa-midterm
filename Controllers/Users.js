import User from "../Models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const handleGetAllUser = async (req, res) => {
    try {
        let users = "";
        users = await User.find();
        users.password = undefined;
        return res.status(200).json({ users });
        // const { id } = req.body;
        // console.log(req.body);
        // let users = "";
        // if (id === "ALL") {
        //     users = await User.find();
        //     users.password = undefined;
        //     return res.status(200).json({ users });
        // }
        // if (id !== "ALL") {
        //     user = await User.findById({ id });
        //     res.status(200).json({ user });
        // }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

const checkUserExist = async (userEmail) => {
    try {
        const user = await User.find({ email: userEmail });
        if (user) {
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
};

export const createUser = async (req, res) => {
    try {
        // console.log(req.body);
        const { fullName, userName, email, password, role } = req.body.data;

        // if (checkUserExist(email))
        //     return res.status(404).json({ message: "Email is exist!" });

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullName,
            userName,
            email,
            password: passwordHash,
            role,
        });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const userId = req.body.userId;
        console.log(req.body.userId);
        const deleteUser = await User.findByIdAndDelete(userId);
        if (!deleteUser) return res.status(401).json("message: User not found");
        return res.status(200).json(deleteUser);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const editUser = async (req, res) => {
    try {
        const { _id, fullName, userName, email, role } = req.body.data;
        let dataUpdate = { fullName, userName, email, role };
        if (!_id) {
            return res.status(401).json({ message: "User not found!" });
        }
        const updateUser = await User.findByIdAndUpdate(_id, dataUpdate, {
            new: true,
        });
        if (!updateUser) {
            return res.status(401).json({ message: "Update fail !" });
        }
        res.status(200).json({ message: "Update user successfully !" });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
