$('#form').submit(function(e) {
    e.preventDefault();
    chart();
})


function chart() {

    var fromDate = $('#from').val();
    var toDate = $('#to').val();
    var dateValues = [
        [1293840000000, 15],
        [1295049600000, 5],
        [1295395200000, 17],
        [1296172800000, 18]

    ];
    var data = []
    

    for (var i = Date.parse(fromDate); i < Date.parse(toDate); i = i + 86400000) {
        var test = true;
        for (j = 0; j < dateValues.length; j++) {
            var current = dateValues[j];
            if (current[0] === i) {
                data.push(current);
            } else {
                if (test)
                    data.push([i, 0])
            }
            test = false;
        }

    }




   
    Highcharts.chart('container', {

        title: {
            text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
            text: 'Source: thesolarfoundation.com'
        },

        yAxis: {

        },

        xAxis: {
            type: 'datetime',
            min: Date.parse(fromDate),
            max: Date.parse(toDate),
            tickInterval: 86400000, // dailly

        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                // pointStart: Date.parse(fromDate)
            }
        },
        series: [{
            name: 'Installation',
            data:
                /**add random data from 0 to 9 */
                // arr.map((item) => [item, Math.floor(Math.random() * 10)])
                /**add specified data from data array and set the not specified dateValues to zero */
                data,

        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }


    });

}

chart();