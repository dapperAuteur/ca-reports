<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        User Dashboard
      </p>
      <a class="card-header-icon">
        <span class="icon">
          <i class="fa fa-angle-down"></i>
        </span>
      </a>
    </header>
    <div class="card-content">
      <div class="content">
        <h2>All Proposals: 88</h2>
        <div class="columns">
          <div class="column">
            <h2>Proposals By {{ projMgrCount }} PMs</h2>
            <ul class="list-group">
              <li
                v-for="pm in projMgrNames"
                :key="projMgrNames.id"
                class="list-group-item"
                >
                {{ pm.attributes.email }} ## {{ costProposalsByPM.length }}
              </li>
            </ul>
          </div>
          <div class="column">
            <h2>Proposals By Date</h2>
            <h5>30 Days: 54</h5>
            <h5>6 Months: 300</h5>
            <h5>12 Months: 1000</h5>
          </div>
          <div class="column">
            <h2>Proposals By Cost & Date</h2>
            <h5>30 Days & Over $100k: 54</h5>
            <h5>6 Months & Over $500k: 300</h5>
            <h5>12 Months & Over $1M: 1000</h5>
          </div>
        </div>
        <br>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
  </div>
</template>
<script>
  import store from './../store/store';
  export default {
    name: 'budget',
    data () {
      return {
        balance: 0,
        newValue: 0,
      }
    },
    computed: {
      projMgrNames() {
        return this.$store.getters.users;
      },
      projMgrSortedCostProposals() {
        return this.$store.getters.costProposalsGroupedByUserId;
      },
      projMgrCount() {
        return this.$store.getters.costProposalsGroupedByUserId.length;
      },
      costProposalsByPM() {
        return this.$store.getters.costProposalsGroupedByUserId;
      }
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
