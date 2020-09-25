import React, { useState, useEffect } from 'react';
import './New.scss';
import request from '@/utils/request'
import { Grid, List, ListView, Button } from 'antd-mobile';


let data = [
    {
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'Meet hotel',
        des: '不是所有的兼职汪都需要风吹日晒',
        name: 'xixi'
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'McDonald\'s invites you',
        des: '不是所有的兼职汪都需要风吹日晒',
        name: 'xixi'
    },
    {
        img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        title: 'Eat the week',
        des: '不是所有的兼职汪都需要风吹日晒',
        name: 'xixi'
    },
];
const NUM_ROWS = 20;
let pageIndex = 0;

function genData(pIndex = 0) {
    const dataBlob = {};
    for (let i = 0; i < NUM_ROWS; i++) {
        const ii = (pIndex * NUM_ROWS) + i;
        dataBlob[`${ii}`] = `row - ${ii}`;
    }
    return dataBlob;
}

class News extends React.Component {

    constructor(props) {
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });

        this.state = {
            dataSource,
            isLoading: true,
            NewGird: []
        };
    }

    async componentDidMount() {
        const { data: mydata } = await request.get('/mygame', {
            category: '益智',
            size: 100
        })
        let c = data.concat(mydata)
        data = []
        data = c
        const NewGird = await request.get('/mygame', {
            category: '热门',
            size: '8'
        })
        console.log(NewGird);
        this.setState({
            NewGird: NewGird.data
        })
        setTimeout(() => {
            this.rData = genData();
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 600);
    }

    onEndReached = (event) => {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        this.setState({ isLoading: true });
        setTimeout(() => {
            this.rData = { ...this.rData, ...genData(++pageIndex) };
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this.rData),
                isLoading: false,
            });
        }, 1000);
    }

    render() {
        const {NewGird} = this.state
        const separator = (sectionID, rowID) => (
            <div
                key={`${sectionID}-${rowID}`}
                style={{
                    backgroundColor: '#F5F5F9',
                    height: 8,
                    borderTop: '1px solid #ECECED',
                    borderBottom: '1px solid #ECECED',
                }}
            />
        );
        let index = data.length - 1;
        const row = (rowData, sectionID, rowID) => {
            if (index < 0) {
                index = data.length - 1;
            }
            const obj = data[index--];

            return (
                <div>

                    <div key={rowID} style={{ padding: '0 15px' }}>

                        <div
                            style={{ display: "-webkit-box", display: "flex", padding: "15px 0" }}
                        >
                            <img
                                style={{ height: "64px", marginRight: "15px" }}
                                src={obj.icon}
                                alt=""
                            />
                            <div style={{ textAlign: "left" }}>
                                <div style={{ marginBottom: "8px", fontWeight: "bold", color: "#333" }}>
                                    {obj.text}
                                </div>
                                <div style={{ fontSize: 14, margin: "8px 0", color: "#666" }}>
                                    {obj.category}&nbsp;|&nbsp;人气:&nbsp;{obj.wapclicks}
                                </div>
                                <div style={{ fontSize: 13, margin: "8px 0", color: "#666", width: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                    {obj.html5introduce}
                                </div>
                            </div>
                            <Button type="ghost" size="small"
                                style={{ color: "#58bc58", fontSize: "12px", position: "relative", top: 20 }}>开始玩</Button>
                        </div>
                    </div>
                </div>

            );
        };
        return (
            <div>
            <img src='/images/4399_09243781974.gif' style={{width:"94%"}} />
            <Grid data={NewGird} hasLine={false} />
            <ListView
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    {this.state.isLoading ? 'Loading...' : 'Loaded'}
                </div>)}
                renderRow={row}
                renderSeparator={separator}
                className="am-list"
                pageSize={4}
                useBodyScroll
                scrollRenderAheadDistance={500}
                onEndReached={this.onEndReached}
                onEndReachedThreshold={10}
            />
            </div>

        );
    }
}

export default News;