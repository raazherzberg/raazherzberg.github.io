$(document).ready(function(){
	$(".imgContainer").click(function(){
		var name = $(this).attr("id");
		parent.postMessage(name, "https://raazherzberg.github.io/portfolio/");
		});

});