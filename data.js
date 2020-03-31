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

    var data_labels = ['3/1','3/2','3/3','3/4','3/5','3/6','3/7','3/8','3/9','3/10','3/11','3/12','3/13','3/14','3/15','3/16','3/17','3/18','3/19','3/20','3/21','3/22','3/23','3/24','3/25','3/26','3/27','3/28','3/29','3/30','3/31'];
    var data_akumulatif = [0,2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369,450,514,579,685,790,893,1046,1155,1285,1414,1528];
    var data_kasus_harian = [0,2,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60,81,64,65,106,105,103,153,109,130,129,114];
    var data_meninggal = [0,0,0,0,0,0,0,0,0,0,2,4,4,5,5,5,5,19,25,32,38,48,49,55,58,78,87,102,114,122,136];
    var data_sembuh = [0,0,0,0,0,0,0,0,0,0,2,3,5,8,8,8,9,11,15,16,20,29,30,30,31,35,46,59,64,75,81];
    
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
  ['id-jk',675],['id-jr',149],['id-bt',106],['id-ji',90],['id-jt',63],['id-se',47],['id-yo',22],['id-ki',17],['id-ba',10],['id-pa',9],['id-kb',8],['id-su',8],['id-kt',7],['id-ac',5],['id-kr',5],['id-sb',5],['id-1024',4],['id-sg',3],['id-sl',2],['id-ku',2],['id-nb',2],['id-ib',2],['id-ri',2],['id-st',2],['id-sw',2],['id-ja',1],['id-ks',1],['id-ma',1],['id-la',1],['id-sr',1],['id-be',0],['id-go',0],['id-bb',0],['id-nt',0],['id-3700',162]
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
        {name:'No Case',to: 1,color: '#FFFFFF'}, 
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
        data: data,
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
var data = [2626, 1546, 1524, 1414, 879, 203, 127, 107, 14, 8]; // Add data values to array

var labels = ["Malaysia",	"Philippines",	"Thailand",	"Indonesia",	"Singapore",	"Vietnam",	"Brunei", "Cambodia",	"Myanmar", "Laos"]; // Add labels to array
// End Defining data

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Jumlah Kasus Terkonfirmasi', // Name the series
          data: data, // Specify the data values array
          backgroundColor: [ // Specify custom colors
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#ff0000",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF"
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
var data = [145542,101739,85195,81470,63929,41495,40174,22141,15760,11899,11750,10827,9661,9520,6671,6408,4445,4371,4347,4245,1414]; // Add data values to array

var labels = ["USA","Italy","Spain","China","Germany","Iran	","France","UK","Switzerland","Belgium","Netherlands","Turkey","S. Korea","Austria","Canada","Portugal","Norway","Brazil","Israel","Australia","Indonesia"]; // Add labels to array
// End Defining data

var myChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
      labels: labels,
      datasets: [{
          label: 'Jumlah Kasus Terkonfirmasi', // Name the series
          data: data, // Specify the data values array
          backgroundColor: [ // Specify custom colors
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#0000FF",
            "#ff0000"
          ]
      }]
  },
  options: {
    responsive: true, // Instruct chart js to respond nicely.
    maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
  }
});