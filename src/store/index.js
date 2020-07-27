import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//当前配置对象的所有属性都会转绑给store对象
const store = new Vuex.Store({
// 其中放置数据和操作数据的方法
// strict:true,
state: {
  count:1,
  firstName:"DONG",
  lastName:"J"
},

mutations:{
   int(state,msg){
    state.count++
    console.log(msg.msg);
   }
},
getters:{
  fullName(state){
    return state.firstName + state.lastName
  },
  panD(state){
    return (state.count%2==0)?"偶数":"奇数"
  }
}

})

export default store