<template>
  <div id="app">
    <Header />
    <!-- <RouteHome /> -->
    <routerView />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
// import RouteHome from './components/RouteHome'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    // RouteHome,
    Footer
  }
}
</script>

<style lang="scss">
  @import 'assets/scss/main.scss';
</style>
