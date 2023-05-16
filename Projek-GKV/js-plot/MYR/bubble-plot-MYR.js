BUBBLE = document.getElementById("bubble-plot-MYR");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            3427,
                3419,
                3412,
                3306,
                3327,
                3374,
                3361,
                3319,
                3280,
                3291,
                3490,
                3556,],
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
