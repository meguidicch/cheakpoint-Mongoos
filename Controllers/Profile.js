const User = require("../Model/User")


exports.AddContact=async(req,res)=>{
try{

const trouver = await User.findOne({email: req.body.email})
if (trouver){
    return res.status(400).send('email déjà existant choiser un autre')
}
const NewProfile= new User(req.body)
await NewProfile.save()
res.status(200).send({Msg :'succees',NewProfile})
}catch(error){
    res.send(500).send('could not AddContact')
}
}

exports.ReadContact=async(req,res)=>{
try{
    const contacts = await Contact.find()
res.status(200).send({Msg:"List of contacts",contacts})
}catch(error){
    res.send(500).send('Could not find contacts')
}
}

exports.DeleteContact=async(req,res)=>{
    try{
        const {id}=req.parmas
        await Contact.findByIdAndDelete(id)
res.status(200).send({Msg: 'Contact deleted'})
    }catch(error){
        res.send(500).send('Could not delete contact')
    }
}

exports.updateContact=async(req,res)=>{
    try{
        const {id}=req.parmas
        await Contact.findByIdAndUpdate(id,{$set: req.body})
res.status(200).send({Msg :'Contact Update'})
    }catch(error){
        res.send(500).send('Could not Update contact')
    }
}

exports.ProfilsContact=async(req,res)=>{
    try{
        const {id} =req.parmas
        const Contact = await Contact.findById(id)
res.status(200).send({Msg :'Contact founded',found})
    }catch(error){
        res.send(500).send('Could not find contact')
    }
}