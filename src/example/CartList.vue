<template>
  <div>
    <!-- 条件渲染 -->
    <p v-if="isEmpty">没有购物信息</p>
    <!-- 列表渲染 -->
    <ul>
      <li v-for="(item, index) in items" :key="index"  @click="select(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

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
