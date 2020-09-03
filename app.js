$('#form').submit(function(e){
    e.preventDefault();
    chart();
})


function chart(){

    var fromDate = $('#from').val();
    var toDate = $('#to').val();
    var values = [[]];
    var arr =[];

    for(var i = Date.parse(fromDate);i<Date.parse(toDate);i=i+518400000){
        arr.push(i);
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
            tickInterval: 2592000000,

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

            // js_array1.map((item, i) => [Date.parse(fromDate) + (518400000 * (i + 1)), item])
            arr.map((item) => [item, Math.floor(Math.random() * 10)])

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
