console.log('Hello app.js');

//$('body').fadeOut().delay(1000).fadeIn();
//$('div').html("text");
//$.('.box').hide();

//$('#uparrow').append('');
$('#uparrow').hide();

$(window).scroll(function(event){
     //$('#uparrow').append('<a href="#top">uparrow</a>');
     $('#uparrow').fadeIn().delay(100);
    console.log('scroll down');
    $(window).scrollUp(function(event){
        $('#uparrow').hide();
    })
});
