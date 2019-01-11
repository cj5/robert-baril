<template>
  <div class="header-wrapper">
    <div class="container">
      <div class="header d-flex justify-content-between align-items-center">
        <h1 class="header-title">Robert Baril</h1>
        <nav>
          <ul class="d-flex">
            <li>
              <router-link to="/" active-class="active" exact>Home</router-link>
            </li>
            <li>
              <router-link to="/live" active-class="active">Live</router-link>
            </li>
            <li>
              <router-link to="/biography" active-class="active">Biography</router-link>
            </li>
            <li>
              <router-link to="/media" active-class="active">Media</router-link>
            </li>
            <li>
              <router-link to="/contact" active-class="active">Contact</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>
