BAR = document.getElementById("barplot-CAD");

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
            y: [11263,
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
                11566,             
                ],
        type: 'bar',
    },
];
var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BAR, data, layout, config);
