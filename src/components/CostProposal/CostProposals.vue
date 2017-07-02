<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        All Cost Proposals
        <button
          v-if="!costProposalIdSort"
          class="btn btn-info"
          @click="idSort">
          Sort Cost Proposals By Id
        </button>
        <button
          v-else
          class="btn btn-success"
          @click="companyIdSort">
          Sort Cost Proposals By Company Id
        </button>
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
        <div class="">

        </div>
        <app-cost-proposal
          v-for="costProposal in costProposals"
          :key="costProposal.id"
          :costProposal="costProposal">
        </app-cost-proposal>
      </div>
    </div>
  </div>
</template>

<script>
  import CostProposal from './CostProposal';
  import { mapActions } from 'vuex';
  export default {
    data () {
      return {
        costProposalIdSort: true
      }
    },
    components: {
      appCostProposal: CostProposal
    },
    computed:{
      costProposals() {
        console.log(this.$store.getters.costProposals);
        return this.$store.getters.costProposals;
      }
    },
    methods: {
      ...mapActions({
        sortCostProposalById: 'sortCostProposalById',
        sortCostProposalByCompanyId: 'sortCostProposalByCompanyId'
      }),
      idSort(){
        this.sortCostProposalById();
        this.costProposalIdSort = !this.costProposalIdSort;
      },
      companyIdSort(){
        this.sortCostProposalByCompanyId();
        this.costProposalIdSort = !this.costProposalIdSort;
      },
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
