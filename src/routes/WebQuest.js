import express from 'express';
const  webQuest = express.Router();

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

export default webQuest;