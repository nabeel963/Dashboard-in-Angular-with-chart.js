import { Component, Input, OnInit } from '@angular/core';
import {
  Chart,
  ChartConfiguration,
  ChartEvent,
  ChartType,
  DefaultDataPoint,
  ScatterDataPoint,
  BubbleDataPoint,
  ChartOptions,
} from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { endWith } from 'rxjs';
//import { Label } from 'ng2-charts';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent  implements OnInit {
  /*for multiple Bar Lines start*/
  barData = [
    [10000, 8700, 12400],
    [13200, 9200, 21000],
  ];
  barLabels = ['LOWEST', 'MEDIAN', 'HIGHEST',];
  public barChartType: ChartType = 'bar';
  public barChartData: any;
  defaultBarChartData: any;
  public barChartPlugins = [DataLabelsPlugin, ChartAnnotation];
  // barChartPluginsLine = [ChartAnnotation];
  /*for multiple Bar Lines end*/
  /*for single Bar Lines start*/
  singleBarData = [
    [880, 998, 700, 1500, 1000, 12400, 2000,3700,5000,3000,2300,3500],
  ];
  
  singleBarLabels = "ABCDEFGHIJKLMNOPQRSTUVXYZ".split("");
  public singleBarChartType: ChartType = 'bar';
  public singleBarChartData: any;
  defaultSingleBarChartData: any;
   randomColor  = ['#2ECC71','#D68910','#2E86C1','#CB4335','#76448A','#D4AC0D','#283747','#A569BD','#839192','#1ABC9C','#F5B041','#5499C7',];
  /*for single Bar Lines end*/
  /*for pie start*/
  pieData = [
    [880, 998, 700, 1500],
  ];
  pieLabels = ['SUFFIX', 'CURRENT', 'DATELESS','PREFIX'];
  public pieChartType: ChartType = 'pie';
  public pieChartData: any;
  defaultPieChartData: any;
  public pieChartPlugins = [DataLabelsPlugin];
  /*for pie end*/
  /*for scatter start*/
  //public provinces = ["100,000", "200,000", "300,000", "400,000", "50,0000", "600,000", "700,000", "800,000", "900,000", "1,000,000"];
 // public population = [10000, 25000, 50000, 40000, 75000, 100000, 80000, 120000, 150000,180000];
 lineData = [
  [10000, 25000, 50000, 40000, 75000, 100000, 80000, 120000, 150000,180000], [11000, 30000, 45000, 50000, 80000, 110000, 100000, 100000, 150000,150000],
];
lineLabels = ["100,000", "200,000", "300,000", "400,000", "50,0000", "600,000", "700,000", "800,000", "900,000", "1,000,000"];
public lineChartType: ChartType = 'line';
public lineChartData: any;
defaultLineChartData: any;
public lineChartPlugins = [DataLabelsPlugin];
  /*for pie end*/
  
  constructor() {
   
   }

  ngOnInit(): void {
    //console.log(this.scatterData);
    /*for multiple Bar Lines start*/
    this.defaultBarChartData = {
      labels: this.barLabels,
      datasets: [
        {
          data: '£'+this.barData[0],
          label: 'Sold',
          backgroundColor: '#1e81b0',
          hoverBackgroundColor: '#1e81b0',
          hoverBorderColor: '#154c79',
          barPercentage: 1.0,
          categoryPercentage: 0.8
        },
        {
          data: this.barData[1],
          label: 'Asking Price',
          backgroundColor: '#154c79',
          hoverBackgroundColor: '#154c79',
          hoverBorderColor: '#1e81b0',
          barPercentage: 1.0,
    categoryPercentage: 0.8
        },
      ], 
    };

    if (
      this.barData !== undefined &&
      this.barLabels !== undefined &&
      Array.isArray(this.barData) &&
      this.barData.length > 0 &&
      Array.isArray(this.barLabels) &&
      this.barLabels.length > 0
    ) {
      this.barChartData = {
        ...this.defaultBarChartData,
        ...{ labels: this.barLabels },
      } as ChartConfiguration['data'];
      this.barChartData.datasets[0].data = this.barData[0];
    } else {
      throw new Error('Charts must have their data and labels inputs defined.');
    }
    /*for multiple Bar Lines end*/
     /*for single Bar Lines start*/
     this.defaultSingleBarChartData = {
      labels: this.singleBarLabels,
      datasets: [
        {
          data: '£'+this.singleBarData[0],
          label: 'Cost',
          backgroundColor: this.randomColor,
          hoverBackgroundColor: '#1e81b0',
          hoverBorderColor: '#154c79',
          barPercentage: 1.0,
    categoryPercentage: 1.0
        }
      ], 
    };

    if (
      this.singleBarData !== undefined &&
      this.singleBarLabels !== undefined &&
      Array.isArray(this.singleBarData) &&
      this.singleBarData.length > 0 &&
      Array.isArray(this.singleBarLabels) &&
      this.singleBarLabels.length > 0
    ) {
      this.singleBarChartData = {
        ...this.defaultSingleBarChartData,
        ...{ labels: this.singleBarLabels },
      } as ChartConfiguration['data'];
      this.singleBarChartData.datasets[0].data = this.singleBarData[0];
    } else {
      throw new Error('Charts must have their data and labels inputs defined.');
    }
    /*for single Bar Lines end*/
     /*for Pie start*/
     this.defaultPieChartData = {
      labels: this.pieLabels,
      datasets: [
        {
          data: '£'+this.pieData[0],
          label: 'Proportion',
          backgroundColor: [
            'rgb(255, 99, 132)','rgb(54, 162, 235)','rgb(255, 205, 86)','#CB4335',
          ],
          hoverBackgroundColor: '#1e81b0',
          hoverBorderColor: '#154c79',
          borderWidth: 1,
          borderColor: '#fff'
        }
      ], 
    };

    if (
      this.pieData !== undefined &&
      this.pieLabels !== undefined &&
      Array.isArray(this.pieData) &&
      this.pieData.length > 0 &&
      Array.isArray(this.pieLabels) &&
      this.pieLabels.length > 0
    ) {
      this.pieChartData = {
        ...this.defaultPieChartData,
        ...{ labels: this.pieLabels },
      } as ChartConfiguration['data'];
      this.pieChartData.datasets[0].data = this.pieData[0];
    } else {
      throw new Error('Charts must have their data and labels inputs defined.');
    }
    /*for Pie end*/
    /*for lineChart start*/
    //this.scatterData = this.provinces.map((province, index) => ({ x: index, y: this.population[index] }));
//console.log(this.scatterData)
    this.defaultLineChartData = {
      labels: this.lineLabels,
      datasets: [
        {
          data: this.lineData[0],
          label: 'Price Index',
          hoverBackgroundColor: '#154c79',
          hoverBorderColor: '#154c79',
          borderWidth: 3,
          borderColor: '#154c79',
          pointBackgroundColor: "#154c79",
          pointHoverBackgroundColor: '#1e81b0',
          pointHoverBorderColor: '#1e81b0',
          pointRadius: 5,
          tension: 0.4,
          fill: false,
        },
        {
          data: this.lineData[1],
          label: 'Price Index',
          hoverBackgroundColor: '#1e81b0',
          hoverBorderColor: '#1e81b0',
          borderWidth: 3,
          borderColor: '#1e81b0',
          pointBackgroundColor: "#1e81b0",
          pointHoverBackgroundColor: '#154c79',
          pointHoverBorderColor: '#154c79',
          pointRadius: 5,
          tension: 0.4,
          fill: false,
        }
      ], 
    };

if (
  this.lineData !== undefined &&
  this.lineLabels !== undefined &&
  Array.isArray(this.lineData) &&
  this.lineData.length > 0 &&
  Array.isArray(this.lineLabels) &&
  this.lineLabels.length > 0
) {
  this.lineChartData = {
    ...this.defaultLineChartData,
    ...{ labels: this.lineLabels },
  } as ChartConfiguration['data'];
  this.lineChartData.datasets[0].data = this.lineData[0];
} else {
  throw new Error('Charts must have their data and labels inputs defined.');
}
    /*for scatter end*/
  }
  /*for multiple Bar Lines start*/
  public barChartOptions: ChartConfiguration['options']= {responsive: true,
    
    plugins: {
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'y',
            value: 6000,
            borderColor: 'red',
            borderWidth: 2,
            borderDash: [10,10],
            label: {
              content: '£6,000',
              display: true,
              position: 'end',
            }
          },
        ]
      },
       legend: { position: 'bottom' },
    title: {
      display: true,
      position: 'top',
      align: 'start',
      text: 'Price Data'
    },
    datalabels: {
      color: '#fff',
      formatter: function (value,context) {
        return '£' +Math.round(value);
      },
      font: {
        size: 10,
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
      }
    }, 
   }, scales: {  
      y: {
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return '£' + value;
              }
          }
      },
      x: {
        grid: {
          display: false
        }
      }
    },
    
    
    
  };
  /*for multiple Bar Lines end*/
  /*for single Bar Lines start*/
  public singleBarChartOptions: ChartConfiguration['options']= {
    responsive: true,
    indexAxis: 'y',
    plugins: { legend: { position: 'bottom',display:false },
    title: {
      display: true,
      position: 'top',
      align: 'start',
      text: 'Cost'
    },
    datalabels: {
      display: false
    }, 
   }, scales: {
      x: {
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return '£' + value;
              }
          },
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          stepSize: 1,
          autoSkip: false,
          
        },
        
      }
  }
  };
  /*for single Bar Lines end*/
  /*for Pie start*/
  //public chartPlugins = [pluginDataLabels.default];
  public pieChartOptions: ChartConfiguration['options']= {
    responsive: true,
   
    plugins: { 
      legend: { position: 'bottom',display:false }, 
      datalabels: {
        color: '#fff',
        formatter: (val, ctx) => {
          // Grab the label for this value
          const label: any = this.pieLabels[ctx.dataIndex];
          //this.pieLabels;
          // Format the number with 2 decimal places
          const formattedVal = Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
          }).format(val);

          // Put them together
          return `${label}`;
        },
      },
      title: {
        display: true,
        position: 'top',
        align: 'start',
        text: 'Propotion'
      },
      
    }, scales: {
      y: {
          ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, ticks) {
                  return '£' + value;
              }
          },
          display: false,
          grid: {
            display: false
          }
      },
      x: {
        display: false,
        grid: {
          display: false
        }
      },      
  },
  };
  /*for Pie end*/
  /*for scatter start*/
  //public chartPlugins = [pluginDataLabels.default];
  public lineChartOptions: ChartConfiguration['options']= 
  {
    responsive: true,
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      title: {
        display: true,
        position: 'top',
        align: 'start',
        text: 'Price Index'
      },
      datalabels: {
        display: false
      },
      legend: {
        display:false,
        labels: {
          color: '#000',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#000',
        },
        grid: {
          display: false,
          color: '#000',
          drawBorder: true,
        },
      },
      y: {
        ticks: {
          color: '#000',
        },
        grid: {
          drawBorder: true,
        },
      },
    },
       /* scales: {
          x: {
            grid: {
              display: false
            },
            type: 'category',
            position: 'bottom',
            labels: this.provinces,
            title: {
              display: true,
              text: 'Incidence',
              font: {
                size: 14,
                weight: 'bold',
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              },
              padding: {
                top: 10,
                bottom: 30
              }
            }
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Price',
              font: {
                size: 14,
                weight: 'bold',
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              },
              padding: {
                top: 10,
                bottom: 30
              }
              
            }
          }
        },*/
        /*plugins: {
          title: {
            display: true,
            position: 'top',
            align: 'start',
            text: 'Popularity / Price Correlation'
          },
          datalabels: {
            display: false
          },
          legend: {
            display: false,
            labels: {
              font: {
                size: 10,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
              }
            },
          },
          tooltip: {
            titleFont: {
              size: 10,
              weight: 'bold',
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            bodyFont: {
              size: 12,
              family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            }
          }
        }*/
  };
  /*for scatter end*/
  
}
