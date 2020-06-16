//check off specific todos by clicking
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
  });

//click on x to delete todo
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(500, function(){
      $(this).remove();
  });
  event.stopPropagation();
  }
);

$("#adder").keypress(function(event){
  if (event.which === 13){
   let todotext = ($(this).val());
   $(this).val("");
   //create a new li and add to ul using the append() method
   $("ul").append("<li><span><i class = 'fa fa-trash'></i> </span>"+ todotext + "</li>")
  }
});
