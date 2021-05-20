<template>
  <div id="counter">
    Counter: {{ counter }}
  </div>
</template>

<script>
  import { createApp } from 'vue'

  const Counter = {
    data() {
      return {
        counter: 0
      }
    }
  }
  createApp(Counter).mount('#counter')

  export default {
    name: 'Counter'
  }
</script>
