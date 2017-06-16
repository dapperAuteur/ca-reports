<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Cost Proposal {{ costProposalDetails.id }}
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
            User Id: {{ costProposalDetails.attributes['user-id'] }}<br />
            Opportunity Id: {{ costProposalDetails.attributes['opportunity-id'] }}<br />
            Film Spec Id: {{ costProposalDetails.attributes['film-spec-id'] }}<br />
            Film Quote Id: {{ costProposalDetails.attributes['film-quote-id'] }}<br />
            Date: {{ costProposalDetails.attributes.date }}<br />
            Section 1 Text: {{ costProposalDetails.attributes['section1-text'] }}<br />
            TR1 Head: {{ costProposalDetails.attributes['tr1-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr1-text'] }}<br />
            TR1-Head: {{ costProposalDetails.attributes['tr2-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr2-text'] }}<br />
            TR1-Head: {{ costProposalDetails.attributes['tr3-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr3-text'] }}<br />
            TR1-Head: {{ costProposalDetails.attributes['tr4-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr4-text'] }}<br />
            TR1-Head: {{ costProposalDetails.attributes['tr5-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr5-text'] }}<br />
            TR1-Head: {{ costProposalDetails.attributes['tr6-head'] }}<br />
            TR1-Text: {{ costProposalDetails.attributes['tr6-text'] }}<br />
            Del-1: {{ costProposalDetails.attributes['del-1'] }}<br />
            Del-2: {{ costProposalDetails.attributes['del-2'] }}<br />
            Del-3: {{ costProposalDetails.attributes['del-3'] }}<br />
            Del-4: {{ costProposalDetails.attributes['del-4'] }}<br />
            Del-5: {{ costProposalDetails.attributes['del-5'] }}<br />
            Del-6: {{ costProposalDetails.attributes['del-6'] }}<br />
            Del-7: {{ costProposalDetails.attributes['del-7'] }}<br />
            File 1:{{ costProposalDetails.attributes.file1 }}<br />
            File 2:{{ costProposalDetails.attributes.file2 }}<br />
            File 3:{{ costProposalDetails.attributes.file3 }}<br />
            File 4:{{ costProposalDetails.attributes.file4 }}<br />
            Signature: {{ costProposalDetails.attributes.signature }}<br />
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
    name: 'budget',
    data () {
      return {

      }
    },
    computed: {
      costProposalDetails() {
        this.costProposals = this.$store.state.costProposals.costProposals;
        this.$store.state.costProposals = this.costProposals;
        console.log(this.costProposals);
        return this.$store.state.costProposals;
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
