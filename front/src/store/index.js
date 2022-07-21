import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

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
    getMemoById: (state) => (id) => {
      return state.memos.find((memo) => memo.id === id);
    },
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    //memoを保存するプログラムを作成
    save(state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find((memo) => memo.id === newMemo.id);
        x.title = newMemo.title;
        x.content = newMemo.content;
      } else {
        newMemo.id = ++state.count;
        state.memos.unshift(newMemo);
      }
    },
    delete(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  actions: {
    //非同期通信
  },
  modules: {},
  plugins: [vuexPersist.plugin],
});
