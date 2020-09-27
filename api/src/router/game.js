const express = require('express')
const router = express.Router()
const {
	formatData
} = require('../utils/tools.js')
const mongo = require('../utils/mongo')


//查看所有我的游戏
router.get('/', async (req, res) => {

	const result = await mongo.find('MyGame', {}, {})
	res.send(formatData({
		data: result
	}))

})
//查询单个游戏
router.get('/:id', async (req, res) => {
	const {
		id
	} = req.params

	const result = await mongo.find('MyGame', {
		_id: id
	})

		res.send(formatData({
			data: result[0]
		}))
	

})
//验证游戏是否保存
router.get('/verification', async (req, res) => {
	const {
		text
	} = req.params

	try {
		const result = await mongo.find('MyGame', {
			text
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	
	}

})
//新增我的游戏
router.post('/add', async (req, res) => {

	let {
		title,
		pic,
		category,
		categoryid,
		html5introduce,
		wapclicks,
		username
		
	} = req.body

	try {
		result = await mongo.insert('MyGame', {
			title,
			pic,
			category,
			categoryid,
			html5introduce,
			wapclicks,
			username
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}

})

//删除商品
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params

	try {
		const result = await mongo.remove('MyGame', {
			_id: id
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))

	}
})

module.exports = router
