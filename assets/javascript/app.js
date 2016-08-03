$(document).ready(function(){
	$('#searchMe').click(function(){
		var parameter = $('#userSearch').val();
		var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=97cf20a3a8fa40c29f25c28b85aabb12&q=" + parameter 

		$.ajax({url: queryUrl, method: 'GET'})
		

		.done(function(response){
			console.log(response)
		})
	})
});
