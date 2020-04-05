a[0].innerHTML = date;
a[1].innerHTML = date;
//Jumlah Kasus Harian
//new_case
var b = document.getElementsByClassName("new_case");
b[0].innerHTML = x_data[1];
//percentage_increase
var c = document.getElementsByClassName("percentage_increase");
c[0].innerHTML = x_data[10];

//Chart
$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }

    var data_labels = ['3/1','3/2','3/3','3/4','3/5','3/6','3/7','3/8','3/9','3/10','3/11','3/12','3/13','3/14','3/15','3/16','3/17','3/18','3/19','3/20','3/21','3/22','3/23','3/24','3/25','3/26','3/27','3/28','3/29','3/30','3/31','4/1','4/2','4/3','4/4','4/5'];
    var data_akumulatif = [0,2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369,450,514,579,685,790,893,1046,1155,1285,1414,1528,1677,1790,1986,2092,2273];
    var data_kasus_harian = [0,2,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60,81,64,65,106,105,103,153,109,130,129,114,149,113,196,106,181];
    var data_meninggal = [0,0,0,0,0,0,0,0,0,0,2,4,4,5,5,5,5,19,25,32,38,48,49,55,58,78,87,102,114,122,136,157,170,181,191,198];
    var data_sembuh = [0,0,0,0,0,0,0,0,0,0,2,3,5,8,8,8,9,11,15,16,20,29,30,30,31,35,46,59,64,75,81,103,112,134,150,164];

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
var data_Map_Indonesia = [
  ['id-jk',1028],['id-jr',247],['id-bt',173],['id-ji',152],['id-jt',120],['id-se',82],['id-yo',33],['id-ba',32],['id-su',25],['id-ki',24],['id-pa',18],['id-sl',12],['id-kt',11],['id-1024',11],['id-kb',10],['id-ri',10],['id-ks',8],['id-ku',8],['id-kr',8],['id-sb',8],['id-nb',7],['id-ac',5],['id-sg',5],['id-st',4],['id-sw',3],['id-be',2],['id-ja',2],['id-bb',2],['id-ib',2],['id-ma',1],['id-la',1],['id-sr',1],['id-go',0],['id-nt',0],['id-3700',37]
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
      dataClasses: [
        {name:'No Case',to: 1,color: '#66ff66'}, 
        {name:'1-10',from:1,to:10,color:'#ffff00'},
        {name:'10-50',from:10,to:50,color:'#ffb200'},
        {name:'50-100',from:50,to:100,color:'#ff6600'},
        {name:'100-300',from:100,to:300,color:'#ff0000'},
        {name:'300-500',from:300,to:500,color:'#d90800'},
        {name:'500-1000',from:500,to:1000,color:'#8c1700'},
        {name:'1000-2000',from:1000,to:2000,color:'#661f00'}
      ]
    },

    series: [{
        data: data_Map_Indonesia,
        name: 'Total Terinfeksi',
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
});

function arrayToTable(tableData) {
  var table = $('<table id="tabel_k" class="table table-sm"></table>');
  var tbody = $('<tbody></tbody>')
  $(tableData).each(function (i, rowData) {
      if(i == 0){
        var thead = $('<thead></thead>');
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
            if(j == 0){
                row.append($('<th style="width: 200px">'+cellData+'</th>'));
            }else{
                row.append($('<th style="text-align:center;width: 150px">'+cellData+'</th>'));
            }
        });
        thead.append(row);
        table.append(thead);
      }else{
        var row = $('<tr></tr>');
        $(rowData).each(function (j, cellData) {
          if(j == 0){
              row.append($('<td>'+cellData+'</td>'));
          }else{
              row.append($('<td style="text-align:center;">'+cellData+'</td>'));
          }
        });
      }
      tbody.append(row);
      
  });
  table.append(tbody);
  return table;
}

$.ajax({
  type: "GET",
  url: "https://docs.google.com/spreadsheets/d/e/2PACX-1vQw8mTbcVOX_Yyb6tXP7m851FSIDIP3pfuLAcmbfnlCNXBvevLcUUN6ooW6Wc5Egb0wmdpLSLtceC7k/pub?gid=84311913&single=true&output=csv",
  success: function (data) {
      $('#tabel_kasus_provinsi').append(arrayToTable(Papa.parse(data).data));
  }
});

//{"cases":740235,"deaths":35035,"recovered":156588,"updated":1585576778367,"active":548612}
$.getJSON('https://corona.lmao.ninja/all', function(dataz) {
    var world_cases_all = numberWithCommas(dataz.cases);
    $("#world_cases_all").html(world_cases_all);

    var world_cases_death = numberWithCommas(dataz.deaths);
    $("#world_cases_death").html(world_cases_death);

    var world_cases_recovered = numberWithCommas(dataz.recovered);
    $("#world_cases_recovered").html(world_cases_recovered);

    var world_cases_active = numberWithCommas(dataz.active);
    $("#world_cases_active").html(world_cases_active);
});

//ASEAN

var ctx = document.getElementById("asean-charts-canvas").getContext('2d');

// Define the data 
var data = [3483,3094,2092,2067,1114,240,135,114,20]; // Add data values to array

var labels = ["Malaysia","Philippines","Indonesia","Thailand","Singapore","Vietnam","Brunei","Cambodia","Myanmar"]; // Add labels to array
// End Defining data

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Jumlah Kasus Terkonfirmasi', // Name the series
          data: data, // Specify the data values array
          backgroundColor: [ // Specify custom colors
            "#4040ff",
            "#4040ff",
            "#ff4c4c",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff"
          ]
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});


//WORLD




var ctx = document.getElementById("world-charts-canvas").getContext('2d');

// Define the data 
var data = [277613,124736,119827,92050,82165,81639,55743,41903,20921,20278,18431,16627,12549,11781,10524,2092]; // Add data values to array

var labels = ["USA","Spain","Italy","Germany","France","China","Iran","UK","Turkey","Switzerland","Belgium","Netherlands","Canada","Austria","Portugal","Indonesia"]; // Add labels to array
// End Defining data

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Jumlah Kasus Terkonfirmasi', // Name the series
          data: data, // Specify the data values array
          backgroundColor: [ // Specify custom colors
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#4040ff",
            "#ff4c4c"
          ]
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});
