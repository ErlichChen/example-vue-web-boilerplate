<template>
  <div id="cart">
    <h1>购物车</h1>
    <!-- 条件渲染 -->
    <p v-if="isEmpty">没有购物信息</p>
    <!-- 列表渲染 -->
    <button v-on:click="reduce">减少</button>
    <input v-model="food" type="text" v-on:keydown.enter="add" placeholder="请输入要添加的食物">
    <p>添加的食物: {{ food }}</p>
    <ul>
      <li v-for="(item, index) in items" :key="index"  @click="select(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
  .selected {
    color: blue;
  }
  .unselected {
    color:black;
  }
</style>

<script>
  function getFoods() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['苹果', '橙子'])
      }, 2000);
    })
  }

  export default {
    name: 'Cart',
    data() {
      return {
        items: [],
        item: 0,
        food: ""
      }
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    async created() {
      console.log("created")
      const items = await getFoods()
      this.items = items
    },
    beforeMount() {
      console.log("beforeMount")
    },
    mounted() {
      console.log("mounted")
    },
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    updated() {
      console.log("updated")
    },
    beforeUnmount() {
      console.log("beforeUnmount")
    },
    unmounted() {
      console.log("unmounted")
    },
    methods: {
      add() {
        this.items.push(this.food)
      },
      reduce() {
        this.items.pop()
      },
      select(it) {
        // console.log(it)
        this.item = it
      }
    },
    computed: {
      // 计算属性的 getter
      isEmpty() {
        return this.items.length > 0 ? false : true
      }
    },
    watch: {
      item(newItem, oldItem) {
        console.log(newItem);
        console.log(oldItem);
      },
    },
  }
</script>
