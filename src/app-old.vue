
<template>
  <div id="app">
    <header>
      <nav
        class="navbar has-background-dark is-dark"
        role="navigation"
        aria-label="main navigation">
        <HeaderBarBrand></HeaderBarBrand>
        <HeaderBarLinks></HeaderBarLinks>
      </nav>
    </header>
    <h1>Hello App!</h1>
  </div>
</template>

<script>
import HeaderBarBrand from '@/components/HeaderBarBrand';
import HeaderBarLinks from '@/components/HeaderBarLinks';

export default {
  name: 'App',
  components: { HeaderBarBrand, HeaderBarLinks },
};
</script>

<style lang="scss">
@import '@/styles/index.scss';
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
