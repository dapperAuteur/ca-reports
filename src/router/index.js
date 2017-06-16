import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import CostProposal from '@/components/CostProposal/CostProposal'
import CostProposals from '@/components/CostProposal/CostProposals'
import CostProposalsByCostAndDate from '@/components/CostProposal/CostProposalsByCostAndDate'
import CostProposalsByDate from '@/components/CostProposal/CostProposalsByDate'
import CostProposalsByPM from '@/components/CostProposal/CostProposalsByPM'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Db',
      component: Dashboard
    },
    {
      path: '/cost-proposal',
      name: 'CostProposal',
      component: CostProposal
    },
    {
      path: '/cost-proposals',
      name: 'CostProposals',
      component: CostProposals
    },
    {
      path: '/cost-proposals-by-cost-and-date',
      name: 'CostProposalsByCostAndDate',
      component: CostProposalsByCostAndDate
    },
    {
      path: '/cost-proposals-by-date',
      name: 'CostProposalsByDate',
      component: CostProposalsByDate
    },
    {
      path: '/cost-proposals-by-pm',
      name: 'CostProposalsByPM',
      component: CostProposalsByPM
    }
  ]
})
