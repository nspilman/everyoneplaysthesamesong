<template>
  <div class="card">
    <g-link :to="post.path">
      <h3>
        <p class='song-name'>{{ post.song }}</p>
      </h3>
      <p class="song-round">
        {{ post.title }}
      </p>
    </g-link>
    <div>
      <div v-if="post.playlist" class="soundcloud" v-html="post.playlist" />
    </div>
  </div>
</template>

<script>
import roundPostWrapper from "../../utilities/roundPostWrapper";
import axios from "axios";

export default {
  name: "RoundDisplay",
  props: ["post", "index"],
  computed: {
    alt() {
      return this.index % 2 == 0 ? "alt" : "";
    },
  },
};
</script>

<style scoped>

a{
  text-decoration: none;
  color:white;
}

</style>
