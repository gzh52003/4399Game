import axios from 'axios'


const request = axios.create({
	baseURL:'http://39.107.234.250:20030/api',
	withCredentials:true
	
})


export async function get(url,data,config={}){
	
	const {data:result} = await request({
		...config,
		url,
		method:'get',
		params:data
		
	})
	return result
}

export async function post(url,data,config={}){
	const {data:result} = await request({
		method:'post',
		url,
		data,
		...config
		
	})
	
	return result
}

export async function put(url,data,config={}){
		const {data:result} = await request({
			
				...config,
				url,
				method:'put',
				data
		})
	return result
	
}

export async function remove(url,data,config={}){
	
		const {data:result} = await request({
			...config,
			method:'delete',
			url,
			params:data
			
		})
	return result
}

export default{
	get,
	post,
	put,
	remove
}