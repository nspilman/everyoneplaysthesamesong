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
										<h3>How it Works</h3>
                    All participants 
										<ul>
                      <li>
                        Sign up by submitting a song they'd like to cover.
                      </li>
                      <li>
                        Vote on the song they want to cover. The song with the highest average is the song to cover.
                      </li>
                        <li>
                        Record and submit a cover of the song by the submission deadline. 
                      </li>
                       <li>
                        Celebrate at a virtual listening party with all other participants.
                      </li>
										</ul>
									</section>
									<section class="feature">
										<h3>The Numbers</h3>
                    So far and counting
                    <ul>
                      <li>3 Rounds</li>
                      <li>20 unique participants</li>
                      <li>From 7 different cities</li>
                      <li>In 3 different time zones</li>
                    </ul>
									</section>
									<section class="feature">
										<h3>How to Get Involved</h3>
										<p>Signups will soon be open for round 4!</p>
									</section>
								</div>
							</section>

              <round-display v-for="(post,i) in roundPosts" 
              :index="i" 
              :post="post" 
              :key="post.title"/>

						<!-- Five -->
							<section id="five" class="cta">
								<header>
									<h2>Sed euismod nullam</h2>
									<p>Odio mattis nec velit eu, luctus dictum diam. Quis<br />
									tempus que ornare purus a bibendum ultricies</p>
								</header>
								<ul class="actions special">
									<li><a href="#" class="button large">Get Started</a></li>
								</ul>
							</section>

					</div>

				<!-- Footer -->
					<section id="footer">
						<div class="inner">
							<section class="about">
								<h3>Proin sed ultricies</h3>
								<p>Praesent egestas quam at lorem imperdiet lobortis. Mauris condimentum et euismod ipsum, at ullamcorper libero dolor auctor sit amet. Proin vulputate.</p>
								<ul class="actions">
									<li><a href="#" class="button">Learn More</a></li>
								</ul>
							</section>
							<section>
								<h3>Get in Touch</h3>
								<ul class="contact">
									<li class="icon solid fa-phone">(000) 000-0000</li>
									<li class="icon solid fa-envelope"><a href="#">information@untitled.tld</a></li>
									<li class="icon brands fa-twitter"><a href="#">@untitled-tld</a></li>
									<li class="icon brands fa-facebook-f"><a href="#">facebook.com/untitled</a></li>
								</ul>
							</section>
							<section>
								<h3>Mailing Address</h3>
								<p>Untitled Corp<br />
								1234 Fictional Road<br />
								Suite 5432<br />
								Nashville, TN 00000<br />
								USA</p>
							</section>
						</div>
						<div class="copyright">
							<p>Copyright &copy; Untitled Corp. All rights reserved.</p>
						</div>
					</section>

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
import RoundDisplay from "../components/home/RoundDisplay"

export default {
  metaInfo: {
    title: 'Everyone Plays the Same Song'
  },
  components: {
    RoundDisplay
  },
    computed: {
    roundPosts() {
      return this.$page.posts.edges.map(edge => edge.node).filter(post => !post.tags.map(tag=> tag.title).includes('eptss-main') );
    },
    mainPost() {
      return this.$page.posts.edges.map(edge => edge.node).find(post => post.tags.map(tag=> tag.title).includes('eptss-main') );
    },
  },
}
</script>

<style>
#one-header{
  background-image: url("../assets/images/section_one_bg.jpg");
  background-size: 100%;
}
</style>
