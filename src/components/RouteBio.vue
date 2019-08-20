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
              <a :href="i.permalink_url" target="_blank" v-for="(i, key) in fbPosts" :key="key">
                <li class="d-flex flex-column">
                  <span class="fb-date d-flex">
                    <FacebookIcon />
                    <div class="icon-wrapper">
                      <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
                    </div>
                    {{ i.created_time | moment('timezone', 'America/Chicago', 'MMMM D [at] h:m A') }}
                  </span>
                  <span>{{ i.message }}</span>
                </li>
              </a>
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
const apiQuery = 'me?fields=id,name,posts.limit(8){id,message,created_time,permalink_url}';
const apiToken = 'EAAlkdRzjgukBAKA9yeCut81Ai9reryZCBSS16NQdPNMULRTlH6AkmYUccWx8mZBfeNTstDEnFmSopZC68U9AHeIcoEl0i8dv4aHS7fyXI96PA9oRR612ZB2CSVvdgOUvyC4v6ak3v6n0dnsA8Ls9bOZAWSUiio4UZD';

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
