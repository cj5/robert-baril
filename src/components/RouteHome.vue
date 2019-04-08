<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/images/hero-2.jpg" alt="">
    </div>
    <section class="bg-gray-90 py-5 py-md-8 pb-5">
      <div class="container">
        <UpcomingShows />
        <h3 class="white text-center mt-5 mb-5">Check out Robert Baril's stand-up comedy</h3>
        <div class="video-wrapper">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4A-ECbAqfa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="text-center mt-5 mb-5">
          <router-link to="/media" class="fancy-underline">More from Robert ></router-link>
        </div>
      </div>
    </section>
    <Contact noBorder />
  </div>
</template>

<script>
import UpcomingShows from './UpcomingShows'
import Contact from './Contact'

export default {
  name: "HomePage",
  components: {
    UpcomingShows,
    Contact
  }
}
</script>