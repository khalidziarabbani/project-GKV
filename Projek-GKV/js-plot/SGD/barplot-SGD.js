BAR = document.getElementById("barplot-SGD");

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
            y: [10600,
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
                11659,
                ],
        type: 'bar',
    },
];
var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BAR, data, layout, config);
