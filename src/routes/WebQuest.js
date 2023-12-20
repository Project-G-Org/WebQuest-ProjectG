import express from 'express';
import {data, dbGradeError} from '../queries/usersGrades.js';

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

webQuest.get('/leaderboard', (req, res) =>{

	res.render('webQuest/leaderboard', {data});
});

export default webQuest;