import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react';

class Navbar extends React.Component{
render(){
    const tabs = [
        { title: <Badge >推荐</Badge> },
        { title: <Badge >最新</Badge> },
        { title: <Badge >排行</Badge> },
        { title: <Badge >分类</Badge> },
        { title: <Badge >论坛</Badge> },
      ];
    return(
        <div>
            <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
      animated={false}
      
    >
    </Tabs>
        </div>
    )
}
}
export default Navbar