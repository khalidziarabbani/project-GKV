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
            14916.75, 
            13333.5, 
            9939.917, 
            // 11.65, 
            2872.417, 
            // 2.01, 
            9550.75, 
            11427.67],
        cmin: 0,
        cmax: 101,
        colorscale: 'Blues',
        colorbar: {
            title: 'Besar Nilai Rata-rata Mata Uang',
            ticksuffix: '%',
            showticksuffix: true,
        },
        line: {
            color: 'black',
            width: 1
        },
    },
    name: 'Rata-rata Nilai Tukar Mata Uang Dunia pada Tahun 2022',
    //


}];

var layout = {
    'geo': {
        'scope': 'world',
        'resolution': 100,
        'showland': true,
        'landcolor': '#C8F7C5',
        'showocean': true,
        'oceancolor': '#A9E2F3',
        'showcountries': true,
    },
    height: 700,
    //blue paper bg color
    paper_bgcolor: '#204094',
    font: {
        color: 'white'
    },
    dragmode: false,
};

var config = { responsive: true };

Plotly.newPlot('maps-plot', data, layout, config);