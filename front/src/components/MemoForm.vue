<template>
  <h2>New</h2>
  <div><input type="text" /></div>
  <div><textarea></textarea></div>
  <div class="center">
    <button>保存</button>
  </div>
</template>

<script>
export default {
  name: "MemoForm",
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
