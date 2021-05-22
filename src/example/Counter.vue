<template>
  <h2 v-bind:title="title">Counter</h2>
  <button v-bind:disabled="true">Add</button>
  <div id="counter">
    Counter: {{ counter }}
  </div>
</template>

<script>
  export default {
    name: "Counter",
    data() {
      return {
        counter: 1
      }
    }
  }
</script>
