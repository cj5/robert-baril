<template>
  <div class="header-spacing">
    <div class="media py-5 py-md-8">
      <div class="container">
        <div class="content">
          <h2 class="mb-5">Stand-up</h2>
          <div class="video-wrapper">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vnIjVxKLnCE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-wrapper mt-6">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HLsyKaSioQ0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="bdr-color-1 mt-8"></div>
          <h2 class="mt-4 mb-5">Radio</h2>
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0">
              <img class="w-100" src="../assets/images/baril-radio.jpg" alt="">
            </div>
            <div class="col-lg-6 d-flex align-items-center">
              <div>
                <a href="http://www.am950radio.com/" target="_blank">
                  <img class="w-100" src="../assets/images/am-950.png" alt="am-950 logo">
                </a>
                <p class="mt-4">Comedian Robert Baril invites the funniest comedians in town to unleash their wit as they discuss the breaking news stories of the week.</p>
              </div>
            </div>
          </div>
          <!-- <div class="bdr-color-1 mt-8"></div>
          <h2 class="mt-4 mb-4">Podcasts</h2>
          <ul>
            <li class="border border-radius-lg p-3 mb-3">Podcast 1</li>
            <li class="border border-radius-lg p-3 mb-3">Podcast 2</li>
            <li class="border border-radius-lg p-3 mb-3">Podcast 3</li>
          </ul> -->
          <div class="bdr-color-1 mt-8"></div>
          <h2 class="mt-4 mb-5">Lestaril</h2>
          <div class="video-wrapper mb-5">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/nUddxNnGGBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-wrapper mb-5">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/zNNDYQ5-0nw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="video-wrapper">
            <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FLESTARILCOMEDY%2Fvideos%2F496302644060530%2F&show_text=0&width=560" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>
          </div>
          <div class="video-wrapper mb-5">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZVmJzwDJsBg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          <div class="bdr-color-1 mt-8"></div>
          <h2 class="mt-4 mb-4">Credits</h2>
          <table class="mb-5">
            <tr>
              <td>I Need You to Kill, documentary</td>
              <td>Amazon Prime</td>
            </tr>
            <tr>
              <td>10,000 Laughs Festival</td>
              <td>Minneapolis</td>
            </tr>
            <tr>
              <td>Laughing Devil Festival</td>
              <td>New York</td>
            </tr>
            <tr>
              <td>Westworld</td>
              <td>HBO</td>
            </tr>
            <tr>
              <td>Laughing Matters</td>
              <td>AM/950</td>
            </tr>
          </table>

        </div> <!-- .content -->
      </div>
    </div>
    <Contact thin />
  </div>
</template>

<script>
import Contact from './Contact'

export default {
  name: "RouteMedia",
  components: {
    Contact
  }
}
</script>