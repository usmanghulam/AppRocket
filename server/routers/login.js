const router = require("express").Router();
const SignUp = require("../MongoDb/Schemas/signUp");

router.post("/",(req,res)=>{
  const { email, password } = req.body.values;
	SignUp.findOne({email, password})
	.then(resp => res.status(200).json(resp))
	.catch(err => res.status(400).json(err))
})

module.exports = router;