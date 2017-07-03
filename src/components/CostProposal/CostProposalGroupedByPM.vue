<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{ costProposal.attributes['user-id'] }} is PM of Cost Proposal {{ costProposal.id }}
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
        <h4>
            User Id: {{ costProposal.attributes['user-id'] }}<br />
            Opportunity Id: {{ costProposal.attributes['opportunity-id'] }}<br />
            Film Spec Id: {{ costProposal.attributes['film-spec-id'] }}<br />
            Film Quote Id: {{ costProposal.attributes['film-quote-id'] }}<br />
            Date: {{ costProposal.attributes.date }}<br />
            <!-- Section 1 Text: {{ costProposal.attributes['section1-text'] }}<br />
            TR1 Head: {{ costProposal.attributes['tr1-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr1-text'] }}<br />
            TR1-Head: {{ costProposal.attributes['tr2-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr2-text'] }}<br />
            TR1-Head: {{ costProposal.attributes['tr3-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr3-text'] }}<br />
            TR1-Head: {{ costProposal.attributes['tr4-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr4-text'] }}<br />
            TR1-Head: {{ costProposal.attributes['tr5-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr5-text'] }}<br />
            TR1-Head: {{ costProposal.attributes['tr6-head'] }}<br />
            TR1-Text: {{ costProposal.attributes['tr6-text'] }}<br />
            Del-1: {{ costProposal.attributes['del-1'] }}<br />
            Del-2: {{ costProposal.attributes['del-2'] }}<br />
            Del-3: {{ costProposal.attributes['del-3'] }}<br />
            Del-4: {{ costProposal.attributes['del-4'] }}<br />
            Del-5: {{ costProposal.attributes['del-5'] }}<br />
            Del-6: {{ costProposal.attributes['del-6'] }}<br />
            Del-7: {{ costProposal.attributes['del-7'] }}<br />
            File 1:{{ costProposal.attributes.file1 }}<br />
            File 2:{{ costProposal.attributes.file2 }}<br />
            File 3:{{ costProposal.attributes.file3 }}<br />
            File 4:{{ costProposal.attributes.file4 }}<br /> -->
            Signature: {{ costProposal.attributes.signature }}<br />
          </h4>
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
  import store from './../../store/store';
  export default {
    props: ['costProposal'],
    data () {
      return {

      }
    },
    computed: {
      costProposalByProjMgr() {
        var costProposals = this.$store.state.costProposals.costProposals;
        console.log(costProposals);
        var costProposalsByUser = this.$store.state.costProposalsByUser;
        console.log(costProposalsByUser);
      }
    },
    created(){

    },
    components: {

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
