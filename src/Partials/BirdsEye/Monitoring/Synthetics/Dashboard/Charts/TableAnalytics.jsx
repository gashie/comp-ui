export var TableAnalytics = {
    series: [{
        name: '',
        data: [13, 23, 20, 8, 13, 27, 33, 12, 67, 22, 43, 21]
    }, {
        name: '',
        data: [44, 55, 41, 67, 22, 43, 21, 49, 13, 23, 20, 8]
    }],
    chart: {
        type: 'bar',
        height: 120,
        stacked: true,
        toolbar: {
            show: false
        }
    },
    colors: ['var(--theme-color1)', 'var(--accent-color)'],
    responsive: [{
        breakpoint: 480
    }],
    xaxis: {
        show: false, // hide the x-axis
        labels: {
            show: false // hide the labels for x-axis
        },
        axisTicks: {
            show: false // hide the ticks for x-axis
        },
        tooltip: {
            enabled: false // disable tooltip for x-axis
        },
        grid: {
            show: false, // hide the grid lines for x-axis
            strokeWidth: 0 // hide the lines behind the graph
        }
    },
    yaxis: {
        show: false, // hide the y-axis
        labels: {
            show: false // hide the labels for y-axis
        },
        axisTicks: {
            show: false // hide the ticks for y-axis
        },
        tooltip: {
            enabled: false // disable tooltip for y-axis
        },
        grid: {
            show: false, // hide the grid lines for y-axis
            strokeWidth: 0 // hide the lines behind the graph
        }
    },
    fill: {
        opacity: 1
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        position: 'bottom',
        show: false
    },
    tooltip: {
        y: [{
            title: {
                formatter: function(val) {
                    return val + " (K)"
                }
            }
        }, {
            title: {
                formatter: function(val) {
                    return val + " (K)"
                }
            }
        }]
    }
};
