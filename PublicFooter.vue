<template lang='pug'>
  div.publicFooter
    span.navbar-left
      span(v-html="left")
      <!-- img.logo(src='/static/images/cosine.logo.png')  -->
      a(href='/')
        span.acronym
          b &nbsp; C
          span ommunity
          b &nbsp; O
          span riented
          b &nbsp; S
          span oftware
          b &nbsp; I
          span nnovation
          b &nbsp; N
          span etwork
          span &nbsp; &nbsp;
          span &nbsp; &nbsp;
    span.navbar-centre
      span(v-html="centre")
    span.navbar-right
      span(v-html="right")
      a(href="mailto:info@cosine.org?Subject=webpage%20contact") Contact Us

</template>

<script>
export default {
  // template: require('./main.pug'),
  data () {
    return {
    }
  },
  props: {
    left: {
      type: String
    },
    right: {
      type: String
    },
    centre: {
      type: String
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    /* margin: 0 10px; */
  }

  span a {
    color: #222;
  }
  span a:hover {
    color: #000;
    font-weight: bold;
  }
</style>