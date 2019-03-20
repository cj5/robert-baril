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
            <p class="">A philosophy and political science major in college, Robert uses his sharp wit to cut through the most dense and divisive issues of the day.  His trademark brand of smart, lacerating humor has made him one of the fastest rising comedians in the Twin Cities, and garnered him his own radio show on AM 950, Laughing Matters with Robert Baril, additionally, Robert also draws on his experiences as a substitute teacher for his scathing material on the educational system, children, and society at large.</p>
          </div>
        </div>
        <div class="content feed">
          <h3 class="text-center mb-5">Latest Facebook Posts</h3>
          <div class="d-flex justify-content-center">
            <ul>
              <li v-for="(item, key) in fbPosts" :key="key">
                {{ item.message }}
                {{ item.icon }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

// Rapid Traverse id = 122630115501148
const apiBase = 'https://graph.facebook.com/';
const apiQuery = 'me?fields=id,name,posts.limit(6){id,message}';
const apiToken = 'EAAmpE2pjvacBAARqoXT8FVAQ9ZBK5g2Lvi5C8eGLOdNuwVAR9TbTZCBuHdiW3wd92sESFLoveLQqPrQeRA3lZAVD7CupCKdcqfEaHNT1ZAOMa4XxMIZAZBtbjCnBCzIXm8RjgA1t7Kuv2x5ZCIyJJa8NhpZADYIsI2Uk6geZBoewVYZAwQS4V4Sl9r';

const api = apiBase+apiQuery+'&access_token='+apiToken;

export default {
  name: "RouteBio",
  data() {
    return {
      fbPosts: null
    }
  },
  computed: {
    fbPostsFiltered() {
      // this.removeEmpty(this.fbPosts);
      // console.log(this.fbPosts[0]);
    }
  },
  methods: {
    removeEmpty(obj) {
      Object.keys(obj).forEach((k) => (!obj[k] && obj[k] !== undefined) && delete obj[k]);
      return obj;
    }
  },
  mounted() {
    axios
      .get(api)
      .then(response => (this.fbPosts = response.data.posts.data))
  }
}
</script>
