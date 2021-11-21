const db = require('../database/knex')

const express = require('express')
const route   = express.Router()

route.route('/app').get(async(req,res)=>{
    return db.select('*').table('testando')
                         .then(test => res.status(200).json(test))
                         .catch(err => res.status(500).json(err))
}).post(async(req,res)=>{
    let test = {
        msg :req.body.msg
    }

    return db.insert(test).table('testando')
                          .then(test => res.status(201).json(test))
                          .catch(err => res.status(400).json(err))
})

route.route('/app/:id').put(async(req,res)=>{
    let test = {
        msg :req.body.msg
    }

    return db.where({id: req.params.id})
                          .table('testando')
                          .update(test)
                          .then(_ => res.status(201).json(_))
                          .catch(err => res.status(400).json(err))
}).delete(async(req,res)=>{
    return  db.where({id: req.params.id}).table('testando')
                          .delete()
                          .then(_ => res.status(204).json(_))
                          .catch(err => res.status(400).json(err))
}) 

module.exports = route