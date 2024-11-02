const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { jwtAuthMiddleware,generateToken} = require('./../jwt')

router.post('/register',async(req,res)=>{
    try {
        const data = req.body
        const adminUser = await User.findOne({ roles: 'admin' });
        if (data.roles === 'admin' && adminUser) {
            return res.status(400).json({ error: 'Admin user already exists' });
        }

        const newuser = new User(data)

        const response = await newuser.save();
        console.log("data saved ");

        const payload ={
            id:response.id
        }

        console.log(JSON.stringify(payload));
        const token = generateToken(payload)
        console.log("token is ",token);
        res.cookie("token", token, {
            httpOnly:true,
            maxAge: 15 * 60 * 1000
        });

        res.status(200).json({response: response});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.post('/login', async (req,res) => {
    try {
        const { username, password } = req.body;
        const guy = await User.findOne({ username });
        console.log(guy);

        if (!guy || !(await guy.comparePassword(password))) {
            return res.status(401).json({ error: "Invalid username or password" });
        }

        const payload = {
            id: guy.id
        };

        const token = generateToken(payload)
        console.log(token);
        res.cookie("token", token, {
            httpOnly:true,
            maxAge: 15 * 60 * 1000
        });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});
router.get('/logout',(req,res) => {
    res.status(200)
    .cookie('token',"",{expires: new Date(Date.now()),
    }).json({
        success:true,
        user:"logout"
    })
})

router.get('/profile',jwtAuthMiddleware,async(req,res)=>{
    try {
        const userData = req.user;
        const userId = userData.id

        const user= await User.findById(userId)

        res.status(200).json({user})
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"internal server  error"})
     }
})
module.exports= router