import { Express } from 'express';
const webQuest = Express.Router();
import { users } from '../queries/users.js';

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

webQuest.get('/users', users.getUsers);

export default webQuest;