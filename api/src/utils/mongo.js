/** 
 *Mongo数据库操作封装
 * 
 * */

const {
	MongoClient,
	ObjectId
} = require('mongodb');

//mongodb数据库地址
const url = 'mongodb://localhost:27017'
//数据库名
const dbName = 'gz2003'

async function connect() {
	//client :mongo客户端

	const client = await MongoClient.connect(url)
	const db = client.db(dbName)

	return {
		client,
		db
	}


}

//增
async function insert(colName, data) {
	//1. 链接数据库
	const {
		db,
		client
	} = await connect()

	//2.添加数据
	//根据传入的集合名称获取数据库中的某个集合
	const collection = db.collection(colName)

	const result = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data)
	//关闭连接
	client.close()

	return result
}

//删

async function remove(colName, query) {
	const {
		db,
		client
	} = await connect()

	if (query._id && typeof query._id === 'string') {
		query._id = ObjectId(query._id)
	}

	const collection = db.collection(colName)

	const result = await collection.deleteMany(query)

	client.close()
	return result

}

//改 
async function update(colName, query, newData) {
	const {
		db,
		client
	} = await connect()

		
	const collection = db.collection(colName)

	if (query._id && typeof query._id === 'string') {
		query._id = ObjectId(query._id)

	}
	
	const result = await collection.updateMany(query, newData)
	return result
}

//查
async function find(colName, query = {}, options = {}) {


	const {
		db,
		client
	} = await connect()

	const collection = db.collection(colName)
	//查询到数据集合
 if(query._id && typeof query._id === 'string'){
        query._id = ObjectId(query._id);
    }

 const opt = {}
    if(options.field){
        opt.projection = options.field;
    }
	let result = collection.find(query,opt)
	//判断是否要跳过记录
	if (options.skip) {
		result = result.skip(options.skip)
	}
	if (options.limit) {
		result = result.limit(options.limit)
	}

	//排序
	if (options.sort) {
		let key, val
		key = options.sort[0]
		if (options.sort.length > 1) {
			val = options.sort[1] * 1
		} else {
			val = -1
		}
		result = result.sort({
			[key]: val
		})
	}

	result = await result.toArray()
	client.close()
	return result
}

module.exports = {
	insert,
	remove,
	update,
	find
}
