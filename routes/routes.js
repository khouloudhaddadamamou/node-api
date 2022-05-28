const express = require('express')
const UserModel = require('../model/UserModel')
const router = express.Router()

/** create users */
router.post('/',(req,res)=>{
    const user = new UserModel({
        title:req.body.title,
        description: req.body.description
    })

    user.save().then(data=>res.send(data)).catch(err=>console.log(err, 'failed db save'))
})
/** get all users */
router.get('/', async (req, res)=>{
    try{
       const users = await UserModel.find() 
       res.json(users)
    }catch(err){
        console.log({message:err})
    }
})

/** get individual user */
router.get('/:userId', async (req, res)=>{
    try{
       const user = await UserModel.findById(req.params.userId) 
       res.json(user)
    }catch(err){
        console.log({message:err})
    }
})
//update the user
router.patch('/:userId', async (req,res)=>{
    try{
       const updateUser = await UserModel.updateOne(
            {_id:req.params.userId},
            {
                $set:{
                title:req.body.title, 
                description:req.body.description
                }
            });
            res.json(updateUser)
    }catch(err){
        res.send({message:err})
    }
})

router.delete('/:userId', async (req, res) =>{
    try{
        const deletedUser = await UserModel.remove({_id:req.params.userId})
        res.json(deletedUser)
    }catch(err){
        res.send({message:err})
    }
})
module.exports = router