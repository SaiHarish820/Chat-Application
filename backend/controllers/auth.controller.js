import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const signup = async (req,res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
    
        if (password !== confirmPassword) {
            return res.status(400).json({ Error: "Passwords don't match" });
        }
    
        const user = await User.findOne({ username });
    
        if (user) {
            return res.status(400).json({ Error: "Username already exists" });
        }
    
        // HASH THE PASSWORD
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        // https://avatar-placeholder.iran.liara.run/
        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/${username}`;
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/${username}`;
    
        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        });
    
        await newUser.save();
    
        res.status(201).json({
            _id: newUser.id,
            fullName: newUser.fullName,
            username: newUser.username,
            password: newUser.password,
            profilePic: newUser.profilePic,
        });
    
    } catch (error) {
        console.log("Error in Signup controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
    
};

export const login = (req,res) => {
   
};

export const logout = (req,res) => {
    
};