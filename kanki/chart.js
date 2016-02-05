
var temp = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0];
var i=0;
var x_counter=0;
var temperature=0;
var j;
var count;
timerID = setInterval('notifyMe();' /*定期的に呼び出す関数名*/ , 1000 /*呼び出す間隔*/ );

function notifyMe() {
  //temp[i]=get();
  $.getJSON("http://192.168.1.172/redesign/humidity/env_data", function(data) {
     temperature = data.temperature;
     console.log(temperature);
     temp[i]=temperature;
   });
console.log(temp[i]);
var data = []

for(count=0,j=x_counter;count<i;count++,j++){
  data.push({x: j, y: temp[count]});
}

x_counter+=1;
i+=1;
if(i==10){
for(k=0;k<9;k++){
  temp[k]=temp[k+1];
  i=9;
}


}
var data = [{
  key: 'y = tem',
  values: data
}];

nv.addGraph(function() {

  var chart = nv.models.lineChart()
    .showLegend(false)
    .showYAxis(true)
    .showXAxis(true);

  chart.xAxis
    .axisLabel('time')
    .tickFormat(d3.format('.2f'));

  chart.yAxis
    .axisLabel('temperature')
    .tickFormat(d3.format('.2f'));

  d3.select('svg')
    .datum(data)
    .call(chart);

  nv.utils.windowResize(function() {
    chart.update()
  });

  return chart;
//timerID=setInterval('notifyMe();' /*定期的に呼び出す関数名*/ , 10000 /*呼び出す間隔*/ );
});
//timerID=setInterval('notifyMe();' /*定期的に呼び出す関数名*/ , 10000 /*呼び出す間隔*/ );
}
