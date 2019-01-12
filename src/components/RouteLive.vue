<template>
  <div class="header-spacing">
    <div class="py-8">
      <div class="container">
        <div class="d-flex">
          <div class="upcoming-shows live">
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
          <div class="right w-50">
            <img src="../assets/images/baril-headshot.jpg" alt="robert baril">
          </div>
        </div>
        <!-- <p>{{ info }}</p> -->
      </div> <!-- .container -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import events from '../../events.json'

export default {
  name: "RouteLive",
  data() {
    return {
      // info: null,
      events: events
    }
  },
  mounted() {
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response))
  }
}
</script>
