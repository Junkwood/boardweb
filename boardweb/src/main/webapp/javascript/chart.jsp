<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">

      let dataAry=[['Sido', 'Count per Sido']];
	  fetch('../getSidoInfo.do').then(resolve=>resolve.json())
	  .then(result=>{
		  //for(let i=1;i<result.length;i++){
		  //  dataAry.push([result[i].sido, result[i].cnt])
		  //}
		  //-----------------
		  //let ary=[]
		  //for(let prop in item){
		  // ary.push(item[prop]);
		  //}
		  //dataAry.push(ary);
		  result.forEach(item=>{
			  dataAry.push([item.sido, item.cnt])
		  })
		  google.charts.load('current', {'packages':['corechart']});
	      google.charts.setOnLoadCallback(drawChart);
	  })
	  .catch(err=>console.log(err));
      function drawChart() {

        var data = google.visualization.arrayToDataTable(dataAry);

        var options = {
          title: '코로나19 예방접종센터 지역별 현황'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
    </script>
  </head>
  <body>
    <div id="piechart" style="width: 900px; height: 500px;"></div>
  </body>
</html>
