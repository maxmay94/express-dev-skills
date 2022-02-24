import * as skilldDb from '../data/skill-db.js'

function index(req, res) {
  skilldDb.find({}, function (error, skills) {
    res.render('skills/index', {
      skills: skills,
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

export {
    index,
    show
}