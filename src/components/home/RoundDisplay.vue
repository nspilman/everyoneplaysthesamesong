<template>
  <section :class="`spotlight ${alt} round-display`">
    <div class="image">
      <g-image :src="post.image" alt />
    </div>
    <div class="content">
      <g-link :to="post.path"
        ><h2>{{ post.title }}</h2></g-link
      >
      <p>{{ post.song }}</p>
      <div v-if="post.playlist" class="soundcloud" v-html="post.playlist" />
    </div>
  </section>
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

<style>

.image{
  padding:1rem;
}
.round-display{
  padding:2rem;
  border-radius: 3rem;
  margin: 2rem 0;
}

.content{
  padding:1rem !important;
}
</style>
