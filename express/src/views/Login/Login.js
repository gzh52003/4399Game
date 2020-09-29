import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import request from '../../utils/request';
import CryptoJS from 'crypto-js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import userAction,{login} from '../../store/actions/user'


const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

function Login(props){
    console.log(props);
    const onFinish = async ({username,password,mdl}) => {
        // password = CryptoJS.SHA256(password);
        // password = CryptoJS.enc.Hex.stringify(password)
        console.log(password);
        const data = await request.get('/login',{
            username,
            password,
            mdl
        })
        console.log(data);
        if(data.status === 200){
            props.login(data.data)
            //跳转到我的页面
            props.history.push('/home')
        }
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    const rules = {
        username:[{ request: true,message:'用户名必填'}],
        password:[{ request:true,message:'密码必填'}]
    }
    return (
        <div className="container">
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
        <Form.Item
            label="用户名"
            name="username"
            rules={rules.username}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
            rules={rules.password}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            登录
            </Button>
        </Form.Item>
        </Form>
    </div>
    )
}
export default Login;