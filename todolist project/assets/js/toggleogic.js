//check off specific todos by clicking
$("li ").click(function(){
  //if li is gray, turn it black
  if($(this).css("color")==="rgb(128, 128, 128)"){ 
    $(this).css({
   color: "black",
   textDecoration:"none"
   });
  }
  // else turn it gray;
  else{ 
     $(this).css({
    color: "gray",
    textDecoration:"line-through"
    });
  }

  });