import React, { useState, useEffect } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './search.css'
import request from '@/utils/request'
import Item from 'antd-mobile/lib/popover/Item';
class Search extends React.Component{ 
   
  state={
    hotdata:[]
  }
  
  async componentDidMount(){
     const {data} = await request.get("/mygame",{
            page:1,
            size:8,
            category:"热门"
          })
          this.setState({
            hotdata:data
          })
  }
 
   change=async()=>{
    const {data} = await request.get("/mygame",{
      page:parseInt(Math.random()*15+1),
      size:8,
      category:"热门"
    })
    this.setState({
      hotdata:data
    })
  }
  
  
  render(){
    const {hotdata}=this.state
   return(
    <div style={{borderBottom:"1px solid #f5f5f5"}}>
      <NavBar
        mode="dark"
        icon={<Icon type="left" />}
        onLeftClick={() => console.log('onLeftClick')}
        style={{fontSize:"14px",color:"#fff",height:"48px"}}
      >搜索</NavBar>
      <div style={{width:"100%",background:"#fff"}}>
        <SearchBar
        showCancelButton="false"
        placeholder="请输入游戏名称"
        cancelText=" "
        style={{width:"279px",height:"32px",padding:"8px 0 8px 27px",background:"#fff",float:"left"}}
      />
      <span style={{display:"block",height:"48px",width:"42px",float:"left",lineHeight:"48px",textAlign:"center",background:"#fff",color:"#999",fontSize:"16px",fontWeight:"bold",paddingRight:"27px"}}>
        搜索
      </span>
      </div>
      
      <div className="hotSearch" style={{
        paddingLeft :"22px",width:"352px",float:"left",background:"#fff"}}>
        <p style={{height:"42px",lineHeight:"42px",fontSize:"14px",color:"#999",margin:"0"}}>热门搜索</p>
        <ul style={{width:"100%",padding:"0",height:"200px",margin:"0 0 15px 0"}}>
        {hotdata.map(item=><li key={item.text} style={{listStyle:'none',border:"1px solid #ddd",borderRadius:"5px",width:"38%",float:"left",marginLeft:"2%",height:"40px",verticalAlign:"middle",textAlign:"left",padding:"0 7px",margin:"5px"}}>
        <img src={item.icon} key={item.icon} style={{width:"25px",height:"25px",lineHeight:"40px",paddingTop:"10px",marginRight:"6px",display:"block",float:"left"}}/>
        <span style={{lineHeight:"40px",fontSize:"14px",color:"#888",paddingBottom:"5px",display:"block",float:"left",width:"100px",height:"40px",overflow:"hidden"}}>{item.text}</span>
        </li>)}
        </ul>
      </div>
      <Button style={{float:"left",background:"#08c079",width:"85%",marginLeft:"6%",height:"40px",textAlign:"center"}} onClick={this.change} >
      <svg t="1600853551144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1446" width="18" height="18" style={{display:"block",float:"left",lineHight:"40px",marginLeft:"105px",marginTop:"11px"}}><path d="M736.089731 134.326335l140.251278 0c15.485693 0 28.106128-12.145621 28.106128-27.085892 0-14.938224-12.620435-27.083845-28.106128-27.083845L595.359546 80.156598l0 54.169737 0 7.091512 0 209.28556c0 14.935154 12.552897 27.013237 28.03552 27.013237 15.554254 0 28.106128-12.078083 28.106128-27.013237l0-192.09504c142.706189 55.04671 253.899664 192.09504 253.899664 352.47168 0 208.806653-175.927825 378.662179-392.922974 378.662179-216.857003 0-394.081357-169.855526-394.081357-378.662179 0-190.391235 139.708925-350.429161 336.439542-376.754736l28.106128 0c15.552208 0 28.105105-12.145621 28.105105-27.085892 0-14.938224-12.552897-27.083845-28.105105-27.083845l-28.106128 0C230.062769 106.97029 62.389956 290.808272 62.389956 511.081071c0 238.614539 201.714118 432.762331 449.611068 432.762331s449.609021-194.147792 449.609021-432.762331C961.610044 353.159342 866.448708 211.475436 736.089731 134.326335L736.089731 134.326335z" p-id="1447" fill="#ffffff"></path></svg>
      <span style={{fontSize:"15px",color:"#fff",display:"block",float:"left",lineHeight:"40px",width:"60px"}}>换一批</span>
      </Button>

        </div>
  
  )
}
 

  }
  export default Search