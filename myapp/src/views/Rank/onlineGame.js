// import React from 'react'

// function onlineGame(){
//     return(
//         <div>onlineGame</div>
//     )
// }

// export default onlineGame
import React , { useState , useEffect} from 'react'

import request from '@/utils/request'
import Header from '../Header'
import { Tabs, ListView  } from 'antd-mobile';
const tabs = [
    {title: '网游', name: 'onlineGame' , path: '/onlineGame'},
    {title: '小游戏', name: 'littleGame' , path: '/littleGame'},
    {title: '热门', name: 'hotGame' , path: '/hotGame'}
]

function Rankimg(){
    
    useEffect(function () {
        async function hotData(){
            const {data} = await request.get('/mygame' , {
                page: 1,
                size: 20,
                category: "热门"
            })
            console.log('data=' , data);
        }
        hotData()
    },[])

    return(
        <div>
		<Header />
            
            <img style={{width:"92%",borderRadius: 8}} src="http://imga1.4399.cn/upload_pic/2020/9/21/4399_09060472523.gif" />

            <Tabs tabs={tabs}>
                {
                    tabs.map(item=><div key={item.title}>
                        {item.title}
                    </div>)
                }
            </Tabs>

        </div>
    )
}

export default Rankimg