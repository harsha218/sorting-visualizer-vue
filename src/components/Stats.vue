<template>
  <div>
    <apexcharts width="100%" height="600" :options="chartOptions" :series="series"></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Stats",
  components: {
    apexcharts: VueApexCharts
  },
  props: ["dataSet"],
  data: function() {
    return {
      chartOptions: {
        chart: {
          type: "bar"
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {}
        }
      },
      series: [
        {
          name: "series-1",
          data: this.dataSet
        }
      ]
    };
  },
  watch: {
    dataSet: function() {
      this.series = [
        {
          data: this.dataSet
        }
      ];
    }
  }
};
</script>