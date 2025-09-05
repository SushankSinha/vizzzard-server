const {USER} = require("../models/userSchema");

const addUser = async(req, res)=>{
    const {first_name, last_name, email, password} = req.body

    if(!first_name || !last_name || !email || !password){
        res.status(401).json("User Data Missing")
    }

    try {
        const userExist = await USER.findOne({email:email});
        
        if(userExist){
            res.status(422).json("User already Exits")
        }

        const new_user = new USER({first_name, last_name, email, password})
        const save_data = await new_user.save();
        
        if(save_data){
            res.status(201).json({message:"User Added"})
        }
    } catch (error) {
        res.status(500).json(error)
    }
    
}

module.exports = {addUser}