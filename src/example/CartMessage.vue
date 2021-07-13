<template>
  <!-- <transition name="fade"> -->
  <!-- <transition
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight"> -->
  <transition name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave">
    <div class="message-box" v-if="show">
      <!--具名插槽-->
      <slot name="title" title="来自message的标题">默认标题</slot>
      <!--通过slot获取传入内容-->
      <slot></slot>
      <span class="message-box-close" @click="toggle">X</span>
    </div>
  </transition>
</template>

<style>
  .message-box {
    padding: 20px 20px;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 2s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>

<script>
export default {
  props: ['show'],
  data() {
    return {
      // show: false
    }
  },
  methods: {
    toggle() {
      // this.show = !this.show;
    },
    beforeEnter(el) {
      console.log("beforeEnter")
      // 动画初始状态
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter")
      // 触发回流激活动画
      document.body.offsetHeight
      // 动画结束状态
      el.style.opacity = 1
      // 监听动画结束事件，并执行done
      el.addEventListener('transitionend', done)
    },
    beforeLeave(el) {
      console.log("beforeLeave")
      // 动画初始状态
      el.style.opacity = 1
    },
    leave(el, done) {
      console.log("leave")
      // 触发回流激活动画
      document.body.offsetHeight
      // 动画结束状态
      el.style.opacity = 0
      // 监听动画结束事件，并执行done
      el.addEventListener('transitionend', done)
    },
  }
}
</script>
