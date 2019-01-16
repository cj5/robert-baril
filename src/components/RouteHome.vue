<template>
  <div class="home">
    <div class="hero">
      <img src="../assets/images/hero-2.jpg" alt="">
      <UpcomingShows />
    </div>
    <section class="bg-gray-90 py-8">
      <div class="container">
        <h3 class="white text-center mb-5">Check out Robert Baril's stand-up comedy</h3>
        <div class="video-wrapper">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4A-ECbAqfa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="text-center mt-5">
          <router-link to="/media">More from Robert ></router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UpcomingShows from './UpcomingShows'

export default {
  name: "HomePage",
  components: {
    UpcomingShows
  }
}
</script>