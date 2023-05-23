BUBBLE = document.getElementById("bubble-plot-CHF");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            15446,
                15620,
                15502,
                14931,
                15201,
                15546,
                15593,
                15330,
                15487,
                15626,
                16607,
                16968,],
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
