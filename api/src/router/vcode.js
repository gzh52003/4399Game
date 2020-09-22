const express = require('express')
const router = express.Router()
const svgCaptcha = require('svg-captcha')

const {
	formatData
} = require('../utils/tools')

//生成验证码

router.get('/', async (req, res) => {

	//生成图像验证码： svg-captcha

	const options = {
		noise: 3,
		ignoreChars: '0oli1',
		bacgground: '#58bc58',
		color: 'true',
		fontSize: 50,
		height: 54
	}


	//验证码在这里生成s
	const captcha = svgCaptcha.create(options)

	//把验证码存入会话 Session

	req.session.vcode = captcha.text.toLowerCase()
	
	// console.log(req.session);
	res.send(formatData({
		data: captcha.data
	}))


})

module.exports = router
