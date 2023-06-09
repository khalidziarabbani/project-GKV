BAR = document.getElementById("barplot-CHF");

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
        type: 'bar',
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
Plotly.newPlot(BAR, data, layout, config);
