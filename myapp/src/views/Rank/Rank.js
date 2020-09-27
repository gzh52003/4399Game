import React, { useState, useEffect } from 'react'

import request from '@/utils/request'

import './Rank_index.css'
import Header from '../Header.js'
import { Tabs, ListView , Button } from 'antd-mobile';

const tabs = [
    {title: '网游', name: 'onlineGame' , path: '/onlineGame' , text: '网游'},
    {title: '小游戏', name: 'littleGame' , path: '/littleGame' , text: '益智'},
    {title: '热门', name: 'hotGame' , path: '/hotGame' , text: '热门'}

]

let pageIndex = 1

function Rankimg(){
    let [category , changeGame] = useState('网游')
    let [pageIndex , changePage] = useState('1')

    const ds = new ListView.DataSource({
        rowHasChanged: () => true
    })
    const [dataSource, setDataSource] = useState(ds)
    async function hotData(page, category) {
        const { data } = await request.get('/mygame', {
            page,
            category
        })
        setDataSource(dataSource.cloneWithRows([...data,...data]))
    }
    useEffect(function () {
        hotData(pageIndex,category)
    },[category,pageIndex])
  
    function renderItem(rowData , rowID) {

        return (
            <div key={rowID} style={{ padding: "0 15px" , borderBottom:"5px solid #ccc"}}>
                <div
                    style={{ display: "-webkit-box", display: "flex", padding: "15px 0" }}
                >
                    <img
                    style={{ height: "64px", marginRight: "15px"}}
                    src={rowData.icon}
                    alt=""
                    />
                    <div style={{ textAlign: "left" }}>
                        <div style={{ marginBottom: "8px", fontWeight: "bold", color: "#333" }}>
                            {rowData.text}
                        </div>
                        <div style={{ fontSize: 14, margin: "8px 0", color: "#ccc" }}>
                            {rowData.category}&nbsp;|&nbsp;人气:&nbsp;{rowData.wapclicks}
                        </div>
                        <div style={{ fontSize: 14, margin: "8px 0", color: "#ccc", width: 200, overflow: "hidden", textOverflow: "ellipsis" }}>
                            {rowData.html5introduce}
                        </div>
                    </div>
                    <Button type="ghost" size="small"
                        style={{ color: "#58bc58", position: "relative", top: 20 }}>开始玩</Button>
                </div>
            </div>
        )
    }
    return (
        <div>
				<Header />
            <img src="http://imga1.4399.cn/upload_pic/2020/9/21/4399_09060472523.gif" style={{width:"92%",borderRadius: 8}} />

            <Tabs tabs={tabs} 
            onChange={tab=>{
                changeGame(category = tab.text)
            }
            }>
                <div>
                    <ListView
                    loading={false}
                    dataSource={dataSource}
                    renderRow={renderItem}
                    initialListSize={20}
                    pageSize={15}
                    onEndReached={event => {
                        changePage(++pageIndex)
                    }}
                    onEndReachedThreshold={50}
                    style={{height: "100%"}}
                    />
                </div>
            </Tabs>
        </div>
    )
}

export default Rankimg