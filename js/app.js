$(document).ready(function() {

    $id = 0;
	
	$("#content-edit div").click(function() {
		$("#control-show").load('partials/' + $(this).attr('id') +  '.html', function() {
			CKEDITOR.inline( document.getElementById( 'heading' ) );
		});
		
		
	});
	
	$(document).on("click", '.add_heading', function(e) {
		
		var $size = $("#heading-size option:selected").val();
		
		var $heading = "h2";
		
		if($size == 2)
		{
			var $heading = "h3"
		}
		
		$id++;
		$("#page").append("<div class='row' id='content" + $id + "'>");
		$("#page").append("<div class='span9'><" + $heading +  ">" + $("#heading").val() + "</" + $heading + "></div>");
		$("#page").append("</div>");
		

	    $("#control-show").html("");
	});
	
	$(document).on("click", '.add_text', function(e) {
		$id++;
		$("#page").append("<div class='row' id='content" + $id + "'>");
		$("#page").append("<div class='span9'>" + CKEDITOR.instances['heading'].getData() + "</div>");
		$("#page").append("</div>");
		
		
	    $("#control-show").html("");
	});
	
	$(document).on("click", '.add_text_image', function(e) {
		$id++;
		$("#page").append("<div class='row' id='content" + $id + "'>");
		$("#page").append("<div class='span6'>" + CKEDITOR.instances['heading'].getData() + "</div>");
		$("#page").append("<div class='span3'><img src='" + $("#img-loader").attr("src") + "' /><div class='img_desc'>" + $("#img_title_1").val() + "</div></div>");		
		$("#page").append("</div>");
		
		$("#control-show").html("");
	});
	
	
	$(document).on("click", '.add_image', function(e) {
		
		var $shape = $("#img-shape option:selected").val();
		
		var $class = "";
		
		if($shape == 2)
		{
			var $class = "circle"
		}
	
		$id++;
		
		$("#page").append("<div class='row' id='content" + $id + "'>");
		$("#page").append("<div class='span3'><img src='" + $("#img-loader1").attr("src") + "' class='" + $class + "' /><div class='img_desc'>" + $("#img_title_1").val() + "</div></div>");
		$("#page").append("<div class='span3'><img src='" + $("#img-loader2").attr("src") + "' class='" + $class + "' /><div class='img_desc'>" + $("#img_title_2").val() + "</div></div>");
		$("#page").append("<div class='span3'><img src='" + $("#img-loader3").attr("src") + "' class='" + $class + "' /><div class='img_desc'>" + $("#img_title_3").val() + "</div></div>");
		$("#page").append("</div>");
		
		$("#control-show").html("");
	});
	
	$(document).on("click", '.add_image_text', function(e) {
		
		$("#page").append("<div class='row'>");		
		$("#page").append("<div class='span3'><img src='" + $("#img-loader").attr("src") + "' /><div class='img_desc'>" + $("#img_title_1").val() + "</div></div>");		
		$("#page").append("<div class='span6'>" + CKEDITOR.instances['heading'].getData() + "</div>");
		$("#page").append("</div>");
		
		$("#control-show").html("");
	});
});

