$(document).ready(function(){

	let resultArray = new Array();
	let compResult = $(".compare-part > div .border-secondary");
	


    $("#result").click(function(){
    	$(this).closest(".result-container").remove();
    })

    $(".plus").click(function(){

    	let result = $(this).closest(".row-result").find(".bankName").text();
    	let comp = $(".compare-result > div");

    	let compP = $(".compare-result > div p");

    	if($(this).css("background-color") == "rgb(0, 128, 0)")
    	{	

    	 if(confirm("Do you want to remove this item"))
    	  {
    		$(this).css("background-color","rgb(239, 239, 239)");
    	    $(this).text("+");

    	   
    	    for (let i = 0; i < compP.length; i++) {
    	    	if(compP[i].innerText == result){
    	    		compP[i].closest(".col-md-2").remove()
    	    	}
    	    }
    	  }

    	}
    	else{

		$(this).css("background-color","green");
    	$(this).text("-");
    	let result2 = $(this).closest(".row-result").find(".col-md-2");
    	resultArray.push(result2);

        let compareDiv = $("<div></div>");
        let p = $("<p></p>");
        p.text(result);
        compareDiv.addClass("col-md-2  bg-light border border-secondary text-center");
        compareDiv.append(p)
        
        comp.prepend(compareDiv);

		compareDiv.click(function(){
		
			let info = $(".bankName:contains('"+$(this).text()+"')");
			let infoRow  = info.closest(".row-result");

			let infoDetails1 = infoRow.find("p");
			let infoDetails = infoRow.find("span");

			let tableInfo = $(".tableInfo");
			

			let trInfo = $("#info-column");

			let col1 = $("<td>"+$(this).text()+"</td>")
			let col2 = $("<td>"+infoDetails1[0].innerText+"</td>");
			
			trInfo.append(col1);
			trInfo.append(col2);

			console.log(infoDetails);

			for (let i = 0; i < 5; i++) {
				let col = $("<td>"+infoDetails[i].innerText+"</td>");
				trInfo.append(col);
			}

			tableInfo.css("display","block")
		})
		
    	}


    	$("#close").click(function(){
    		$(this).closest(".tableInfo").css("display","none");
    		$("#info-column td").remove();
    	})
    	

    })

})
