window.onload = function () {
 
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        exportEnabled: true,
        title:{
            text: "Average Expense Per Day  in Thai Baht"
        },
        subtitles: [{
            text: "Currency Used: Thai Baht (฿)"
        }],
        data: [{
            type: "pie",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - #percent%",
            yValueFormatString: "฿#,##0",
            dataPoints: <?php echo json_encode($dataPoints, JSON_NUMERIC_CHECK); ?>
        }]
    });
    chart.render();
     
    }