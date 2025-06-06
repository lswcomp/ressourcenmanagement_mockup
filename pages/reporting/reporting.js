nutzerPlot = document.getElementById('nutzerPiePlot');
Plotly.newPlot(
    nutzerPlot, [{
        values: [4, 5, 6, 4],
        labels: ["Moritz Groß", "Angelika Repp", "Simon Grewe", "Lukas Wala"],
        type: "pie",
        textinfo: "value"
    }],
    {
        margin: { t: 0 }
    }
);

standortPlot = document.getElementById('standortPiePlot');
Plotly.newPlot(
    standortPlot, [{
        values: [5, 4, 6, 4],
        labels: ["Hamburg", "Berlin", "Frankfurt", "München"],
        type: "pie",
        textinfo: "value"
    }],
    {
        margin: { t: 0 }
    }
);

tagesPlot = document.getElementById('tagesPiePlot');
Plotly.newPlot(
    tagesPlot, [{
        x: ["02.06.2025", "03.06.2025", "04.06.2025", "05.06.2025", "06.06.2025", "07.06.2025", "08.06.2025", "09.06.2025", "10.06.2025", "11.06.2025", "12.06.2025",],
        y: [4, 1, 2, 3, 1, 2, 3, 1, 0, 0, 2],
        type: "bar"
    }],
    {
        margin: { t: 0 }
    }
);
