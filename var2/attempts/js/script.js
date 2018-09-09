var dropDown = $('<div></div>');
$('.block').append(dropDown);
$('.block').on('click', function(){
  addDropDown($('.block').index(this));
});
function addDropDown(id){
  var validate = $('.block').eq(id).children().hasClass('dropDown-style');
  if(validate) {
    $('.block').eq(id).children().slideToggle('300');
  }else{
    $('.block').children().slideUp(300);
    $('.block').eq(id).children().addClass('dropDown-style').slideDown('300');
    for(var i = 0; i < $('.block').length; i++){ 
            if(i!=id){ 
                $('.block').eq(i).children().removeClass('dropDown-style'); 
            } 
        }
    }
}
