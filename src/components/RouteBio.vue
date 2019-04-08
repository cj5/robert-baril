<template>
  <div>
    <div class="ribbon bg-black d-flex justify-content-center">
      <img src="../assets/images/baril-ribbon.jpg" alt="">
    </div>
    <div class="py-5 py-md-8">
      <div class="container">
        <h2 class="text-center mb-5 mb-md-8">Robert Baril. Comic. Lover. Friend.</h2>
        <div class="row content mb-8">
          <div class="col-md-6 pl-md-0 mb-4 mb-md-0">
            <img src="../assets/images/baril-stand-up.jpg" alt="Robert Baril stand up" class="w-100">
          </div>
          <div class="col-md-6 pr-md-0 d-flex align-items-center">
            <p class="fz-15">Robert Baril has been writing and performing comedy in the Twin Cities since 2009. In 2017, his debut album 'Sex and Politics' was released on Grammy winning Stand Up Records, and his radio show 'Laughing Matters with Robert Baril' has been playing on the AM 950 airwaves for the last six years.  Raised on a steady diet of Dennis Miller and George Carlin, Robert combines a sharp, current event tackling wit with clever twists on every day observations. He has been a regular at Acme Comedy Company in Minneapolis since 2014, and has performed as part of the 10,000 Laughs and Laughing Devil Comedy Festivals.</p>
          </div>
        </div>
        <div class="content feed">
          <h3 class="mb-5">Latest Facebook Posts</h3>
          <div class="d-flex justify-content-center">
            <ul>
              <li class="d-flex flex-column" v-for="(item, key) in fbPosts" :key="key">
                <span class="fb-date d-flex">
                  <FacebookIcon />
                  <div class="icon-wrapper">
                    <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
                  </div>
                  {{ item.created_time | moment('timezone', 'America/Chicago', 'MMMM D [at] h:m A') }}
                </span>
                <span>{{ item.message }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Contact thin />
  </div>
</template>

<script>
import axios from 'axios'
import Contact from './Contact'

// Rapid Traverse id = 122630115501148
const apiBase = 'https://graph.facebook.com/';
const apiQuery = 'me?fields=id,name,posts.limit(5){id,message,created_time}';
const apiToken = 'EAAmpE2pjvacBAItMmecYbkqrtOVNZBK9nMroHAO2HDZCv0GkIYTubBZBI8UCFX72JmDU8ZCfhxl6Mi1V3p4bIWGH0HGNE35PNf0iKK5ts9wLFHjVSvAbovvmXY9Lb2FVsPLsPqM3wEFcHdbZB0miBHhcyTavMIA0zZBWlZC8elhaDJQQfhaWSng';

const api = apiBase+apiQuery+'&access_token='+apiToken;

export default {
  name: "RouteBio",
  components: {
    Contact
  },
  data() {
    return {
      fbPosts: null
    }
  },
  mounted() {
    axios
      .get(api)
      .then(response => (this.fbPosts = response.data.posts.data))
  }
}
</script>
