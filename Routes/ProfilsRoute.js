

const express= require('express')
const { AddContact, ReadContact, DeleteContact, updateContact, ProfilsContact } = require('../Controllers/Profile')

const ProfilsRoute= express.Router()

ProfilsRoute.post('/AddContact',AddContact)

ProfilsRoute.get('/ReadContact',ReadContact)

 ProfilsRoute.delete('/DeleteContact/:id',DeleteContact)

 ProfilsRoute.put('/updateContact/:id',updateContact)

 ProfilsRoute.get('/ProfilsContact/:id',ProfilsContact)


module.exports = ProfilsRoute