LINESCATTER = document.getElementById("line-scatter-AUD");

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
            y: [10076,
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
                10581,
                ],
        mode: 'lines',
        type: 'scatter',
    },
];

var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(LINESCATTER, data, layout, config);