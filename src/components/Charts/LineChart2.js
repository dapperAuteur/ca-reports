import { PolarArea } from 'vue-chartjs'

export default PolarArea.extend({
  data() {
    return {

    }
  },
  mounted () {

    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Data One',
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75, 192, 192, 0.4)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75, 192, 192, 1)',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75, 192, 192, 1)',
          pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // scaleStartValue: 20,
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'Data Two',
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(75, 75, 192, 0.4)",
          borderColor: "rgba(75, 72, 192, 1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75, 72, 192, 1)',
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75, 72, 192, 1)',
          pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          // scaleStartValue: 20,
          data: [100, 20, 60, 20, 80, 55, 90],
        }
      ]
    },
    {
      responsive: true, maintainAspectRatio: false
    }
  )
  }
});
