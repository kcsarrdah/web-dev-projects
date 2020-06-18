let colors = generaterandomcolors(6);

let squares = document.querySelectorAll(".square");
let pickedcolor = pickcolor(); 
let colordisplay = document.getElementById("colordisplay");
let messagedisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetbutton = document.getElementById("reset");
let easybtn = document.querySelector("#easybtn");
let hardbtn = document.querySelector("#hardbtn");


easybtn.addEventListener("click", function() {
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(let i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});
hardbtn.addEventListener("click", function() {
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textcontent = pickedcolor;
	for(let i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


resetbutton.addEventListener("click", function(){
  //generate new colors
  colors = generaterandomcolors(numsquares);
  //pick a new random color from array
  pickedcolor = pickcolor();
  //change color display to match picked color
  colordisplay.textContent = pickedcolor;
  //change colors of the squares
  this.textContent = "New colors";
  messagedisplay.textContent = "";
  for(let i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = colors[i];
  }
    h1.style.backgroundColor = "steelblue";
});

colordisplay.textContent = pickedcolor;

for(let i = 0; i < squares.length; i++)
{
  //add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  //add quick listeners to squares
  squares[i].addEventListener("click", function(){
    //grab color of clicked square and compare that color to the picked color!
    let clickedcolor = this.style.backgroundColor;
    if(clickedcolor === pickedcolor)
    {
      messagedisplay.textContent = "correct!";
      resetbutton.textContent = "Play Again?";
      changecolors(clickedcolor);
      h1.style.backgroundColor = clickedcolor;
    }
    
    else{
      this.style.backgroundColor = " #232323";
      messagedisplay.textContent = "try again!";
    }

  })
}

function changecolors(color){
  //loop through all squares and change each color to the correct color!
  for(let i = 0; i < squares.length; i++)
  {
    squares[i].style.backgroundColor = color;
  }
}

function pickcolor(){
 let random = Math.floor(Math.random()*colors.length);
 return colors[random];
}

function generaterandomcolors(num){
  //make an arrayand add num random colors to the array and return
  let arr = [];
  for(var i = 0; i < num; i ++)
  {
    //get random color
    arr.push(randomcolor());
  }
  return arr;
}

function randomcolor(){
  //pick a "red from 0 to 255"
  let r = Math.floor(Math.random()*256);
  //pick a "blue from 0 to 255"
  let b = Math.floor(Math.random()*256);
  //pick a "green from 0 to 255"
  let g = Math.floor(Math.random()*256);

  return "rgb(" + r + ", " + g + ", " + b +")";

}

