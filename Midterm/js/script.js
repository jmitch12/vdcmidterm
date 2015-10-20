var story = $('.story');
var author = $('.author');
var button1 = $('#button');
var story4 = $('#story4');
var author4 = $('#author4');
var button2 = $('#two');

$(button1).click(function(){
	$(this).hide();
	$(story).hide();
	$(author).hide();
    $(story4).show();
    $(author4).show();
    $(button2).show();
});