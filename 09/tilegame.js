var clickflag = 0;
var beforetarget;
var endfalg = 0;

function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function printCards(){
  cards.forEach(function(card){
    $wrap.append('<div class="card close" num="'+card+'">\
    <div class="front">  </div> \
    <div class="back">'+ card +'</div></div>');
  });
}

function addEvent(){
  $wrap.on('click', '.card', function(event){

    var $target = $(event.currentTarget);
    var num = $target.attr('num');
      
    console.log('click card!', num);
      if(clickflag == 0){
          beforetarget = $target;
          $target.attr('class', 'card open');
          clickflag = 1 ;
      }
      else{
          $target.attr('class', 'card open');
          
          endflag = 1;
          setTimeout(function(){
              if( beforetarget.attr('num') != $target.attr('num')){
                  beforetarget.fadeOut(0).attr('class', 'card close').fadeIn(300);
                  $target.fadeOut(0).attr('class', 'card close').fadeIn(300);
              }
              endflag = 0;
          }, 300);
          clickflag = 0;
      }
  });
}

var cards = [1,2,3,4, 1,2,3,4];
var $wrap = $('.wrap');

//init
shuffle(cards);
console.log(cards);
printCards();
addEvent();