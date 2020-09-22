const express = require('express')
const router = express.Router()
const mongo = require('../utils//mongo')
const {
	formatData,
	md5
} = require('../utils/tools')


//查询游戏，可分页和分类
router.get('/', async (req, res) => {
	//
	const {
		page = 1, size = 10,category
	} = req.query
	const limit = size * 1
	const skip = (page - 1) * size


	//mongo
	const result = await mongo.find('Game', {category}, {
		limit,
		skip,
	})

	res.send(formatData({
		data: result
	}))


})
//正则匹配搜索
router.get('/search', async (req, res) => {
	//
	let {search} = req.params
	//mongo
	const result = await mongo.find('Game', {search}, {})

	res.send(formatData({
		data: result
	}))


})
//专为分页打造的接口
router.get('/paging', async (req, res) => {
	//
	//mongo
	const result = await mongo.find('Game', {title:{$regex:}, {})

	res.send(formatData({
		data: result
	}))


})

//获取单个游戏
router.get('/:id', async (req, res) => {
	//
	const {
		id
	} = req.params
	const result = await mongo.find('Game', {
		_id: id
	}, {})
	

	res.send(formatData({
		data: result[0]
	}))


})

//新增游戏

router.post('/', async (req, res) => {

	let {
		
		title,
		pic,
		category,
		categoryid,
		html5introduce,
		wapclicks
		
	} = req.body



	let result

	try {

		result = await mongo.insert('Game', {
		
			title,
			pic,
			category,
			categoryid,
			html5introduce,
			wapclicks
		})
		res.send((formatData()))
	} catch (err) {
		res.send(formatData({
			code: 0
		}))

	}
})
//删除游戏
router.delete('/:id', async (req, res) => {
	const {
		id
	} = req.params
	try {
		await mongo.remove('Game', {
			_id: id
		})
		res.send(formatData())
	} catch (err) {
		res.send(formatData({
			code: 0
		}))
	}
})
//修改游戏
router.put('/:id', async (req, res) => {

	const {
		id
	} = req.params


	let {
		
		title,
		pic,
		category,
		categoryid,
		html5introduce,
		wapclicks
		
	} = req.body


	let newData = {
	
		title,
		pic,
		category,
		categoryid,
		html5introduce,
		wapclicks
	}

	try {
		await mongo.update('Game', {
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
