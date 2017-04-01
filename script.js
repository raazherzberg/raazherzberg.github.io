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
        $(this).css("background-color", "yellow");
        }
        }, function(){
        //if ($(e.target).hasClass('chosen')) {return;};
        $(this).css("background-color", "white");
    });
s
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