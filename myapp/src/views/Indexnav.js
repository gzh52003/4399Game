import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import React,{useState} from 'react';
import { withRouter ,useHistory} from 'react-router-dom';
function Indexnav(){
	let history =useHistory()
	console.log(history)
    const tabs = [
        { title: <Badge >推荐</Badge>,path:'/recommend' },
        { title: <Badge >最新</Badge>, path:'/recommend'},
        { title: <Badge >排行</Badge>, path:'/rankimg'},
        { title: <Badge >分类</Badge> ,path:'/recommend'},
        { title: <Badge >论坛</Badge> ,path:'/recommend'},
      ];
	  
	  const [state] = useState(tabs)
    return(
	
        <div>
            <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) =>history.push(tab.path)}
      animated={false}

    >
    </Tabs>
        </div>
    )

}
export default Indexnav