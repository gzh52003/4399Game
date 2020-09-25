import React,{useReducer,useState,useCallback,lazy,useHistory} from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
class Collection extends React.Component{
    render(){
        const tabs = [
            { title: <Badge>我玩过的</Badge> },
            { title: <Badge>我的收藏</Badge> },
          ];
          
        return(
            <div>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                leftContent="返回"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                <span>编辑</span>
                ]}
                style={{background:"#45b0e4"}}
            >我的游戏</NavBar>
            <Tabs tabs={tabs}
            initialPage={1}
            animated={false}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
             ></Tabs>
    </div>
        )
    }
}
export default Collection;