<template>
  <div>
    <!-- 条件渲染 -->
    <p v-if="isEmpty">没有购物信息</p>
    <!-- 列表渲染 -->
    <ul>
      <transition-group name="fade">
      <li v-for="(item, index) in items" :key="index"  @click="select(item)">
        {{ item }}
      </li>
      </transition-group>
    </ul>
  </div>
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
    data() {

    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>
