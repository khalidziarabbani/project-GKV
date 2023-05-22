var data = [{
    type: 'scattergeo',
    mode: 'markers',
    locations: 
    [
        "USA", 
        "GBR", 
        "CHE", 
        // "SGP", 
        "MMR", 
        // "HKG", 
        "AUS", 
        "CAN"
    ],
    marker: {
        size: 20,
        color: [
            14.91, 
            18.64, 
            16.96, 
            // 11.65, 
            3.556, 
            // 2.01, 
            10.58, 
            11.49],
        cmin: 0,
        cmax: 20,
        colorscale: 'Blues',
        colorbar: {
            title: 'Besar Nilai Rata-rata Mata Uang',
            ticksuffix: '%',
            showticksuffix: true,
        },
        line: {
            color: 'black',
            width: 1
        }
    },
    name: 'Rata-rata Nilai Tukar Mata Uang Dunia pada Tahun 2022'
}];

var layout = {
    'geo': {
        'scope': 'world',
        'resolution': 100
    },
    height: 700,
    //blue paper bg color
    paper_bgcolor: '#204094',
    font: {
        color: 'white'
    },

};

var config = { responsive: true };

Plotly.newPlot('maps-plot', data, layout, config);