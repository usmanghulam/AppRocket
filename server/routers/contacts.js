const router = require("express").Router();
const SignUp = require('../MongoDb/Schemas/signUp');
const Chat = require("../MongoDb/Schemas/usersChat");

router.post('/',(req,res,next) => {
	const { _id } = req.body;
	SignUp.find({_id:{ $ne:_id }})
	.then(users => res.status(200).json(users))
	.catch(err => res.status(400).json(err))
})

router.post("/find",(req,res)=>{
	const { sender, receiver } = req.body;
	Chat.find({$and : [{sender},{receiver}]})
	.then(chat => res.status(200).json(chat))
	.catch(err => res.status(400).json(err))
})

router.post('/submit',(req,res) => {
	let saveMsg = new Chat(req.body);
	saveMsg.save().then(resp => {
		console.log("My resp", resp)
		res.status(200).json(resp)
	}).catch(err => res.status(400).json(err));
})

module.exports = router;