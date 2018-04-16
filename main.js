$(document).ready(function(){
   //Call function to generate grid
   generateGrid();
   //make an ajax request for a random number
   
});

//FUNZIONI
//generate 6x6 grid
function generateGrid(){
   var gridCont = $('#grid-cnt');
   for (var i = 0; i < 36; i++) {
      gridCont.append('<div class="grid-cell">' + '</div>');
   }
}
