import {Line} from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Noofsemesters','Noofstudents','Average CGPA'],
      datasets: [
        {
          label: '2018',
          backgroundColor: '#FC2525',
          data: [8,2000,6.9]
        },{
          label: '2019',
          backgroundColor: '#05CBE1',
          data: [8,2010,7.2]
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})

  }
}