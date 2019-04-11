<template>
  <div>
    <div v-if="!noBorder" class="bdr"></div>
    <div class="contact pb-5" :class="noBgImg ? '' : 'bg-img'">
      <div class="filter"></div>
      <div class="container">
        <div :class="thin ? 'content' : ''">
          <h2 class="py-5">contact</h2>
          <EmailIcon />
          <div class="icon-wrapper">
            <a :href="'mailto:'+email">
              <svg class="icon icon-mail"><use xlink:href="#icon-mail"></use></svg>
              <p>{{ email }}</p>
            </a>
          </div>
          <FacebookIcon />
          <div class="icon-wrapper">
            <a href="https://www.facebook.com/robert.baril.12" target="_blank">
              <svg class="icon icon-facebook"><use xlink:href="#icon-facebook"></use></svg>
              <p>facebook.com/robert.baril.12</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmailIcon from './svg/EmailIcon'
import FacebookIcon from './svg/FacebookIcon'

export default {
  name: 'Contact',
  components: {
    EmailIcon,
    FacebookIcon
  },
  props: {
    thin: Boolean,
    noBorder: Boolean,
    noBgImg: Boolean
  },
  data() {
    return {
      email: 'subcomic23@yahoo.com'
    }
  }
}
</script>
