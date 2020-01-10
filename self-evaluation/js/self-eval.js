$(document).ready(function(){
	//pdf 	
	$("#pdfDownloadBtn").click(function(){
		var urlParam = "?";
		urlParam = urlParam + "name="+ document.getElementById("paperName").value;
		
		
		for(x = 1; x < 18; x++) { 
		var ele = document.getElementsByName(x.toString()); 
              
			for(i = 0; i < ele.length; i++) { 
				if(ele[i].checked) 
					urlParam = urlParam + "&q" + x + "=" + ele[i].value;
			} 
		}

     window.open("pdfQuizTemp.html"+urlParam, '_blank');
	});

	
})