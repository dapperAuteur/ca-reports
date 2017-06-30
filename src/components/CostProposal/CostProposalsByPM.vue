<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Cost Proposals By PM

        <figure class="image">
          <button
            v-if="!costProposalIdSort"
            class="btn btn-info"
            @click="idSort">
            Sort Cost Proposals By Id
          </button>
          <button
            v-else
            class="btn btn-success"
            @click="userIdSort">
            Sort Cost Proposals By User Id
          </button>
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
        <app-cost-proposal
          v-for="costProposal in costProposals"
          :key="costProposal.id"
          :costProposal="costProposal">
        </app-cost-proposal>
      </div>
    </div>
    <footer class="card-footer">
      <a class="card-footer-item">Sort By PM Id</a>
      <a class="card-footer-item">Sort By PM Id Inverse</a>
      <a class="card-footer-item">Sort By Cost Proposal Value</a>
      <a class="card-footer-item">Sort By Cost Proposal Date</a>
    </footer>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import CostProposal from './CostProposal';
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        costProposalIdSort: false
      }
    },
    components: {
      appCostProposal: CostProposal
    },
    computed:{
      costProposals() {
        console.log(this.$store.getters.costProposalsGroupedByUserId);
        return this.$store.getters.costProposals;
      }
    },
    methods: {
      ...mapActions({
        sortCostProposalById: 'sortCostProposalById',
        sortCostProposalByCompanyId: 'sortCostProposalByCompanyId',
        sortCostProposalByUserId: 'sortCostProposalByUserId'
      }),
      idSort(){
        this.sortCostProposalById();
        this.costProposalIdSort = !this.costProposalIdSort;
      },
      userIdSort(){
        this.sortCostProposalByUserId();
        this.costProposalIdSort = !this.costProposalIdSort;
      }
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
