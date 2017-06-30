<template>
  <div class="container">
    <h1>Let's hear some stories!</h1>
    <div>
      <h3>Alex's stories</h3>
      <ul class="list-group">
        <li
          v-for="story in storiesBy('Alex')"
          class="list-group-item"
          >
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
      <h3>John's stories</h3>
      <ul class="list-group">
        <li
          v-for="story in storiesBy('John')"
          class="list-group-item"
          >
          {{ story.writer }} said "{{ story.plot }}"
        </li>
      </ul>
    </div>
    <pre>
      {{ $data }}
    </pre>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import CostProposal from './CostProposal';
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        stories: [ {
                plot: "I crashed my car today!",
                writer: "Alex"
              },
              {
                plot: "Yesterday, someone stole my bag!",
                writer: "John"
              },
              {
                plot: "Someone ate my chocolate...",
                writer: "John"
              },
              {
                plot: "I ate someone's chocolate!",
                writer: "Alex"
              },
            ]
          }
        },
        methods: {
          // a method which filters the stories depending on the writter
            storiesBy: function (writer) {
              return this.stories.filter(function (story) {
                return story.writer === writer
              });
            },
          }
        }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
