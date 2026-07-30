import user from "../models/user.js";

export const userController = async (req, res) => {

    try {

        const { userName, userEmail, userAge } = req.body;

        const add = await user.create({
            userName,
            userEmail,
            userAge
        });

        res.status(201).json({
            message: "User Created Successfully",
            add
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: "Internal Server Error"
        });

    }

};