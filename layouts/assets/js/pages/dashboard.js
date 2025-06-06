var colors = ["#777edd", "#0acf97", "#fa5c7c", "#f9bc0b"],
    dataColors = $("#statistics-chart").data("colors"),
    options = {
        series: [{
            name: "Open Campaign",
            type: "bar",
            data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
        }, {
            name: "Marketing Cost",
            type: "bar",
            data: [30.28, 33.45, 50, 31.12, 26.59, 34.06, 39.79, 14.38, 33.44, 48.12, 27.91, 23.91]
        }],
        chart: {
            height: 301,
            type: "line",
            toolbar: {
                show: !1
            }
        },
        stroke: {
            width: 0,
            curve: "straight"
        },
        plotOptions: {
            bar: {
                columnWidth: "45%",
                barHeight: "70%",
                borderRadius: 5
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: colors = dataColors ? dataColors.split(",") : colors
    },
    chart = new ApexCharts(document.querySelector("#statistics-chart"), options),
    colors = (chart.render(), ["#777edd", "#0acf97", "#fa5c7c", "#f9bc0b"]),
    dataColors = $("#revenue-chart").data("colors"),
    options = {
        series: [{
            name: "Total Income",
            data: [82, 85, 70, 90, 75, 78, 65, 50, 72, 60, 80, 70]
        }, {
            name: "Total Expenses",
            data: [30, 32, 40, 35, 30, 36, 37, 28, 34, 42, 38, 30]
        }],
        stroke: {
            width: 2,
            curve: "straight"
        },
        chart: {
            height: 299,
            type: "area",
            zoom: {
                enabled: !1
            },
            toolbar: {
                show: !1
            }
        },
        dataLabels: {
            enabled: !1
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        colors: colors = dataColors ? dataColors.split(",") : colors,
        tooltip: {
            shared: !0,
            y: [{
                formatter: function(o) {
                    return void 0 !== o ? "$" + o.toFixed(2) + "k" : o
                }
            }, {
                formatter: function(o) {
                    return void 0 !== o ? "$" + o.toFixed(2) + "k" : o
                }
            }]
        }
    },
    colors = ((chart = new ApexCharts(document.querySelector("#revenue-chart"), options)).render(), ["#777edd", "#45bbe0", "#0acf97", "#fa5c7c", "#e3eaef"]),
    dataColors = $("#data-visits-chart").data("colors"),
    options = {
        chart: {
            height: 335,
            type: "donut"
        },
        series: [25, 40, 30, 15, 20],
        legend: {
            show: !0,
            position: "bottom",
            horizontalAlign: "center",
            verticalAlign: "middle",
            floating: !1,
            fontSize: "14px",
            offsetX: 0,
            offsetY: 7
        },
        labels: ["10-16 (Child)", "18-26 (Young)", "27-35 (Adult)", "36-50 (Middle Age)", "51+ (Senior)"],
        colors: colors = dataColors ? dataColors.split(",") : colors,
        responsive: [{
            breakpoint: 600,
            options: {
                chart: {
                    height: 240
                },
                legend: {
                    show: !1
                }
            }
        }]
    };
(chart = new ApexCharts(document.querySelector("#data-visits-chart"), options)).render();