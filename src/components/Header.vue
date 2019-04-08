<template>
  <div>
    <div class="header-fill d-block d-md-none"></div>
    <div class="header-wrapper">
      <div class="container">
        <div class="header d-flex justify-content-between align-items-center">
          <h1 class="header-title" @click="closeMobileNav()">
            <router-link to="/" exact>Robert Baril</router-link>
          </h1>
          <nav>
            <div :class="'nav-wrapper ' + classOpenMobile">
              <ul class="d-md-flex">
                <li @click="closeMobileNav()">
                  <router-link 
                    to="/" 
                    active-class="active" 
                    exact 
                  >
                    Home
                  </router-link>
                </li>
                <li @click="closeMobileNav()">
                  <router-link 
                    to="/live" 
                    active-class="active" 
                  >
                    Live
                  </router-link>
                </li>
                <li @click="closeMobileNav()">
                  <router-link 
                    to="/biography" 
                    active-class="active" 
                  >
                    Biography
                  </router-link>
                </li>
                <li @click="closeMobileNav()">
                  <router-link 
                    to="/media" 
                    active-class="active" 
                  >
                    Media
                  </router-link>
                </li>
                <li @click="closeMobileNav()">
                  <router-link 
                    to="/contact" 
                    active-class="active" 
                  >
                    Contact
                  </router-link>
                </li>
              </ul>
            </div>
            <button @click="toggleMobileNav()" class="navicon d-block d-md-none" :class="x"></button>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isMobileNavOpen: false,
      classOpenMobile: '',
      x: ''
    }
  },
  methods: {
    toggleMobileNav() {
      if (this.isMobileNavOpen) {
        this.isMobileNavOpen = false;
        this.classOpenMobile = ''
        this.x = ''
      } else {
        this.isMobileNavOpen = true;
        this.classOpenMobile = 'open-mobile'
        this.x = 'x'
      }
    },
    closeMobileNav() {
      this.isMobileNavOpen = false;
      this.classOpenMobile = ''
      this.x = ''
    }
  }
}
</script>
