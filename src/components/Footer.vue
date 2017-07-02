<template>
  <div class="card">
    <footer class="card-footer">
      <router-link
        to="/cost-proposals"
        activeClass="active"
        class="card-footer-item">
        <a>
          All Proposals
        </a>
      </router-link>
      <router-link
        to="/cost-proposals-by-pm"
        activeClass="active"
        class="card-footer-item">
        <a>
          Proposals By PM
        </a>
      </router-link>
      <router-link
        to="/cost-proposals-by-pm2"
        activeClass="active"
        class="card-footer-item">
        <a>
          Proposals By PM 2
        </a>
      </router-link>
      <router-link
        to="/cost-proposals-by-date"
        activeClass="active"
        class="card-footer-item">
        <a>
          Proposals By Date
        </a>
      </router-link>
      <router-link
        to="/cost-proposals-by-cost-and-date"
        activeClass="active"
        class="card-footer-item">
        <a>
          Proposals By Cost & Date
        </a>
      </router-link>
    </footer>
  </div>
</template>
<script>
  import store from './../store/store';
  export default {
    name: 'footer',
    data () {
      return {

      }
    },
    computed: {

    },
    components: {

    },
    methods: {

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
