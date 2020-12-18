<template>
  <Layout>
    <section class="hero">
      <div class="hero-container">
        <h1>Everyone Plays the Same Song</h1>
        <p>
          Everyone Plays the Same Song is a fun and educational community covers
          project. Members suggest and vote on songs to cover, submit their
          songs and then celebrate with a listening party. Please sign up and
          join us for the next round.
        </p>
        <div class="button-container">
          <g-link :to="learnMoreLink">
            <button>Learn</button>
          </g-link>
          <g-link to="/#listen">
            <button>Listen</button>
          </g-link>
          <button class="button-primary">Sign Up</button>
        </div>
      </div>
    </section>

    <main class="main">
      <div class="content-container">
        <div class="card-header">
         <h2>How It Works</h2>
          <hr />
        </div>
        <div class="card">
          <div class="hiw">
            <div class="item-third">
              <h3>1. Sign Up</h3>
              <p>Sign up and submit a song that you would like to cover.</p>
            </div>
            <div class="item-third">
              <h3>2. Select</h3>
              <p>
                Vote for the song that all participants will cover as a
                community.
              </p>
            </div>
            <div class="item-third">
              <h3>3. Submit</h3>
              <p>
                Submit your cover and celebrate with a virtual listening party.
              </p>
            </div>
          </div>
          <p class="hiw">
            Round 6 signups are currently underway and will close December 14th,
            2020.
          </p>
          <div class="button-container">
           <g-link :to="learnMoreLink" id="learn">  <button>Learn More</button>  </g-link>
            <button>
              <a href="#listen">Listen</a>
            </button>
            <button class="button-primary">Sign Up</button>
          </div>
        </div>
        <div class="card-header">
          <h2><a id="listen">Community Covers</a></h2>
          <hr />
        </div>

        <round-display
          v-for="(post, i) in postsWithRoundMetadata"
          :index="i"
          :post="post"
          :key="post.title"
        />
      </div>
    </main>

    <footer class="footer">
      <div class="button-container">
        <button class="button-primary">Sign Up</button>
      </div>
    </footer>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date
        description
        path
        excerpt
        published
        favorite
        tags {
          title
        }
    }
  }
  }
    rounds: allRounds {
    edges {
      node {
        id
        round
        title
        image
        playlist
    }
  }
  }
  }
  </page-query>


<script>
import RoundDisplay from "../components/home/RoundDisplay";

export default {
  metaInfo: {
    title: "Everyone Plays the Same Song",
  },
  data() {
    return {
      mailingList: "https://forms.gle/WWExzdN3e61Ko3J28",
      signupForm: "https://forms.gle/H7Ava6mciUdUQQjn9",
      learnMoreLink:"/blog/everyone-plays-the-same-song"
    };
  },
  components: {
    RoundDisplay,
  },
  computed: {
    posts() {
      return this.$page.posts.edges
        .map((edge) => edge.node)
        .filter(
          (post) => !post.tags.map((tag) => tag.title).includes("eptss-main")
        );
    },
    rounds() {
      return this.$page.rounds.edges.map((edge) => edge.node);
    },
    postsWithRoundMetadata() {
      return this.posts.map((post) => {
        const eptssTag = post.tags.find((tag) => tag.title.includes("eptss"));
        const roundNumber = eptssTag.title.slice(-1);
        const roundObj = this.rounds.find(
          (round) => round.round == roundNumber
        );
        post.song = roundObj.title;
        post.playlist = roundObj.playlist;
        post.image = roundObj.image;
        return post;
      });
    },
    mainPost() {
      return this.$page.posts.edges
        .map((edge) => edge.node)
        .find((post) =>
          post.tags.map((tag) => tag.title).includes("eptss-main")
        );
    },
  },
};
</script>

<style>
</style>
