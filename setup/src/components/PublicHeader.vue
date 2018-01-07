<template lang='pug'>
  div.publicHeader
    span.navbar-left(v-html='left')
    span.navbar-centre()
      img.logo(src='/static/images/cosine.logo.png') 
    span.navbar-right
      span(v-html="right")
 
      span &nbsp; &nbsp;
 </template>


<script>
export default {
  props: {
    left: {
      type: String,
      default: ''
    },
    right: {
      type: String,
      default: ''
    },
    centre: {
      type: String,
      default: ''
    },
    login: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*
img.logo {
  max-height: 200px;
}*/
</style>
