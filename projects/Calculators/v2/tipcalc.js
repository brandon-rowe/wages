function twenty() 
	{
   		var tb = document.getElementById('total_bill').value;
    	var tp = 20;
 		var percentage = tp / 100;
 		var total = tb * 1.00;
 		var tip = percentage * tb;

    	var html = 	
    	'</br>If your total bill was $' + total.toFixed(2) +
		'</br> Then your tip of ' + tp + ' percent is $' + tip.toFixed(2)+'</br>';
	
    	document.getElementById('tip').innerHTML = html;
	}

function fifteen() 
	{
   		var tb = document.getElementById('total_bill').value;
    	var tp = 15;
 		var percentage = tp / 100;
 		var total = tb * 1.00;
 		var tip = percentage * tb;

    	var html = 	
    	'</br>If your total bill was $' + total.toFixed(2) +
		'</br> Then your tip of ' + tp + ' percent is $' + tip.toFixed(2)+'</br>';
	
    	document.getElementById('tip').innerHTML = html;
	}
	/*document.getElementById('som').addEventListener('click', tipCalc);*/

function ten() 
	{
   		var tb = document.getElementById('total_bill').value;
    	var tp = 10;
 		var percentage = tp / 100;
 		var total = tb * 1.00;
 		var tip = percentage * tb;

    	var html = 	
    	'</br>If your total bill was $' + total.toFixed(2) +
		'</br> Then your tip of ' + tp + ' percent is $' + tip.toFixed(2)+'</br>';
	
    	document.getElementById('tip').innerHTML = html;
	}

function tipCalc() 
	{
   		var tb = document.getElementById('total_bill').value;
    	var tp = document.getElementById('tip_percentage').value;
 		var percentage = tp / 100;
 		var total = tb * 1.00;
 		var tip = percentage * tb;

    	var html = 	
    	'</br>If your total bill was $' + total.toFixed(2) +
		'</br> Then your tip of ' + tp + ' percent is $' + tip.toFixed(2)+'</br>';
	
    	document.getElementById('tip').innerHTML = html;
	}