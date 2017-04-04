$(document).ready(function(){
	$("#projectsLink").addClass("chosen");
	
    $("a").click(function(){
		$("#projectsLink").removeClass("chosen");
		$("a").removeClass("chosen");
        $(this).addClass("chosen");
		if ($(this).attr("id") == "myNameLink"){
			$(this).removeClass("chosen");
			$("#projectsLink").addClass("chosen");

		}
    });
    
    // change background to yellow in menu upon hover
    $("a").hover(function(e){
    	if (!($(this).attr("id") == "myNameLink")){
    	document.getElementById($(this).attr("id")).style.background = "yellow";
    	document.getElementById($(this).attr("id") + "2").style.background = "yellow";
        }
        }, function(){
        document.getElementById($(this).attr("id")).style.background = "white";
    });

	// Create IE + others compatible event handler
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

	// Listen to message from child window
	eventer(messageEvent,function(e) {
		var idName = e.data;
	    $("#projectsLink").removeClass("chosen");
		$("a").removeClass("chosen");
		$("#" + idName).addClass("chosen");
	},false);

});