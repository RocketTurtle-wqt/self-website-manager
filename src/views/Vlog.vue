<template>
  <div id="vlog">
    <div v-for="(item, index) in playerOptions" :key="index">
      <video-player  
                  class="video-player-box video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :options="item"
                  :playsinline="true"
                  customEventName="customstatechangedeventname"

                  @play="onPlayerPlay($event)"
                  @pause="onPlayerPause($event)"
                  @ready="playerReadied"
                  >
      </video-player>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

export default {
  name:'Vlog',
  data() {
    return {
      playerOptions: [
        {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: "video/mp4",
              src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
            }
          ],
          poster: "../assets/images/404.jpeg",
          height:'300px',
        },
        {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: "video/mp4",
              src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            }
          ],
          poster: "/static/images/author.jpg",
          height:'300px',
        },
        {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: "video/mp4",
              src: "http://vjs.zencdn.net/v/oceans.mp4"
            }
          ],
          poster: "/static/images/author.jpg",
          height:'300px',
        },
        {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [
            {
              type: "video/mp4",
              src: "https://media.w3.org/2010/05/sintel/trailer.mp4"
            }
          ],
          poster: "/static/images/author.jpg",
          height:'300px',
        }
      ]
    }
  },
  mounted() {
    console.log('this is current player instance object', this.player)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    // listen event
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // ...player event

    // or listen state event
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },

    // player is ready
    playerReadied(player) {
      console.log('the player is readied', player)
      // you can use it to do something...
      // player.[methods]
    }
  },
  components: {
    videoPlayer
  }
}
</script>

<style scoped>
  #vlog{
    height: 100%;
    background-color: white;
    box-sizing: border-box;
    /* padding: 50px; */
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    overflow: scroll;
  }

  #vlog>div{
    width: 500px;
    height: 300px;
    margin-top: 50px;
  }
</style>