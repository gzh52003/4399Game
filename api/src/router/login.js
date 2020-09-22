const express = require('express')
const router = express.Router()
const mongo = require('../utils/mongo')
const token = require('../utils/token')
const {formatData,md5} = require('../utils/tools')


//登陆


router.get('/', async (req, res) => {

	let {
		username,
		password,
		vcode,
		mdl,
	} = req.query

	// console.log(req,999);
	
 if (vcode !== req.session.vcode) {
        res.send(formatData({ code: 10 }))
        return;
    }

	password = md5(password)

	let result = await mongo.find('user', {
		username,
		password,
		
		
	},{
		field: {
			password: false
		}
	})

	if (result.length > 0) {
		//用户名、密码、验证码都校验通过后，判断是否有免登录选项
		if (mdl === 'true') {

			const authorization = token.create({
				username
			})
			result = result[0]
			result.authorization = authorization

			res.send(formatData({
				data: result[0]
			}))
			return
		}
		res.send(formatData({data: result[0]}))
	} else {
		res.send(formatData({
			code: 0
		}))
	}
})


module.exports = router
