BUBBLE = document.getElementById("bubble-plot-USD");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            14381.00, 
            14371.00, 
            14349.00, 
            14418.00, 
            14544.00, 
            14848.00, 
            14958.00, 
            14875.00, 
            15247.00, 
            15542.00, 
            15737.00, 
            15731.00],
        mode: 'markers',
        marker: {
            color: Array.from({ length: 12 }, () => '#1f77b4'),
            size : Array.from({ length: 12 }, () => 20),
        },
    },
];

var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BUBBLE, data, layout, config);
