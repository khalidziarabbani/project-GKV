BUBBLE = document.getElementById("bubble-plot-SGD");

function getRandomSize(maxSize) {
    return Math.floor(Math.random() * maxSize) + 1;
}

var data = [
    {
        x: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
        y: [
            10600,
                10631,
                10604,
                10448,
                10637,
                10685,
                10829,
                10655,
                10562,
                11005,
                11458,
                11659,],
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
