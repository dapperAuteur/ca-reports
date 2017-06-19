<template>
  <div id="app">
    <div class="container">
      <div class="Chart_list">
        <div class="Chart">
          <h2>Line 2 Chart</h2>
          <line2-example></line2-example>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Line2Example from './LineChart2.js'
  export default {
    name: 'app',
    components: {
      appLine2Example: 'Line2Example'
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
