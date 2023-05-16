BUBBLE = document.getElementById("bubble-plot-AUD");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            10076,
                10328,
                10783,
                10310,
                10454,
                10209,
                10467,
                10303,
                9823,
                9979,
                10575,
                10581,],
        mode: 'markers',
        marker: {
            color: ['red', 'blue', 'green', 'yellow', 'black', 'orange', 'purple', 'pink', 'brown', 'cyan', 'magenta', 'grey'],
            size: Array.from({ length: 12 }, () => getRandomSize(150)),
        },
    },
];

var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BUBBLE, data, layout, config);
