import React from 'react';
import './recommend.scss';
import request from '@/utils/request'
import Header from '../Header.js'
import { Carousel, WingBlank, Grid, List, Badge, ListView, Card, WhiteSpace, Icon, } from 'antd-mobile';
const menu = [{
    text: '网游',
    icon: '/images/recommend/sort-webgame.png'
}, {
    text: '女生',
    icon: '/images/recommend/sort-gril.png'
}, {
    text: '闯关',
    icon: '/images/recommend/4399_10514219818.png'
}, {
    text: '对战',
    icon: '/images/recommend/sort-battle.png'
}, {
    text: '火柴人',
    icon: '/images/recommend/4399_10514252690.png'
}]
const Item = List.Item;
const Brief = Item.Brief;

class Recommend extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 176,
        DataOne: [],
        HotGame: [],
        DataTwo: [],
        MailGame: [],
        DataThree: [],
        RecGame: [],
        DataFour: []
    }
    async componentDidMount() {
        const DataOne = await request.get('/mygame', {
            category: 'h1'
        })
        const HotGame = await request.get('/mygame', {
            category: 'hotGame'
        })
        const DataTwo = await request.get('/mygame', {
            category: 'h2'
        })
        const MailGame = await request.get('/mygame', {
            category: 'mailGame'
        })
        const DataThree = await request.get('/mygame', {
            category: 'h3'
        })
        const RecGame = await request.get('/mygame', {
            category: 'recGame'
        })
        const DataFour = await request.get('/mygame', {
            category: 'h4'
        })
        this.setState({
            DataOne: DataOne.data,
            HotGame: HotGame.data,
            DataTwo: DataTwo.data,
            MailGame: MailGame.data,
            DataThree: DataThree.data,
            RecGame: RecGame.data,
            DataFour: DataFour.data,
        })
    }
    render() {
		
        const { DataOne,HotGame,DataTwo,MailGame,DataThree,RecGame,DataFour } = this.state
        return (
            <div>
				<Header />
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`images/${val}.gif`}
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <Grid data={menu} square={false} columnNum={5} className="not-square-grid" />
                <List className="my-list">
                    <Badge text={'热'} corner>
                        <div className="corner-badge">
                            <Item thumb={'/images/recommend/4399_17004162004.jpg'}>
                                <span>超级寿司猫</span>
                                <p>超级寿司猫准备出发啦！</p>
                            </Item>
                        </div>
                    </Badge>
                </List>
                <List className="my-list">
                    {DataOne.map(item => {
                        return (
                            <Item extra="开始玩" align="top" thumb={item.icon} multipleLine key={item._id}>
                                <span>{item.text}</span><Brief>{item.title}</Brief>
                            </Item >
                        )
                    })}
                </List>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card>
                        <Card.Header
                            title="热门游戏"
                            extra={<span> <Icon type="right" /></span>}
                        />
                        <Card.Body>
                            <div>
                                <Grid data={HotGame} hasLine={false} square={false} className="not-square-grid" />
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <List className="my-list">
                    {DataTwo.map(item => {
                        return (
                            <Item extra="开始玩" align="top" thumb={item.icon} multipleLine key={item._id}>
                                <span>{item.text}</span><Brief>{item.title}</Brief>
                            </Item >
                        )
                    })}
                </List>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card class='MailGame'>
                        <Card.Header
                            title="女生游戏"
                            extra={<span> <Icon type="right" /></span>}
                        />
                        <Card.Body>
                            <div>
                                <Grid data={MailGame} hasLine={false} square={false} className="not-square-grid" />
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <List className="my-list">
                    {DataThree.map(item => {
                        return (
                            <Item extra="开始玩" align="top" thumb={item.icon} multipleLine key={item._id}>
                                <span>{item.text}</span><Brief>{item.title}</Brief>
                            </Item >
                        )
                    })}
                </List>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <Card class='RecGame'>
                        <Card.Header
                            title="小游戏推荐"
                            extra={<span> <Icon type="right" /></span>}
                        />
                        <Card.Body>
                            <div>
                                <Grid data={RecGame} hasLine={false} square={false} className="not-square-grid" />
                            </div>
                        </Card.Body>
                    </Card>
                    <WhiteSpace size="lg" />
                </WingBlank>
                <List className="my-list">
                    {DataFour.map(item => {
                        return (
                            <Item extra="开始玩" align="top" thumb={item.icon} multipleLine key={item._id}>
                                <span>{item.text}</span><Brief>{item.title}</Brief>
                            </Item >
                        )
                    })}
                </List>
                <div className='service'>
                    <span>
                    <svg t="1600853846035" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1907" width="15" height="15"><path d="M704 512H320c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3h384c11.8 0 21.3-9.6 21.3-21.3 0-11.7-9.5-21.3-21.3-21.3z m0 170.7H320c-11.8 0-21.3 9.6-21.3 21.3 0 11.8 9.6 21.3 21.3 21.3h384c11.8 0 21.3-9.6 21.3-21.3 0-11.8-9.5-21.3-21.3-21.3zM565.2 415.1l1 1c8 8 21.1 8 29.1 0l315.9-315.9c8-8 8-21.1 0-29.1l-1-1c-8-8-21.1-8-29.1 0L565.2 385.9c-8 8.1-8 21.1 0 29.2zM896 320c-11.8 0-21.3 9.6-21.3 21.3V896c0 11.8-9.6 21.3-21.3 21.3H170.7c-11.8 0-21.3-9.6-21.3-21.3V128c0-11.8 9.6-21.3 21.3-21.3H640c11.8 0 21.3-9.6 21.3-21.3 0-11.8-9.6-21.3-21.3-21.3H149.3c-23.6 0-42.7 19.1-42.7 42.7v810.7c0 23.6 19.1 42.7 42.7 42.7h725.3c23.6 0 42.7-19.1 42.7-42.7v-576c0-11.9-9.5-21.5-21.3-21.5z m-576 64h128c11.8 0 21.3-9.6 21.3-21.3 0-11.8-9.6-21.3-21.3-21.3H320c-11.8 0-21.3 9.6-21.3 21.3 0 11.7 9.5 21.3 21.3 21.3z" fill="#000000" p-id="1908"></path></svg>
                        问题反馈</span>
                    <span>
                    <svg t="1600854312348" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2810" width="17" height="17"><path d="M856 504.576a55.84 55.84 0 0 0-48 16.256V480a296 296 0 0 0-592 0h-48C168 290.016 322.016 136 512 136S856 290.016 856 480v24.576z m-26.56 172.256A344.096 344.096 0 0 1 512 888v-48c131.264 0 242.56-85.44 281.344-203.744 4.224 18.912 18.016 34.24 36.064 40.576z" fill="#36383F" p-id="2811"></path><path d="M512 864m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z" fill="#36383F" p-id="2812"></path><path d="M848 456a104 104 0 0 1 104 104v64a104 104 0 0 1-208 0v-64a104 104 0 0 1 104-104z m0 48a56 56 0 0 0-56 56v64a56 56 0 0 0 112 0v-64a56 56 0 0 0-56-56zM176 456a104 104 0 0 1 104 104v64a104 104 0 0 1-208 0v-64a104 104 0 0 1 104-104z m0 48a56 56 0 0 0-56 56v64a56 56 0 0 0 112 0v-64a56 56 0 0 0-56-56z" fill="#36383F" p-id="2813"></path></svg>
                    联系方式</span>
                </div>
                <div class="ft">
                    <section>
                        <img src="/images/logo-ft.png" />
                        <p>作品版权归作者所有，如果侵犯了您的版权，请联系我们，本站将在3个工作日内删除</p>
                    </section>
                </div>
                <div class="tip">
                <p> 本公司产品适用10周岁以上玩家
                    | <a href="http://web.4399.com/jiazhang/">未成年人家长监护</a> | <a href="http://web.4399.com/local/200810/22-1230.html">隐私政策</a>
                </p>
                <p> 抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。 </p>
                <p> 适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。 </p>
                <p> 纠纷处理(客服电话):4006334399(转6)
                    <a href="http://net.china.cn/chinese/index.htm">不良信息举报中心</a>
                </p>
                <p>
                    <a href="http://beian.miit.gov.cn/">ICP证:闽B2-20040099</a>
                    <a href="http://sq.ccm.gov.cn/ccnt/sczr/service/business/emark/toDetail/9F5113E34F5E4443A68F11E8A6E2685C">闽网文[2018]9590-427号</a>
                    <a href="http://www.4399.com/zs/chuban.html">新出网证（闽）字06号</a>
                </p>
                <p> Copyright©2004 - 2020 4399.com All Rights Reserved. </p>
                <p> 四三九九网络股份有限公司 版权所有 </p>
                <p>
                    <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302000081">
                        <img src='/images/ma_330_20180102184423_5a4b62871b765.png' /> 闽公网安备 35020302000081号</a>
                </p>
            </div>
            </div>
        );

    }

}

export default Recommend;