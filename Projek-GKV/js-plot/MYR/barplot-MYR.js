BAR = document.getElementById("barplot-MYR");

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
            y: [3427,
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
                3556,
                ],
        type: 'bar',
    },
];
var layout = { font: { size: 18 } };
var config = { responsive: true };
Plotly.newPlot(BAR, data, layout, config);
