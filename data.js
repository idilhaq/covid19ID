//Tanggal Update
var a = document.getElementsByClassName("tgl_update");
var date = "Update per Kamis, 12 Maret 2020 16:00 WIB";
a[0].innerHTML = date;
a[1].innerHTML = date;

//Dashboard
//Positif
document.getElementById("positif").innerHTML = "29";
document.getElementById("positif_note").innerHTML = "0";
//Meninggal
document.getElementById("meninggal").innerHTML = "1";
document.getElementById("meninggal_note").innerHTML = "0";
//Sembuh
document.getElementById("sembuh").innerHTML = "4";
document.getElementById("sembuh_note").innerHTML = "2";
//Proses Pemeriksaan
document.getElementById("pemeriksaan").innerHTML = "15";
//Negatif
document.getElementById("negatif").innerHTML = "744";
document.getElementById("negatif_note").innerHTML = "0";
//Total Test
document.getElementById("totaltes").innerHTML = "793";

//Jumlah Kasus Harian
//new_case
var b = document.getElementsByClassName("new_case");
b[0].innerHTML = "0";
//percentage_increase
var c = document.getElementsByClassName("percentage_increase");
c[0].innerHTML = "0";

//Chart
$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }

    var data_labels         = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'];
    var data_akumulatif     = [0, 2, 2, 2, 2, 4, 4, 6, 19, 27, 34, 34];
    var data_kasus_harian   = [0, 2, 0, 0, 0, 2, 0, 2, 13,  8,  7,  0];
    var data_meninggal      = [0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  1,  1];
    var data_sembuh         = [0, 0, 0, 0, 0, 0, 0, 0,  0,  0,  2,  4];

    var mode      = 'index'
    var intersect = true
  
    var $visitorsChart = $('#visitors-chart')
    var visitorsChart  = new Chart($visitorsChart, {
      data   : {
        labels  : data_labels,
        datasets: [{//akumulatif
          type                : 'line',
          data                : data_akumulatif,
          backgroundColor     : 'transparent',
          borderColor         : '#ffcc00',
          pointBorderColor    : '#ffcc00',
          pointBackgroundColor: '#ffcc00',
          fill                : false
          // pointHoverBackgroundColor: '#007bff',
          // pointHoverBorderColor    : '#007bff'
        },
          { //kasus harian
            type                : 'line',
            data                : data_kasus_harian,
            backgroundColor     : 'tansparent',
            borderColor         : '#007bff',
            pointBorderColor    : '#007bff',
            pointBackgroundColor: '#007bff',
            fill                : false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          },
          {//meninggal
            type                : 'line',
            data                : data_meninggal,
            backgroundColor     : 'tansparent',
            borderColor         : '#ff0000',
            pointBorderColor    : '#ff0000',
            pointBackgroundColor: '#ff0000',
            fill                : false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          },
          { //sembuh
            type                : 'line',
            data                : data_sembuh,
            backgroundColor     : 'tansparent',
            borderColor         : '#02c248',
            pointBorderColor    : '#02c248',
            pointBackgroundColor: '#02c248',
            fill                : false
            // pointHoverBackgroundColor: '#ced4da',
            // pointHoverBorderColor    : '#ced4da'
          }]
      },
      options: {
        maintainAspectRatio: false,
        tooltips           : {
          mode     : mode,
          intersect: intersect
        },
        hover              : {
          mode     : mode,
          intersect: intersect
        },
        legend             : {
          display: false
        },
        scales             : {
          yAxes: [{
            // display: false,
            gridLines: {
              display      : true,
              lineWidth    : '4px',
              color        : 'rgba(0, 0, 0, .2)',
              zeroLineColor: 'transparent'
            },
            ticks    : $.extend({
              beginAtZero : true,
              suggestedMax: 20
            }, ticksStyle)
          }],
          xAxes: [{
            display  : true,
            gridLines: {
              display: false
            },
            ticks    : ticksStyle
          }]
        }
      }
    })
  })


//Peta Penyebaran
// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
    ['id-3700', 0],
    ['id-ac', 0],
    ['id-jt', 0],
    ['id-be', 0],
    ['id-bt', 0],
    ['id-kb', 0],
    ['id-bb', 0],
    ['id-ba', 1],
    ['id-ji', 0],
    ['id-ks', 0],
    ['id-nt', 0],
    ['id-se', 0],
    ['id-kr', 0],
    ['id-ib', 0],
    ['id-su', 0],
    ['id-ri', 0],
    ['id-sw', 0],
    ['id-ku', 0],
    ['id-la', 0],
    ['id-sb', 0],
    ['id-ma', 0],
    ['id-nb', 0],
    ['id-sg', 0],
    ['id-st', 0],
    ['id-pa', 0],
    ['id-jr', 0],
    ['id-ki', 0],
    ['id-1024', 0],
    ['id-jk', 33],
    ['id-go', 0],
    ['id-yo', 0],
    ['id-sl', 0],
    ['id-sr', 0],
    ['id-ja', 0],
    ['id-kt', 0]
];

// Create the chart
Highcharts.mapChart('containerMap', {
    chart: {
        map: 'countries/id/id-all'
    },

    title: {
        text: 'Peta Persebaran Kasus Covid-19'
    },

    subtitle: {
        text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/id/id-all.js">Indonesia</a>'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Total Terinfeksi',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});