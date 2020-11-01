<template>
  <section :class="`spotlight ${alt}`">
    <div class="image">
      <g-image :src="postData.image" alt />
    </div>
    <div class="content">
      <g-link :to="post.path"><h2>{{post.title}}</h2></g-link>
      <p>{{postData.song}}</p>
      <div v-if="postData.soundcloudPlayer" class="soundcloud" v-html="postData.soundcloudPlayer"/>
    </div>
  </section>
</template>

<script>
import roundPostWrapper from "../../utilities/roundPostWrapper"
import axios from 'axios'

export default {
    name:'RoundDisplay',
    props:['post','index'],
    data(){
        return {
         post1:'eptss-rnd1',
         post2:'eptss-rnd2',
         post3:'eptss-rnd3',
         post4:'eptss-rnd4',
         post5:'eptss-rnd5',
        }
    },
    async created(){
            const roundInfo = await axios.get("https://pioneer-django.herokuapp.com/eptss/" + this.round);
            console.log('hey')
            console.log(roundInfo)
        },
    computed:{
        alt(){
            return this.index % 2 == 0 ? 'alt' : '';
        },
        round(){
            return this.index + 1;
        },
        postData(){
            if(this.post.tags.map(tag => tag.title).includes(this.post1)){
                return roundPostWrapper.one;
            }
            if(this.post.tags.map(tag => tag.title).includes(this.post2)){
                return roundPostWrapper.two;
            }
            if(this.post.tags.map(tag => tag.title).includes(this.post3)){
                return roundPostWrapper.three;
            }
            if(this.post.tags.map(tag => tag.title).includes(this.post4)){
                return roundPostWrapper.four;
            }
            if(this.post.tags.map(tag => tag.title).includes(this.post5)){
                return roundPostWrapper.five;
            }
            return roundPostWrapper.default;
        }
    }
};
</script>

<style>
</style>
