const {UserModel} =require("../models/UserModel.js");
const {createSecretToken}=require("../util/SecretToken.js");
const bcrypt=require("bcrypt");

module.exports.SignUp=async(req,res,next)=>{
    try{
        // await UserModel.collection.drop();

        const {email,username,password}=req.body;
        let existingUser=await UserModel.findOne({email});
        if(existingUser){
            return res.json({message:"User already exists"});
        }
        if (!email || !username || !password) {
            return console.log("All fields are required.");
        }
       
        const user=await UserModel.create({
            email,
            password,
            username,
        });
        
        const token =createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });

        res
        .status(201)
        .json({message:"User Signed in successfully",success:true,user});
        
        next();
    }catch(error){
        console.error(error);
    }
}

module.exports.Login=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
         
        if(!email || !password){
            return res.json({message:'All feilds are required'});
        }
        const user= await UserModel.findOne({email});
        if(!user){
            
            return res.json({message:'Incorrect password or email'});
        }
        const auth=await bcrypt.compare(password,user.password);
        const token=createSecretToken(user._id);
        res.cookie("token",token,{
            withCredentials:true,
            httpOnly:false,
        });
        res
        .status(201)
        .json({message:"User logged in successfully",success:true});
        
        next();
    }catch(error){
        console.error(error);
    }
}