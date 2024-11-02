const express = require('express');
const router = express.Router();
const MCQ = require('../models/mcq');
const User = require('../models/user.js')
const {jwtAuthMiddleware} = require('./../jwt.js')

const checkAdminRole = async(userId)=>{
  try {
      const  user = await User.findById(userId)
      return user.roles === "admin"
  } catch (error) {
      return false 
  }
}

router.get('/js',jwtAuthMiddleware, async (req, res) => {
  try {
    const jsMCQs = await MCQ.find({ topic: 'JavaScript' });
    res.json(jsMCQs);
  } catch (error) {
    console.error('Error fetching JavaScript MCQs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/react',jwtAuthMiddleware, async (req, res) => {
  try {
    const reactMCQs = await MCQ.find({ topic: 'React' });
    res.json(reactMCQs);
  } catch (error) {
    console.error('Error fetching React MCQs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/css',jwtAuthMiddleware, async (req, res) => {
  console.log(req.user);
  try {
    const cssMCQs = await MCQ.find({ topic: 'CSS' });
    res.json(cssMCQs);
  } catch (error) {
    console.error('Error fetching CSS MCQs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/html',jwtAuthMiddleware, async (req, res) => {
  try {
    const htmlMCQs = await MCQ.find({ topic: 'HTML' });
    res.json(htmlMCQs);
  } catch (error) {
    console.error('Error fetching HTML MCQs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/add',jwtAuthMiddleware,async(req,res)=>{
  console.log(req.user);
  
    try {
      if(! await checkAdminRole(req.user.id)){
      
        return res.status(403).json({error:"user does not have admin role"})
             
             }
     const data = req.body
     
     const newmcq = new MCQ(data)

     const response = await newmcq.save()
     res.status(200).json(response);
     console.log("data saved");
    } catch (error) {
      res.status(400).json({error:"internal server error"});
    }
})

module.exports = router;
