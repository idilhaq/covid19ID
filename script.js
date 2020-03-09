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
    ['id-ba', 0],
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
    ['id-jk', 19],
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
        text: 'Peta Persebaran Korban Terinfeksi Covid-19'
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
