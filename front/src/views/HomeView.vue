<template>
  <div class="home">
    <ul v-if="hasMemos">
      <li v-for="memo in memos" :key="memo.id">
        {{ memo.title }}
      </li>
    </ul>
    <p v-else>メモはありません</p>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  computed: {
    hasMemos() {
      return this.$store.getters.getCount;
    },
    memos() {
      return this.$store.getters.getAll;
    },
  },
};
</script>
