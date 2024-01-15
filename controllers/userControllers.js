const User=require("../models/userSchema")
const addUser=async(req,res) =>{
try{
    const newUser=new User(req.body)
    await newUser.save()
    res.status(101).json({message:"user added successfully",newUser})
    }
catch(error){
    res.status(500).json({message:error.message})
    }
}

const getUser=async(req,res)=>{
    try{
        const contact=await User.find()
        res.status(200).json({message:"find all user",user})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const updateUser=async(req,res)=>{
    try{
        const id=req.params.id
        const cont=req.body
        const updateuser=await Contact.findByIdAndUpdate(id,cont,{new:true})
        
        res.status(200).json({message:"user updated successfully",updateuser})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteUser=async(req,res)=>{
    try{
        const id=req.params.id

        const removeuser= await User.findByIdAndDelete(id)
        res.status(200).json({message:"user deleted successfully",removeuser})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={addUser,getUser,updateUser,deleteUser};