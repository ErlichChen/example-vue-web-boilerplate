<template>
  <div>
    <button v-on:click="reduceItem">减少</button>
    <input :value="item" type="text"
      @input="onChange"
      v-on:keydown.enter="addItem"
      placeholder="请输入要添加的商品">
  </div>
</template>

<script>
  export default {
    props: {
      item: String
    },
    methods: {
      addItem() {
        // 派发事件通知父组件新增
        this.$emit('add-item')
      },
      reduceItem() {
        this.$emit('reduce-item')
      },
      onChange(e) {
        this.$emit('update:item', e.target.value)
      }
    }
  }
</script>
