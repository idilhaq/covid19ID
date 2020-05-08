//Chart
$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }

    var data_labels = ['3/1','3/2','3/3','3/4','3/5','3/6','3/7','3/8','3/9','3/10','3/11','3/12','3/13','3/14','3/15','3/16','3/17','3/18','3/19','3/20','3/21','3/22','3/23','3/24','3/25','3/26','3/27','3/28','3/29','3/30','3/31','4/1','4/2','4/3','4/4','4/5','4/6','4/7','4/8','4/9','4/10','4/11','4/12','4/13','4/14','4/15','4/16','4/17','4/18','4/19','4/20','4/21','4/22','4/23','4/24','4/25','4/26','4/27','4/28','4/29','4/30','5/1','5/2','5/3','5/4','5/5','5/6','5/7'];
    var data_akumulatif = [0,2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369,450,514,579,685,790,893,1046,1155,1285,1414,1528,1677,1790,1986,2092,2273,2491,2738,2956,3293,3512,3842,4241,4557,4839,5136,5516,5923,6248,6575,6760,7135,7418,7775,8211,8607,8882,9096,9511,9771,10118,10551,10843,11192,11587,12071,12438,12776];
    var data_kasus_harian = [0,2,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60,81,64,65,106,105,103,153,109,130,129,114,149,113,196,106,181,218,247,218,337,219,330,399,316,282,297,380,407,325,327,185,375,283,357,436,396,275,214,415,260,347,433,292,349,395,484,367,338];
    var data_meninggal = [0,0,0,0,0,0,0,0,0,0,2,4,4,5,5,5,5,19,25,32,38,48,49,55,58,78,87,102,114,122,136,157,170,181,191,198,209,221,240,280,306,327,373,399,459,469,496,520,535,582,590,616,636,647,689,720,743,765,773,784,792,800,831,845,864,872,895,930];
    var data_sembuh = [0,0,0,0,0,0,0,0,0,0,2,3,5,8,8,8,9,11,15,16,20,29,30,30,31,35,46,59,64,75,81,103,112,134,150,164,192,204,222,252,282,286,359,380,426,446,548,607,631,686,747,842,913,960,1002,1042,1107,1151,1254,1391,1522,1591,1665,1876,1954,2197,2317,2381];
    var data_aktif = [0,2,2,2,2,4,4,6,19,27,30,27,60,83,104,121,158,197,269,321,392,437,500,600,701,780,913,994,1107,1217,1311,1417,1508,1671,1751,1911,2090,2313,2494,2761,2924,3229,3509,3778,3954,4221,4472,4796,5082,5307,5423,5677,5869,6168,6520,6845,7032,7180,7484,7596,7804,8160,8347,8471,8769,9002,9226,9465];

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
          {//meninggal
            type                : 'bar',
            data                : data_meninggal,
            backgroundColor     : '#ff0000'
          },
          { //sembuh
            type                : 'bar',
            data                : data_sembuh,
            backgroundColor     : '#02c248'
          },
          { //kasus harian
            type                : 'bar',
            data                : data_aktif,
            backgroundColor     : '#007bff'
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
            stacked: true,
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
            stacked: true,
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
  ['id-jk',4855],['id-jr',1381],['id-ji',1267],['id-jt',904],['id-se',684],['id-bt',495],['id-nb',300],['id-ba',287],['id-sb',252],['id-pa',252],['id-ki',238],['id-sl',227],['id-kt',188],['id-ks',182],['id-su',142],['id-yo',137],['id-ku',131],['id-kr',98],['id-kb',95],['id-st',75],['id-sg',69],['id-ri',66],['id-1024',63],['id-sr',58],['id-ib',53],['id-la',50],['id-ja',47],['id-sw',45],['id-bb',28],['id-ma',23],['id-go',19],['id-ac',17],['id-be',14],['id-nt',12],['id-3700',22]
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
        {name:'< 50',from:1,to:50,color:'#ffff00'},
        {name:'< 100',from:50,to:100,color:'#ffb200'},
        {name:'< 500',from:100,to:500,color:'#ff6600'},
        {name:'< 1000',from:500,to:1000,color:'#ff0000'},
        {name:'< 2000',from:1000,to:2000,color:'#d90800'},
        {name:'< 5000',from:2000,to:5000,color:'#8c1700'},
        {name:'< 10000',from:5000,to:10000,color:'#661f00'}
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
$.getJSON('https://corona.lmao.ninja/v2/all', function(dataz) {
    var world_cases_all = numberWithCommas(dataz.cases);
    $("#world_cases_all").html(world_cases_all);

    var world_cases_death = numberWithCommas(dataz.deaths);
    $("#world_cases_death").html(world_cases_death);

    var world_cases_recovered = numberWithCommas(dataz.recovered);
    $("#world_cases_recovered").html(world_cases_recovered);

    var world_cases_active = numberWithCommas(dataz.active);
    $("#world_cases_active").html(world_cases_active);
});
