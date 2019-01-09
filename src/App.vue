<template>
  <div id="app">
    <Header />
    <HomePage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import HomePage from './components/HomePage'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    HomePage,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
