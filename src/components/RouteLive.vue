<template>
  <div class="live header-spacing">
    <div class="py-5 py-md-8">
      <div class="container">
        <div class="row mb-5">
          <div class="col-lg-6">
            <div class="upcoming-shows live pr-xl-5 mb-5 mb-lg-0">
              <h2>Upcoming Shows</h2>
              <ul>

                <li v-for="(item, key) in events" :key="key" class="d-flex">
                  <div class="time d-flex flex-column">
                    <span class="month">{{ item.month }}</span>
                    <span class="date">{{ item.date }}</span>
                  </div>
                  <div class="place d-flex flex-column">
                    <span class="venue">{{ item.venue }}</span>
                    <span class="location">{{ item.location }}</span>
                  </div>
                  <div class="button-wrapper">
                    <a :href="item.ticketsUrl" role="button" class="button" target="_blank">Tickets</a>
                  </div>
                </li>

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
import Contact from './Contact'

export default {
  name: "RouteLive",
  components: {
    Contact
  },
  data() {
    return {
      events: events
    }
  }
}
</script>
