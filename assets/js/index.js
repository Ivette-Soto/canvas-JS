window.onload = function(){
    let options = {
        title: {
            text:"Column Graphics with jQuery and CanvasJS"
        },
        axisX: {
            title: "Tropical Fruits",
            titleFontSize: 12
        },
        axisY: {
            title: "Kg Intake/individual/year",
            titleFontSize: 12
        },
        data: [
            {
                type: "column",
                dataPoints: [
                    {label: "papaya", y:23},
                    {label: "orange", y:15},
                    {label: "banana", y:25},
                    {label: "mango", y:25},
                    {label: "guayaba", y:25}
                ]
            }
        ]
    }

    var chart = new
    CanvasJS.Chart("chartContainer", options);

    chart.render();
}
// Change whatever the hell you're trying to do here into canvas syntax, 
//     $("#chartContainer").CanvasJSChart(options);
// })