<template>
  <div id="app">
    <Header />
    <routerView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
