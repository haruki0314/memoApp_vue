import { createStore } from "vuex";

export default createStore({
  state: {
    //状態管理用のやつ
    memos: [],
  },
  getters: {},
  mutations: {
    //memoを保存するプログラムを作成
    save(state, newMemo) {
      state.memos.unshift(newMemo);
    },
  },
  actions: {
    //非同期通信
  },
  modules: {},
});
