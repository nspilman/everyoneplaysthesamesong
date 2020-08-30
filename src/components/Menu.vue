<template>
  <!-- Menu -->
  <nav id="menu" @click="closeMenu">
    <div class="inner">
      <h2>Menu</h2>
      <ul class="links">
        <li @click="closeMenu">
          <g-link to="/"> Home </g-link>
        </li>
        <li @click="closeMenu">
          <g-link to="/#rounds"> Past Rounds </g-link>
        </li>
        <li @click="closeMenu">
          <g-link to="https://forms.gle/jozk2utbzuGgHkZHA">Sign Up</g-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods:{
    closeMenu(){
      this.$emit('closeMenu')
    }
  }
};
</script>

<style scoped>

#menu{
    visibility: visible;
    opacity: unset;
    pointer-events: unset;
}

#menu > .inner{
    opacity: unset;
}
</style>