//Chart
$(function () {
    'use strict'
  
    var ticksStyle = {
      fontColor: '#495057',
      fontStyle: 'bold'
    }

    var data_labels = ['3/1','3/2','3/3','3/4','3/5','3/6','3/7','3/8','3/9','3/10','3/11','3/12','3/13','3/14','3/15','3/16','3/17','3/18','3/19','3/20','3/21','3/22','3/23','3/24','3/25','3/26','3/27','3/28','3/29','3/30','3/31','4/1','4/2','4/3','4/4','4/5','4/6','4/7','4/8','4/9','4/10','4/11','4/12','4/13','4/14','4/15','4/16','4/17','4/18','4/19','4/20','4/21','4/22','4/23','4/24','4/25','4/26','4/27','4/28','4/29','4/30','5/1','5/2','5/3','5/4','5/5','5/6','5/7','5/8','5/9','5/10','5/11','5/12','5/13','5/14','5/15','5/16','5/17','5/18','5/19','5/20','5/21','5/22','5/23','5/24','5/25','5/26','5/27','5/28','5/29','5/30','5/31','6/1','6/2','6/3','6/4','6/5','6/6','6/7','6/8','6/9','6/10','6/11','6/12','6/13','6/14','6/15','6/16','6/17','6/18','6/19','6/20','6/21','6/22','6/23','6/24','6/25','6/26','6/27','6/28','6/29','6/30','7/1','7/2','7/3','7/4','7/5','7/6','7/7','7/8','7/9','7/10','7/11','7/12','7/13','7/14','7/15','7/16','7/17','7/18','7/19','7/20','7/21','7/22','7/23','7/24','7/25','7/26','7/27','7/28','7/29','7/30','7/31','8/1','8/2','8/3','8/4','8/5','8/6','8/7','8/8','8/9','8/10','8/11','8/12','8/13','8/14','8/15','8/16','8/17','8/18','8/19','8/20','8/21','8/22','8/23','8/24','8/25','8/26','8/27','8/28','8/29','8/30','8/31','9/1','9/2','9/3','9/4','9/5','9/6','9/7','9/8','9/9','9/10','9/11','9/12','9/13','9/14','9/15','9/16','9/17','9/18','9/19','9/20','9/21','9/22','9/23','9/24','9/25','9/26','9/27','9/28','9/29','9/30','10/1','10/2','10/3','10/4','10/5','10/6','10/7','10/8','10/9','10/10','10/11','10/12'];
    var data_akumulatif = [0,2,2,2,2,4,4,6,19,27,34,34,69,96,117,134,172,227,309,369,450,514,579,685,790,893,1046,1155,1285,1414,1528,1677,1790,1986,2092,2273,2491,2738,2956,3293,3512,3842,4241,4557,4839,5136,5516,5923,6248,6575,6760,7135,7418,7775,8211,8607,8882,9096,9511,9771,10118,10551,10843,11192,11587,12071,12438,12776,13112,13645,14032,14265,14749,15438,16006,16496,17025,17514,18010,18496,19189,20162,20796,21745,22271,22750,23165,23851,24538,25216,25773,26473,26940,27549,28233,28818,29521,30514,31186,32033,33076,34316,35295,36406,37420,38277,39294,40400,41431,42762,43803,45029,45891,46845,47896,49009,50187,51427,52812,54010,55092,56385,57770,59394,60695,62142,63749,64958,66226,68079,70736,72347,74018,75699,76981,78572,80094,81668,83130,84882,86521,88214,89869,91751,93657,95418,97286,98778,100303,102051,104432,106336,108376,109936,111455,113134,115056,116871,118753,121226,123503,125396,127083,128776,130718,132816,135123,137468,139549,141370,143043,144945,147211,149408,151498,153535,155412,157859,160165,162884,165887,169195,172053,174796,177571,180646,184268,187537,190665,194109,196989,200035,203342,207203,210940,214746,218382,221523,225030,228993,232628,236519,240687,244676,248852,252923,257388,262022,266845,271339,275213,278722,282724,287008,291182,295499,299506,303498,307120,311176,315714,320564,324658,328952,333449,336716];
    var data_kasus_harian = [0,2,0,0,0,2,0,2,13,8,7,0,35,27,21,17,38,55,82,60,81,64,65,106,105,103,153,109,130,129,114,149,113,196,106,181,218,247,218,337,219,330,399,316,282,297,380,407,325,327,185,375,283,357,436,396,275,214,415,260,347,433,292,349,395,484,367,338,336,533,387,233,484,689,568,490,529,489,496,486,693,973,634,949,526,479,415,686,687,678,557,700,467,609,684,585,703,993,672,847,1043,1240,979,1111,1014,857,1017,1106,1031,1331,1041,1226,862,954,1051,1113,1178,1240,1385,1198,1082,1293,1385,1624,1301,1447,1607,1209,1268,1853,2657,1611,1671,1681,1282,1591,1522,1574,1462,1752,1639,1693,1655,1882,1906,1761,1868,1492,1525,1748,2381,1904,2040,1560,1519,1679,1922,1815,1882,2473,2277,1893,1687,1693,1942,2098,2307,2345,2081,1821,1673,1902,2266,2197,2090,2037,1877,2447,2306,2719,3003,3308,2858,2743,2775,3075,3622,3269,3128,3444,2880,3046,3307,3861,3737,3806,3636,3141,3507,3963,3635,3891,4168,3989,4176,4071,4465,4634,4823,4494,3874,3509,4002,4284,4174,4317,4007,3992,3622,4056,4538,4850,4094,4294,4497,3267];
    var data_meninggal = [0,0,0,0,0,0,0,0,0,0,2,4,4,5,5,5,5,19,25,32,38,48,49,55,58,78,87,102,114,122,136,157,170,181,191,198,209,221,240,280,306,327,373,399,459,469,496,520,535,582,590,616,636,647,689,720,743,765,773,784,792,800,831,845,864,872,895,930,943,959,973,991,1007,1028,1043,1076,1089,1148,1191,1221,1242,1278,1326,1351,1372,1391,1418,1473,1496,1520,1573,1613,1641,1663,1698,1721,1770,1801,1851,1883,1923,1959,2000,2048,2091,2134,2198,2231,2276,2339,2373,2429,2465,2500,2535,2573,2620,2683,2720,2754,2805,2876,2934,2987,3036,3089,3171,3241,3309,3359,3417,3469,3535,3606,3656,3710,3797,3873,3957,4016,4143,4239,4320,4459,4576,4665,4714,4781,4838,4901,4975,5058,5131,5193,5236,5302,5388,5452,5521,5593,5658,5723,5765,5824,5903,5968,6021,6071,6150,6207,6277,6346,6418,6500,6594,6680,6759,6858,6944,7064,7169,7261,7343,7417,7505,7616,7750,7832,7940,8025,8130,8230,8336,8456,8544,8650,8723,8841,8965,9100,9222,9336,9448,9553,9677,9837,9977,10105,10218,10308,10386,10473,10601,10740,10856,10972,11055,11151,11253,11374,11472,11580,11677,11765,11844,11935];
    var data_sembuh = [0,0,0,0,0,0,0,0,0,0,2,3,5,8,8,8,9,11,15,16,20,29,30,30,31,35,46,59,64,75,81,103,112,134,150,164,192,204,222,252,282,286,359,380,426,446,548,607,631,686,747,842,913,960,1002,1042,1107,1151,1254,1391,1522,1591,1665,1876,1954,2197,2317,2381,2494,2607,2698,2881,3063,3287,3518,3803,3911,4129,4324,4467,4575,4838,5057,5249,5402,5642,5877,6057,6240,6492,7015,7308,7637,7935,8406,8892,9443,9907,10498,10904,11414,12129,12636,13213,13776,14531,15123,15703,16243,16798,17349,17883,18404,18735,19241,19658,20449,21333,21909,22936,23800,24806,25595,26667,27568,28219,29105,29919,30785,31585,32651,33529,34719,35638,36689,37636,39050,40345,41834,43268,45401,46977,48466,50261,52170,53951,55360,56661,58179,60539,62138,64292,65907,67919,68975,70237,72050,73889,75645,77557,79306,80952,82236,83710,85798,87558,89618,91321,93103,94458,96306,98657,100674,102991,105198,107500,111060,112867,115409,118575,120900,122802,124185,125959,128057,129971,132055,134181,136401,138575,140652,142958,145200,147510,150217,152458,155010,158405,161065,164101,166686,170774,174350,177327,180797,184298,187958,191853,196196,199403,203014,206870,210437,214947,218487,221340,225052,228453,232593,236437,240291,244060,247667,251481,255027,258519];
    var data_aktif = [0,2,2,2,2,4,4,6,19,27,30,27,60,83,104,121,158,197,269,321,392,437,500,600,701,780,913,994,1107,1217,1311,1417,1508,1671,1751,1911,2090,2313,2494,2761,2924,3229,3509,3778,3954,4221,4472,4796,5082,5307,5423,5677,5869,6168,6520,6845,7032,7180,7484,7596,7804,8160,8347,8471,8769,9002,9226,9465,9675,10079,10361,10393,10679,11123,11445,11617,12025,12237,12495,12808,13372,14046,14413,15145,15497,15717,15870,16321,16802,17204,17185,17552,17662,17951,18129,18205,18308,18806,18837,19246,19739,20228,20659,21145,21553,21612,21973,22466,22912,23625,24081,24717,25022,25610,26120,26778,27118,27411,28183,28320,28487,28703,29241,29740,30091,30834,31473,31798,32132,33135,34668,35349,35764,36455,36636,37226,37247,37450,37339,37598,36977,36998,37083,37031,36911,36802,37212,37336,37286,36611,37319,36986,37338,36824,37244,37595,37618,37530,37587,38076,38539,38721,39082,39242,39017,39290,39484,40076,40296,40705,40460,39942,40119,39917,39706,39355,37593,38134,37812,37245,37818,39132,40525,41420,42009,43059,44463,45524,46324,47509,48207,48847,49806,51237,52179,53638,54649,54277,55000,55792,56720,56409,56889,57796,58378,58788,59453,60064,60431,61628,61813,61379,61686,61321,61839,63187,63399,63894,63274,63365,63951,64924,65314,65706,66578,66262];
    
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
  ['id-jk',88174],['id-ji',47280],['id-jr',27522],['id-jt',26640],['id-se',16819],['id-su',11419],['id-ks',11052],['id-ki',10729],['id-ba',10228],['id-ri',10180],['id-sb',8880],['id-pa',7622],['id-bt',7067],['id-sl',6821],['id-ac',5844],['id-sw',4803],['id-kt',3967],['id-sg',3627],['id-nb',3554],['id-ma',3448],['id-yo',3107],['id-ib',3036],['id-go',2949],['id-kr',2619],['id-la',2105],['id-kb',1297],['id-1024',1147],['id-sr',894],['id-ja',825],['id-be',804],['id-ku',649],['id-st',569],['id-nt',565],['id-bb',474],['id-3700',0]
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
        {name:'<1000',from:100,to:1000,color:'#ffff00'},
        {name:'<5000',from:1000,to:5000,color:'#ffb200'},
        {name:'<8000',from:5000,to:8000,color:'#ff6600'},
        {name:'<10000',from:8000,to:10000,color:'#ff0000'},
        {name:'<15000',from:10000,to:15000,color:'#d90800'},
        {name:'<20000',from:15000,to:20000,color:'#8c1700'},
        {name:'<50000',from:20000,to:50000,color:'#661f00'},
        {name:'<100000',from:50000,to:100000,color:'#402600'},
        {name:'<500000',from:100000,to:500000,color:'#003300'}
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
  dataType: "text",
  url: "province_data.csv",
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
