<template>
  <div id="app">
    <div class="container">
      <div class="Chart_list">
        <div class="Chart">
          <h2>Line Chart</h2>
          <line-example></line-example>
          <h2>Bar Chart</h2>
          <app-bar-example></app-bar-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LineExample from './LineChart.js'
  import BarExample from './BarChart.js'
  export default {
    name: 'app',
    components: {
      appLineExample: 'LineExample',
      appBarExample: 'BarExample'
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
