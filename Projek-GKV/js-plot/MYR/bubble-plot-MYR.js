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
            color: Array.from({ length: 12 }, () => '#1f77b4'),
            size : Array.from({ length: 12 }, () => 20),
        },
    },
];

var layout = { 
    font: { size: 18 },
    xaxis: { title: "Months" },
    yaxis: { title: "Values in Rupiah" },
    font:{
        family: 'Raleway, sans-serif'
    },
};
var config = { responsive: true };
Plotly.newPlot(BUBBLE, data, layout, config);
