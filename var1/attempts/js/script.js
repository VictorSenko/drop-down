var dropDown = $('<div></div>');
$('.block').append(dropDown);
var arr =[null];

$('.block').on('click',function(){
  arr.push($(this).index());
  addDropDown($(this).index());
});

function addDropDown(id){
  var valid = arr.shift();
  var curentBlock = $('.block').children().eq(id);
  curentBlock.addClass('dropDown-style');
  if(id == valid){
    curentBlock.slideToggle(500);
  }
  else{
    $('.block').children().eq(valid).slideUp(500);
    curentBlock.slideToggle(500);
  }
};
