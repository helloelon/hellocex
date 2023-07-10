/*===============================
        08. Chart function
==================================*/    
    chart();

    function chart(){
      /* Layout 1 Token Chat */
      var colors = ['#e8ca04', '#d47c0c', '#f0931e', '#f6aa35', '#fbbd18'];
      var labels = ["Repurchases", "Cooperation fee", "Material costs", "Publish paper", "Others"];
      var data = [90, 5, 1, 1, 3];
      var bgColor = colors;
      var dataChart = {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: bgColor,
          borderWidth: 0
        }]
      };
      var config = {
        type: 'doughnut',
        data: dataChart,
        options: {
          maintainAspectRatio: false,
          cutoutPercentage: 40,
          legend: {
            display: false
          },
          legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="doughnut-legend">');
            if (chart.data.datasets.length) {
              for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                if (chart.data.labels[i]) {
                  text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                }
                text.push('</li>');
              }
            }
            text.push('</ul>');
            return text.join("");
          },
          tooltips: {
            yPadding: 10,
            callbacks: {
              label: function(tooltipItem, data) {
                var total = 0;
                data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                  total += element;
                });
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                var percentTxt = Math.round(value / total * 100);
                return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
              }
            }
          }
        }
      };
      
      var ctx = document.getElementById("doughnutChart").getContext("2d");
      var doughnutChart = new Chart(ctx, config);

      var legend = doughnutChart.generateLegend();
      var legendHolder = document.getElementById("legend");
      legendHolder.innerHTML = legend;

       /* Layout 2 Token Chat */
      var layout2colors = ['#d7bd68', '#d47c0c', '#f0931e', '#f6aa35', '#fbbd18','#fbc73b','#d47c0c'];
      var layout2labels = ["50% Airdrop", "15% Marketing", "10% CEX", "10% Development", "5% Team", "5% IDO", "5% Reserve"];
      var layout2data = [50, 15, 10, 10, 5, 5, 5];
      var layout2data2 = [10, 20, 30, 30, 20];
      var bgColor = layout2colors;

      var layout2dataChart = {
        labels: layout2labels,
        datasets: [{
          data: layout2data,
          backgroundColor: bgColor,
          borderWidth: 0
        }]
      };
      var layout2dataChart2 = {
        labels: layout2labels,
        datasets: [{
          data: layout2data2,
          backgroundColor: bgColor,
          borderWidth: 0
        }]
      };
      var layout2config1 = {
        type: 'doughnut',
        data: layout2dataChart,
        options: {
          maintainAspectRatio: false,
          cutoutPercentage: 40,
          legend: {
            display: false
          },
          legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="doughnut-legend">');
            if (chart.data.datasets.length) {
              for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                if (chart.data.labels[i]) {
                  text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                }
                text.push('</li>');
              }
            }
            text.push('</ul>');
            return text.join("");
          },
          tooltips: {
            yPadding: 10,
            callbacks: {
              label: function(tooltipItem, data) {
                var total = 0;
                data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                  total += element;
                });
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                var percentTxt = Math.round(value / total * 100);
                return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
              }
            }
          }
        }
      };

      var layout2config2 = {
        type: 'doughnut',
        data: layout2dataChart2,
        options: {
          maintainAspectRatio: false,
          cutoutPercentage: 40,
          legend: {
            display: false
          },
          legendCallback: function(chart) {
            var text = [];
            text.push('<ul class="doughnut-legend">');
            if (chart.data.datasets.length) {
              for (var i = 0; i < chart.data.datasets[0].data.length; ++i) {
                text.push('<li><span class="doughnut-legend-icon" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
                if (chart.data.labels[i]) {
                  text.push('<span class="doughnut-legend-text">' + chart.data.labels[i] + '</span>');
                }
                text.push('</li>');
              }
            }
            text.push('</ul>');
            return text.join("");
          },
          tooltips: {
            yPadding: 10,
            callbacks: {
              label: function(tooltipItem, data) {
                var total = 0;
                data.datasets[tooltipItem.datasetIndex].data.forEach(function(element /*, index, array*/ ) {
                  total += element;
                });
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                var percentTxt = Math.round(value / total * 100);
                return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + ' (' + percentTxt + '%)';
              }
            }
          }
        }
      };

      if($('#layout2doughnutChart1').length > 0){
        var layout2ctx1 = document.getElementById("layout2doughnutChart1").getContext("2d");
        var layout2doughnutChart1 = new Chart(layout2ctx1, layout2config1);

        var layout2legend1 = layout2doughnutChart1.generateLegend();
        var layout2legendHolder1 = document.getElementById("layout2legend1");
        layout2legendHolder1.innerHTML = layout2legend1;
      }

      /*var layout2ctx2 = document.getElementById("layout2doughnutChart2").getContext("2d");
      var layout2doughnutChart2 = new Chart(layout2ctx2, layout2config2);

      var layout2legend2 = layout2doughnutChart2.generateLegend();
      var layout2legendHolder2 = document.getElementById("layout2legend2");
      layout2legendHolder2.innerHTML = layout2legend2;*/

   }