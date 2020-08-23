<template>
  <div id="main">
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
#main {
  padding-top:1rem !important;
}
</style>
