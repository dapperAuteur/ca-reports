<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Footer from './components/Footer';
  import Header from './components/Header';
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('loadData');
        var pm = this.$store.getters.users;

        // costProposal.attributes['user-id']
      // console.log(this.$store.state);
      // console.log(Chart.defaults.global);
      // console.log(Chart.defaults.global.responsive);
      // Chart.defaults.global.responsive = true;
      // console.log(Chart.defaults);
    },
    components: {
      appFooter: Footer,
      appHeader: Header
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
