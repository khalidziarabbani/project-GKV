BUBBLE = document.getElementById("bubble-plot-CAD");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            11263,
                11219,
                11497,
                11225,
                11458,
                11531,
                11679,
                11451,
                11091,
                11425,
                11727,
                11566,],
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
