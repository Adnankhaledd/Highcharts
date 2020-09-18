$('#form').submit(function(e) {
    e.preventDefault();
    chart();
})


function chart() {

    var fromDate = $('#from').val();
    var toDate = $('#to').val();
    var dates = [];
    var dateValues = [
        {x:1293840000000, y:15},
        {x:1295049600000, y:5},
        {x:1295395200000, y:17},
        {x:1296172800000, y:18}

    ];
    var dateValues2 = [
        {x:1293840000000, y:15},
        {x:1294012800000, y:16},
        {x:1295395200000, y:4},
        {x:1296172800000, y:13},
        {x:1294617600000, y:18}
    ];

    for (i = Date.parse(fromDate); i < Date.parse(toDate); i = i + 86400000){
        dates.push(i)
    }

    function setData(dataValues){
        var data  = [],i,j,current,test
        for (i = Date.parse(fromDate); i < Date.parse(toDate); i = i + 86400000) {
             test = true;
            for (j = 0; j < dataValues.length; j++) {
                current = dataValues[j];
                if (current.x === i) {
                    data.push(current);
                    test = false
                } 
            } if (test)
                data.push({x:i, y:0})

        } 
        return data
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
                
            }
        },
        series: [{
            name: 'data set 1 ',
            color: '#0000ff',
            data:
                /**add random data from 0 to 9 */
                // dates.map((item) => [item, Math.floor(Math.random() * 10)])
                /**add specified data from data array and set the not specified dateValues to zero */
                setData(dateValues),
        },  {

            name: 'data set 2',
            color: '#FF0000',
            data: setData(dateValues2),

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