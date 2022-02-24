const skills = [
  {text: 'computer hacking', hasSkill: true, _id: 6942069},
  {text: 'nunchuck skills', hasSkill: false, _id: 6666666},
  {text: 'drawing realistic ligers', hasSkill: true, _id: 1234567},
  {text: 'typing', hasSkill: true, _id: 1233214},
  {text: 'editing', hasSkill: false, _id: 9874321},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, todos)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skills = skills.find(skill => skill._id === parseInt(id))
    if (!todo) throw new Error ('No skill was found')
    return callback(null, todo)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

export { 
	find,
  findById
}