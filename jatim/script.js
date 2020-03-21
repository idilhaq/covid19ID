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