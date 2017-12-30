<template lang='pug'>
  div.publicFooter
    span.navbar-left(v-html="left")
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
    span.navbar-centre(v-html="centre")
    span.navbar-right(v-html="right")
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
      type: String,
      default: '<a href="mailto:info@cosine.org?Subject=webpage%20contact">Contact Us</a>'
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
    /*margin: 0 10px;*/
  }

</style>
