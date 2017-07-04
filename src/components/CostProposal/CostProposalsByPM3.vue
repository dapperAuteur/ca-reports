<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Cost Proposals By PM
        <button
          class="btn btn-warning"
          @click="pm1">
          Project Manager 1's Cost Proposals
        </button>
        <button
          class="btn btn-warning"
          @click="pm2">
          Project Manager 2's Cost Proposals
        </button>
        <h3>PM: {{ pm }}</h3>
        <figure class="image">
          <!-- <button
            class="btn btn-warning"
            @click="costProposalsByPM">
            Group Cost Proposals By PM
          </button> -->
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
        <app-cost-proposal-grouped-by-p-m
          v-for="costProposal in costProposalsByForLoop()"
          :key="costProposal.id"
          :costProposal="costProposal"
          class="column is-one-third">
        </app-cost-proposal-grouped-by-p-m>
      </div>
    </div>
    <!-- <div class="card-content">
      <div class="content">
        <app-cost-proposal
          v-for="costProposal in costProposals"
          :key="costProposal.id"
          :costProposal="costProposal">
        </app-cost-proposal>
      </div>
    </div> -->
    <footer class="card-footer">
      <a
        class="card-footer-item"
        @click="userIdSort"
        >Sort By PM Id
      </a>
      <a
        class="card-footer-item"
        @click="userIdSortReverse"
        >Sort By PM Id Inverse
      </a>
      <a class="card-footer-item">Sort By Cost Proposal Value</a>
      <a class="card-footer-item">Sort By Cost Proposal Date</a>
    </footer>
  </div>
</template>

<script>
  import * as d3 from 'd3';
  import CostProposal from './CostProposal';
  import CostProposalGroupedByPM from './CostProposalGroupedByPM';
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        costProposalIdSort: false,
        pm: 1
      }
    },
    components: {
      appCostProposal: CostProposal,
      appCostProposalGroupedByPM: CostProposalGroupedByPM
    },
    computed:{
      costProposals() {
        return this.$store.getters.costProposals;
      },
      costProposalByPM() {
        return this.$store.getters.costProposalsGroupedByUserId;
      }
    },
    methods: {
      ...mapActions({
        sortCostProposalById: 'sortCostProposalById',
        sortCostProposalByCompanyId: 'sortCostProposalByCompanyId',
        sortCostProposalByUserId: 'sortCostProposalByUserId',
        sortCostProposalByUserIdReverse: 'sortCostProposalByUserIdReverse',
        initCostProposalsGroupedByUserId: 'initCostProposalsGroupedByUserId'
      }),
      idSort(){
        this.sortCostProposalById();
        this.costProposalIdSort = !this.costProposalIdSort;
      },
      userIdSort(){
        this.sortCostProposalByUserId();
        this.costProposalIdSort = !this.costProposalIdSort;
      },
      userIdSortReverse(){
        this.sortCostProposalByUserIdReverse();
      },
      costProposalsByPM(){
        this.initCostProposalsGroupedByUserId();
        console.log(this.$store.getters.costProposalsGroupedByUserId);
        console.log(this.$store.getters.costProposalsGroupedByUserId.length);
      },
      // a method which filters the stories depending on the writter
      costProposalsBy: function (pm) {
        return this.costProposals.filter(function (costProposal) {
          return costProposal.attributes['user-id'] === pm
        });
      },
      costProposalsByForLoop: function(pm) {
        pm = this.pm;
        for(var j = 0; j < this.$store.getters.costProposalsGroupedByUserId.length; j++) {
          return this.costProposals.filter(function (costProposal) {
            return costProposal.attributes['user-id'] === pm;
          });
        }
      },
      pm1() {
        console.log('pm 1');
        this.pm = 1;
      },
      pm2() {
        console.log('pm 2');
        this.pm = 2;
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
