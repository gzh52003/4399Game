

import {takeEvery,takeLatest,put,apply,call} from 'redux-saga/effects';
import request from '@/utils/request'

// 单元测试
 function* getUser(action){
    
    // const {data} = yield call(request.get,'/user/'+action.userid)

    // put就是dispatch
    yield put({type:action.type.replace('_async',''),user:data})
 }

 function * getNewIQ(){

 }

 function* init(){
   // 监听用户dispatch操作
   console.log('init');
   yield takeLatest('update_user_async',getUser)
   yield takeLatest('get_newiq_async',getNewIQ)
 }

 export default init;