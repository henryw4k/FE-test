$.each(result.marks, function(index, element){
	//constructing each item
	var $item = '<div class="item">'+
			    '<img class="center" src='+element.IMI.Image+'></img>'+
			    '<div class="textBox">'+
			    '<p class="itemName">'+element.IMI.Name+'</br>'+
			    'from '+element.IMI.Brand+'</p>'+
			    '</div>'+
			    '</div>';

	$("#container").append($item);
});
