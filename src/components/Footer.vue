<template>
  <div class="footer">
    <div class="container">
      <p class="py-4">&copy; {{ year }} &nbsp;|&nbsp; Robert Baril Comedy</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear()
    }
  }
}
</script>