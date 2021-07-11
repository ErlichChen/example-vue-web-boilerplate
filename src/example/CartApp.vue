<template>
  <!-- 不用放到子组件中，会覆盖掉父组件中的class -->
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css"
    rel="stylesheet"
    type="text/css"
  />
  <div>
    <cart-message :show="show" class="success">
        <template v-slot:default>
          新增课程成功!
        </template>
      </cart-message>
    <!-- 新增商品 -->
    <cart-add v-model:item="item" @add-item="addItem"></cart-add>
    <!-- 列表组件 -->
    <cart-list :items="items"></cart-list>
  </div>

</template>

<style>
  .success {
    background: #4fc08d;
    border: 1px solid #42b983;
  }
</style>

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
        items: [],
        show: false,
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
        this.show = true
      }
    }
  }
</script>
