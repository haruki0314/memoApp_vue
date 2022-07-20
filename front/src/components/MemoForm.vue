<template>
  <h2>New</h2>
  <div><input type="text" /></div>
  <div><textarea></textarea></div>
  <div class="center">
    <button @click="save">保存</button>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
  methods: {
    save() {
      let memo = {
        title: "メモのタイトルです。",
        content: "メモの内容です。",
      };
      this.$store.commit("save", memo);
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 100%;
}
textarea {
  width: 100%;
  height: 30em;
}
button {
  width: 5em;
  margin: 3px;
}
.center {
  text-align: center;
}
</style>
