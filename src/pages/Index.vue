<template>
<Layout>
  <body class="is-preload">
    <!-- Page Wrapper -->
    <div id="page-wrapper">
      <!-- Main -->
      <div id="main">
        <!-- One -->
        <section id="one" class="features">
          <header class="major" id="one-header">
            <h2>Everyone Plays the Same Song</h2>
            <p>A FUN AND EDUCATIONAL COMMUNITY COVERS PROJECT</p>
          </header>
          <div class="content">
            <section class="feature">
              <h3>How it Works</h3>All participants
              <ul>
                <li>Sign up by submitting a song they'd like to cover.</li>
                <li>Vote on the song they want to cover. The song with the highest average is the song to cover.</li>
                <li>Record and submit a cover of the song by the submission deadline.</li>
                <li>Celebrate at a virtual listening party with all other participants.</li>
              </ul>
              <g-link :to="mainPost.path + `#project-details`">
                <button id="more-info-link">More Info</button>
              </g-link>
            </section>
            <section class="feature">
              <h3>The Numbers</h3>So far and counting
              <ul>
                <li>3 Rounds</li>
                <li>20 unique participants</li>
                <li>From 7 different cities</li>
                <li>In 3 different time zones</li>
              </ul>
            </section>
            <section class="feature">
              <h3>How to Get Involved</h3>
              <p>Signups for Round 4 are open, closing Wednesday, Sept 2nd.</p>
              <g-link id="signup-link" to="https://forms.gle/jozk2utbzuGgHkZHA">
              <button>Sign Up</button>
              </g-link>
              
            </section>
          </div>
        </section>
      <div id="rounds">
        <round-display v-for="(post,i) in roundPosts" :index="i" :post="post" :key="post.title" />
      </div>
        <!-- Five -->
        <section id="get-involved">
            <h2>Want to throw your cover into the ring? </h2>
            <p>
             Participating in Everyone Plays the Same Song is a way to join a community of musicians, deliver a project on a deadline and flex your skills.
            </p>
          <ul class="actions special">
            <li>
    <g-link id="signup-link" to="https://forms.gle/jozk2utbzuGgHkZHA">
              <button style="color:black">Sign Up</button>
    </g-link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </body>
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
  }
  </page-query>


<script>
import RoundDisplay from "../components/home/RoundDisplay";

export default {
  metaInfo: {
    title: "Everyone Plays the Same Song",
  },
  components: {
    RoundDisplay,
  },
  computed: {
    roundPosts() {
      return this.$page.posts.edges
        .map((edge) => edge.node)
        .filter(
          (post) => !post.tags.map((tag) => tag.title).includes("eptss-main")
        );
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
#one-header {
  background-image: url("../assets/images/section_one_bg.jpg");
  background-size: 100%;
}

#get-involved{
  color:black;
  padding:2rem;
}

#get-involved h2{ 
  color: black;
}

#get-involved button{ 
  color: black !important;
}
</style>
