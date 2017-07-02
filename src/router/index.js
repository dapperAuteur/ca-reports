import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'

import CostProposal from '@/components/CostProposal/CostProposal'
import CostProposals from '@/components/CostProposal/CostProposals'
import CostProposalsByCostAndDate from '@/components/CostProposal/CostProposalsByCostAndDate'
import CostProposalsByDate from '@/components/CostProposal/CostProposalsByDate'
import CostProposalsByPM from '@/components/CostProposal/CostProposalsByPM'
import CostProposalsByPM2 from '@/components/CostProposal/CostProposalsByPM2'
import CostProposalsByPM3 from '@/components/CostProposal/CostProposalsByPM3'

import BarChart from '@/components/Charts/BarChart'
import LineChart from '@/components/Charts/LineChart'
import LineChart2 from '@/components/Charts/LineChart2'

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
    },
    {
      path: '/cost-proposals-by-pm2',
      name: 'CostProposalsByPM2',
      component: CostProposalsByPM2
    },
    {
      path: '/cost-proposals-by-pm3',
      name: 'CostProposalsByPM3',
      component: CostProposalsByPM3
    },
    {
      path: '/bar-chart',
      name: 'BarChart',
      component: BarChart
    },
    {
      path: '/line-chart',
      name: 'LineChart',
      component: LineChart
    },,
    {
      path: '/line-chart-2',
      name: 'LineChart2',
      component: LineChart2
    },
  ]
})
