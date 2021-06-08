<template>
  <div>
    <cart-message class="success" />
    <!-- 新增商品 -->
    <cart-add v-model:item="item" @add-item="addItem"></cart-add>
    <!-- 列表组件 -->
    <cart-list :items="items"></cart-list>
  </div>
</template>
<script>
  import CartAdd from './CartAdd.vue'
  import CartList from './CartList.vue'
  import CartMessage from './CartMessage.vue'

  function getItems() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(['苹果', '橙子'])
      }, 2000);
    })
  }

  export default {
    name: 'CartApp',
    components: {
      'cart-add': CartAdd,
      'cart-list': CartList,
      'cart-message': CartMessage
    },
    data() {
      return {
        item: '',
        items: []
      }
    },
    async created() {
      console.log("created")
      const items = await getItems()
      this.items = items
    },
    methods: {
      addItem() {
        this.items.push(this.item)
      }
    }
  }


</script>
