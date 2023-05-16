LINESCATTER = document.getElementById("line-scatter-CHF");

var data = [
    {
        x: ["Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
            ],
            y: [15446,
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
                16968,
                ],
        mode: 'lines',
        type: 'scatter',
    },
];

var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(LINESCATTER, data, layout, config);