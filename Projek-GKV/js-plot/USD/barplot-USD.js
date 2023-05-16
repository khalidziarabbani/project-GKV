BAR = document.getElementById("barplot-USD");

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
            y: [14381.00,
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
                15731.00,
                ],
        type: 'bar',
    },
];
var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BAR, data, layout, config);
