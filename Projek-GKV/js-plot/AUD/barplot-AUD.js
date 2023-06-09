BAR = document.getElementById("barplot-AUD");

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
