<template>
  <div class="live header-spacing">
    <div class="py-5 py-md-8">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6">
            <div class="upcoming-shows live pr-xl-5 mb-5 mb-lg-0">
              <h2>Upcoming Shows</h2>
              <ul>

                <UpcomingShows showBtn isLivePage />

              </ul>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-left">
            <img src="../assets/images/baril-headshot.jpg" alt="robert baril">
          </div>
        </div>
      </div> <!-- .container -->
    </div>
    <Contact />
  </div>
</template>

<script>
import events from '../../events.json'
import UpcomingShows from './UpcomingShows'
import Contact from './Contact'

export default {
  name: "RouteLive",
  components: {
    UpcomingShows,
    Contact
  },
  data() {
    return {
      events: events
    }
  }
}
</script>
