const db = require('../database/knex')

const express = require('express')
const route   = express.Router()


route.route('/app').get(async(req,res)=>{
    return db.select('*').table('jhtimol')
                         .then(jh => res.status(200).json(jh))
                         .catch(err => res.status(500).json(err))
}).post(async(req,res)=>{
    let jh = {
        nome :req.body.nome,
        email :req.body.email,
        mensagem :req.body. mensagem
    }

    return db.insert(jh).table('jhtimol')
                          .then(jh => res.status(201).json(jh))
                          .catch(err => res.status(400).json(err))
})

module.exports = route