import Vue from 'vue';
import $axios from '../api/request';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);


const store = new Vuex.Store({
    plugins: [createPersistedState({
        storage: window.localStorage, // 使用的缓存, 默认是localStorage
    })],
    state: {
        username: "张三",
        age: 18,
        smsCode: "",
        phone: "",
        token: "", //登录token
    },
    mutations: {
        setName(state, data) {
            state.username = data;
        },
        setCode(state, code) {
            state.smsCode = code;
        },
        setPhone(state, phone) {
            state.phone = phone;
        },
        setToken(state, token) {
            state.token = token;
        },
        delay(state) {

        }
    },
    getters: {

    },
    actions: {
        // 获取验证码
        ['SMS'](store, phone) {
            $axios.post('/user/getSmsCode', { phone }).then(res => {
                store.commit('setCode', res.smsCode);
            });
        }
    },
})
export default store;