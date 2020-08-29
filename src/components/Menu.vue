<template>
  <!-- Menu -->
  <nav id="menu">
    <div class="inner">
      <h2>Menu</h2>
      <ul class="links">
        <li>
          <g-link to="/">Home</g-link>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
        <li>
          <a href="#">Log In</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
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