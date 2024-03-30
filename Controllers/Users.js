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

export const createUser = async (req, res) => {
    try {
        const { fullName, userName, email, password, role } = req.body;

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
