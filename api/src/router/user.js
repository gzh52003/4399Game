const express = require('express')
const router = express.Router()
const mongo = require('../utils//mongo')
const {
	formatData,
	md5
} = require('../utils/tools')


//查询用户
router.get('/', async (req, res) => {
	//
	const {
		page = 1, size = 10
	} = req.query
	const limit = size * 1
	const skip = (page - 1) * size


	//mongo
	const result = await mongo.find('user', {}, {
		limit,
		skip,
		field: {
			password: false
		}
	})

	res.send(formatData({
		data: result
	}))


})
//专为分页打造的接口
router.get('/paging', async (req, res) => {
	//
	//mongo
	const result = await mongo.find('user', {}, {
		field: {
			password: false
		}
	})

	res.send(formatData({
		data: result
	}))


})

//获取单个用户
router.get('/:id', async (req, res) => {
	//
	const {
		id
	} = req.params
	const result = await mongo.find('user', {
		_id: id
	}, {
		field: {
			password: false
		}
	})


	res.send(formatData({
		data: result[0]
	}))


})

//新增用户

router.post('/', async (req, res) => {

	let {
		username,
		password,
		age,
		gender,
		avatarUrl,
		power
	} = req.body


	password = md5(password)

	let result

	try {

		result = await mongo.insert('user', {
			username,
			password,
			age,
			gender,
			avatarUrl,
			power
		})
		res.send((formatData()))
	} catch (err) {
		res.send(formatData({
			code: 0
		}))

	}
})
//删除用户
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params
	try {
		await mongo.remove('user', {
			_id: id
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}
})
//修改用户
router.put('/:id', async (req, res) => {

	const {
		id
	} = req.params


	let {
		passowrd,
		age,
		gender,
		avatarUrl,
		power

	} = req.body


	let newData = {
		passowrd,
		age,
		gender,
		avatarUrl,
		power
	}

	if (passowrd) {
		passowrd = md5(password)
		newData.password = password
	}

	try {
		await mongo.update('user', {
			_id: id
		}, {
			$set: newData
		})
		res.send(formatData({
			data: {
				_id: id,
				...newData
			}
		}))
	} catch (err) {

		res.send(formatData({
			code: 0
		}))
	}

})


module.exports = router
