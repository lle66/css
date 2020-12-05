<template>
  <div class="wrapper">
    <h1>layout</h1>
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.wrapper {
}
</style>
