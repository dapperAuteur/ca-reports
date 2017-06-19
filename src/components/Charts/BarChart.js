import { Bar } from 'vue-chartjs'

export default Bar.extend({
  data() {
    return {
      gradient: null,
      gradient2: null
    }
  },
  mounted () {

    this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(0,0,0, 450)
    this.gradient2 = this.$refs.canvas.getContext('2d').createLinearGradient(0,0,0, 450)

    this.gradient.addColorStop(0, 'rgba(100, 0, 0, 0.5)')
    this.gradient.addColorStop(0.5, 'rgba(100, 0, 0, 0.25)')
    this.gradient.addColorStop(1, 'rgba(100, 0, 0, 0)')

    this.gradient2.addColorStop(0, 'rgba(75, 0, 0, 0.9)')
    this.gradient2.addColorStop(0.5, 'rgba(75, 0, 0, 0.25)')
    this.gradient2.addColorStop(1, 'rgba(75, 0, 0, 0)')

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          borderColor: '#FC2525',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: 'white',
          backgroundColor: this.gradient,
          data: [90, 86, 4, 200, 39, 80, 40]
        },
        {
          label: 'Data Two',
          borderColor: '#05CBE1',
          pointBackgroundColor: 'white',
          pointBorderColor: 'white',
          borderWidth: 1,
          backgroundColor: this.gradient2,
          data: [60, 55, 32, 10, 2, 12, 53]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
})
