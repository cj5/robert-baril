<template>
<div>
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
      <div class="button-wrapper" v-if="showBtn">
        <a :href="item.ticketsUrl" role="button" class="button" target="_blank">Tickets</a>
      </div>
    </li>

  </ul>
</div>
</template>

<script>
import events from '../../events.json'

export default {
  name: "UpcomingShows",
  props: {
    showBtn: Boolean
  },
  data() {
    return {
      events: events
    }
  }
}
</script>
