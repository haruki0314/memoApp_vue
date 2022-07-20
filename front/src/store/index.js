import { createStore } from "vuex";

export default createStore({
  state: {
    //状態管理用のやつ
    count: 0,
    memos: [],
  },
  getters: {
    getCount: (state) => {
      return state.memos.length;
    },
    getAll: (state) => {
      return state.memos;
    },
  },
  mutations: {
    //memoを保存するプログラムを作成
    save(state, newMemo) {
      newMemo.id = ++state.count;
      state.memos.unshift(newMemo);
    },
  },
  actions: {
    //非同期通信
  },
  modules: {},
});
