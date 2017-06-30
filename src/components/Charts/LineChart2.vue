<template>
  <div id="app">
    <div class="container">
      <div class="Chart_list">
        <div class="Chart">
          <div id="myChart">
            <h2>myChart</h2>
          </div>
          <h2>Line 2 Chart</h2>
          <line2-example
            :mychartdata="chartdata">
          </line2-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Line2Example from './LineChart2.js'
  import store from './../../store/store'
  export default {
    name: 'app',
    components: {
      appLine2Example: 'Line2Example'
    },
    data() {
      return {
        control: "blah",
        controls: [],
        name: '',
        description: '',
        modalitem: '',
        page: 1,
        limit: 25,
        skip: 0,
        isMore: true,
        chartdata: [100, 20, 60, 20, 80, 55, 90]
      }
    },
    created() {
      console.log(this.$store.state);
      // console.log(Chart.defaults.global);
      // console.log(Chart.defaults.global.responsive);
      // Chart.defaults.global.responsive = true;
      // console.log(Chart.defaults);
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  .Chart {
    background: #212733;
    border-radius: 15px;
    box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27);
    margin: 25px 0;
  }
  .Chart h2 {
    margin-top: 0;
    paddig: 15px 0;
    color: rgba(255, 0,0, 0.5);
    border-bottom: 1px solid #323d54;
  }
</style>
