<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Cost Proposal
        <figure class="image is-48x48">
          <img src="#" alt="Image">
        </figure>
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <h2>Opportunity ID: 3</h2>
        <h2>User ID: 1</h2>
        <h2>Film Quote ID: 3</h2>
        <h2>Film Spec ID: 3</h2>
        <h2>Date: 2017-05-29</h2>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Film Quote</a>
      <a class="card-footer-item">Film Specs</a>
      <a class="card-footer-item">User Cost Proposals</a>
      <a class="card-footer-item">Opportunity</a>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'budget',
    data () {
      return {
        balance: 0,
        newValue: 0
      }
    },
    created(){

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
