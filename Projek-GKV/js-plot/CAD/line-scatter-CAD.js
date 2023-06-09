LINESCATTER = document.getElementById("line-scatter-CAD");

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
        mode: 'lines',
        type: 'scatter',
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
Plotly.newPlot(LINESCATTER, data, layout, config);