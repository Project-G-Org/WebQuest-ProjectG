const webQuest = require('express').Router();
const usersQuery = require('../queries/users');

webQuest.get('/home', (req, res) =>{
    // NOTE: Home Page
    res.render('webQuest/home');
});

webQuest.get('/material', (req, res) =>{
    // NOTE: Material Page
    res.render('webQuest/material');
});

webQuest.get('/questions', (req, res) =>{
    // NOTE: Questions Form Page
    res.render('webQuest/quests');
});

webQuest.get('/', usersQuery.test);

module.exports = webQuest;