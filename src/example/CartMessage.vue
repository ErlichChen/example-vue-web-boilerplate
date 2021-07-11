<template>
  <!-- <transition name="fade"> -->
  <transition
    enter-active-class="animate__animated animate__tada"
    leave-active-class="animate__animated animate__bounceOutRight">
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
    }
  }
}
</script>
