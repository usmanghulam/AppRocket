const router = require('express').Router();
const SignUp = require('../MongoDb/Schemas/signUp');

router.post("/",(req,res)=>{
	let users = new SignUp(req.body.values);
	users.save()
	.then(resp => res.status(200).json({user:resp}))
	.catch(err => res.status(400).json(err))
})

module.exports = router;