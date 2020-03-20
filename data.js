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

    var data_labels         = ['3/1','3/2','3/3','3/4','3/5','3/6','3/7','3/8','3/9','3/10','3/11','3/12','3/13','3/14','3/15','3/16','3/17','3/18','3/19','3/20'];
    var data_akumulatif     = [0,2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369];
    var data_kasus_harian   = [0,2,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60];
    var data_meninggal      = [0,0,0,0,0,0,0,0,0,0,2,4,4,5,5,5,5,19,25,32];
    var data_sembuh         = [0,0,0,0,0,0,0,0,0,0,2,3,5,8,8,8,9,11,15,17];
    
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
    ['id-jk', 210], //DKI Jakarta
    ['id-bt', 27], //Banten
    ['id-jr', 26], //Jawa Barat
    ['id-ji', 9], //Jawa Timur
    ['id-yo', 5], //Yogyakarta
    ['id-ki', 3], //Kalimantan Timur
    ['id-ri', 3], //Riau
    ['id-st', 3], //Sulawesi Tengah
    ['id-kr', 2], //Kepulauan Riau
    ['id-se', 2], //Sulawesi Selatan
    ['id-sb', 2], //Sumatera Barat
    ['id-ba', 1], //Bali
    ['id-kb', 1], //Kalimantan Barat
    ['id-1024', 1], //Lampung
    ['id-sw', 1], //Sulawesi Utara
    ['id-ac', 0], //Aceh
    ['id-jt', 9], //Jawa Tengah
    ['id-be', 0], //Bengkulu
    ['id-bb', 0], //Kepulauan Bangka Belitung
    ['id-ks', 0], //Kalimantan Selatan
    ['id-nt', 0], //Nusa Tenggara Timur
    ['id-ib', 0], //Irian Jaya Barat
    ['id-su', 0], //Sumatera Utara
    ['id-ku', 0], //Kalimantan Utara
    ['id-la', 0], //Maluku Utara
    ['id-ma', 0], //Maluku
    ['id-nb', 0], //NTB
    ['id-sg', 0], //Kendari
    ['id-pa', 0], //Papua
    ['id-go', 0], //Gorontalo
    ['id-sl', 0], //Sumatera Selatan
    ['id-sr', 0], //Sulawesi Barat
    ['id-ja', 0], //Jambi
    ['id-kt', 0] //Kalimantan Tengah
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
      dataClasses: [{
          name: 'No Case',
          to: 1,
          color: "#FFFFFF"
      }, {
          name: '1 - 50',
          from: 1,
          to: 50,
          color: "#FCDA6C"
      }, {
          name: '50 - 100',
          from: 50,
          to: 100,
          color: "#EEA33F"
      }, {
          name: '100 - 250',  
          from: 100,
          to: 250,
          color: "#E9663F"
      }, {
          name: '250 - 500',
          from: 250,
          to: 500,
          color: "#FF0000"
      }]
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
  url: "daftar_kasus_provinsi.csv",
  success: function (data) {
      $('#tabel_kasus_provinsi').append(arrayToTable(Papa.parse(data).data));
  }
});