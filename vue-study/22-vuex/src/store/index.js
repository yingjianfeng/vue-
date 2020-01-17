import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 1000,
    students:[
      {id:110,name:'why',age:10},
      {id:111,name:'kobe',age:20},
      {id:112,name:'james',age:30},
      {id:113,name:'curry',age:40},
    ]
  },
  mutations: {
    //方法
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,payload){
      //state.counter+=count
      console.log(payload);
      state.counter += payload.count
    },
    addStudent(state,stu){
      state.students.push(stu)
    }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    powerCount(state){
      return state.counter*state.counter
    },
    more20Stu(state){
      return state.students.filter(s=> s.age>=20 )
    },
    more20Stulength(state,getters){
     return getters.more20Stu.length
    },
    moreAgeStu(state){
      return function (age) {
        return state.students.filter(s=> s.age>=age )
      }
    }
  }
})
