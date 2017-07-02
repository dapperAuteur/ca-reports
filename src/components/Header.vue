<template>
  <div class="card">
    <footer class="card-footer">
      <router-link
        to="/"
        activeClass="active"
        class="card-footer-item">
        <a>
          Home
        </a>
      </router-link>
      <router-link
        to="#"
        activeClass="active"
        class="card-footer-item">
        <a>
          Settings
        </a>
      </router-link>
      <router-link
        to="#"
        activeClass="active"
        class="card-footer-item">
        <a>
          Profile
        </a>
      </router-link>
      <router-link
        to="#"
        activeClass="active"
        class="card-footer-item">
        <a>
          Empty
        </a>
      </router-link>
      <router-link
        to="#"
        activeClass="active"
        class="card-footer-item">
        <a>
          Empty
        </a>
      </router-link>
    </footer>
  </div>
</template>
<script>
  import store from './../store/store';
  export default {
    name: 'header',
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
