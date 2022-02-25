import * as skilldDb from '../data/skill-db.js'

function index(req, res) {
  skilldDb.find({}, function (error, skills) {
    res.render('skills/index', {
      skills: skills,
      time: req.time,
      error: error
    })
  })
}

function show(req, res) {
  skilldDb.findById(req.params.id, function(error, skill) {
    res.render('skills/show', {
      skill: skill,
      error: error,
      title: skill.text
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}

function create(req, res) {
  skilldDb.create(req.body, function(error, skill) {
    res.redirect('/skills')
  })
}

function deleteSkill(req, res) {
  skilldDb.findByIdAndDelete(req.params.id, function(error, skill) {
    res.redirect('/skills')
  })
}

export {
    index,
    show, 
    newSkill as new,
    create, 
    deleteSkill as delete
}