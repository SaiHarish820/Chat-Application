import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {

        //const loggedInUserId = req.user._id;
        
        const allusers = await User.find().select("-password");

        res.status(201).json(allusers);

    }

    catch(error){
        console.log("Error in getuserForSidebar", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}