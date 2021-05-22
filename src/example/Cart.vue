<template>
  <div id="cart">
    <h1>购物车</h1>
    <!-- 条件渲染 -->
    <p v-if="items.length === 0">没有购物信息</p>
    <!-- 列表渲染 -->
    <button v-on:click="reduce">减少</button>
    <input v-model="food" type="text" v-on:keydown.enter="add" placeholder="请输入要添加的食物">
    <p>添加的食物: {{ food }}</p>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Cart',
    data() {
      return {
        items: [{ id: 0, message: '苹果' },
          { id: 1, message: '橙子' }],
        food: ""
      }
    },
    methods: {
      add() {
        this.items.push({
          id: this.items.length,
          message: this.food
        })
      },
      reduce() {
        this.items.pop()
      }
    }
  }
</script>
