<template>
  <div class="wrapper">
    <section>
      <div class="webpack">kcapbew</div>
      <div class="figure">
        <img :src="require('@/assets/11.png')" />
        <img :src="require('@/assets/11.png')" />
      </div>
    </section>
    <section class="try">
      <div class="transform"></div>
      <div class="before"></div>
    </section>
    <section @click="toPage()">clickme</section>
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
  methods: {
    toPage() {
      this.$router.push("/animation");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.wrapper {
  > section:first-of-type {
    // transition: all 2s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .webpack {
      //动画效果
      font-size: 60px;
      font-family: fantasy;
      color: #46154e;
    }
    .figure {
      width: 180px;
      height: 180px;
      border: 4px solid #ea4234;
      border-radius: 90px;
      display: flex;
      justify-content: center;
      padding: 10px;
      img {
        width: 80px;
        height: 80px;
        animation: my-animation 1s infinite linear;
      }
      > img:last-of-type {
        animation: my-animation2 1s infinite linear;
      }
      &._footer {
        color: red;
      }
    }
  }
  .try {
    display: flex;
    .transform {
      width: 100px;
      height: 100px;
      background: repeating-radial-gradient(#46154e 0%, green 10%);
      transform: skewx(-45deg);
      border-radius: 50%;
      // transform: skewY(-45deg);
    }
    .before {
      width: 100px;
      height: 100px;
      background: rgba(255, 0, 0, 0.5);
      margin-left: 50px;
      position: relative;
      // transform: rotate(90deg);// 当角度为正值时，顺时针旋转,默认是Z轴
      transform: rotateX(
        30deg
      ); // 3D旋转，rotateX: 3D空间旋转指定的角度，沿着垂直于X轴的方向顺指针旋转。
      &::before {
        position: absolute;
        content: "";
        background: #ea4234;
        top: -10px;
        left: -10px;
        width: 10px;
        height: 10px;
      }
      &::after {
        position: absolute;
        content: "";
        background: #ea4234;
        bottom: -10px;
        right: -10px;
        width: 10px;
        height: 10px;
      }
    }
  }
}

@keyframes my-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes my-animation2 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
