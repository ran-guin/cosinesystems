<template lang='pug'>
	div
		hr
		span.container.col-md-3(v-for="skill in skills")
			icon(:name="skill.icon")
			span &nbsp; {{skill.name}}
			p &nbsp;
			span {{skill.description}}
			ul
			span(v-for="item in skill.list")
				li {{item}}
		p &nbsp;
		hr
		span(v-for="image in tools")
			img.toolsLogo(:src='image')

</template>


<script>

import 'vue-awesome/icons/eye'
import 'vue-awesome/icons/signal'
import 'vue-awesome/icons/globe'
import 'vue-awesome/icons/desktop'

export default {
  name: 'Us',
  components: {
  },
  data () {
    return {
      skills: [
        {icon: 'signal', name: 'Data Management', list: ['Database Design', 'Data Standardization', 'Streamlining Data Entry', 'Data Mining', 'Data Storage']},
        {icon: 'eye', name: 'Data Visualization', description: 'Generating simple ways to visualize data effectively', list: ['Dynamic Graphs', 'Reports', 'Annotated Maps']},
        {icon: 'desktop', name: 'Web Sites', description: 'We can also develop responsive web sites for collaborators that may include data interface and visualization features'},
        {icon: 'globe', name: 'Web Applications', description: 'We can also develop more comprehensive web applications that perform more detailed data handling and visualization'}
      ],

      tools: [
        '/static/images/lamp.jpg',
        '/static/images/bootstrap.png',
        '/static/images/node.png',
        '/static/images/angular.png',
        '/static/images/react.png',
        '/static/images/vue.png',
        '/static/images/d3t.jpg'
      ]
    }
  }
}
</script>

<style lang="sass?outputStyle=expanded">

	.flexWrapper {
		display: flex;
		flex-flow: row no-wrap;
	}

	.flexChild {
		flex: 1 20%;
		justify-content: space-around;
	}
	.boxed {
		border: solid black 1px;
	}

  .toolsLogo {
    max-height: 100px;
    padding: 20px;
  }


/*** Customize Header / Footer Settings: ***/
</style>
