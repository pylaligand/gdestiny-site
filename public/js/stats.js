$.getScript("https://www.gstatic.com/charts/loader.js", function(){
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(renderGrimoire);
  google.charts.setOnLoadCallback(renderMoT);
});

function renderGrimoire() {
  $.getJSON('data/grimoire.json', function(json) {
    var rows = [
      ["Gamertag", "Grimoire", { role: "style" }]
    ];
    $.each(json['data'], function(index, value) {
      var color = value["platform"] == "xb" ? "#64DD17" : "#29B6F6";
      rows.push([value['name'], value['grimoire'], color]);
    });

    var dataTable = google.visualization.arrayToDataTable(rows);
    var view = new google.visualization.DataView(dataTable);

   // set inner height to 30 pixels per row
   var chartAreaHeight = dataTable.getNumberOfRows() * 40;
   // add padding to outer height to accomodate title, axis labels, etc
   var chartHeight = chartAreaHeight + 80;

   var options = {
     chartArea: {
       height: chartAreaHeight
     },
     height: chartHeight,
     hAxis: {format: 'decimal'},
     legend: { position: "none" }
   };

   var chart = new google.visualization.BarChart(
     document.getElementById('grimoire-chart'));
   chart.draw(view, options);
  });
}

// TODO(john-mikhail): Implement
function renderMoT() {
  $.getJSON('data/mot.json', function(json) {
  });
}
