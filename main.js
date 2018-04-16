$(document).ready(function(){
   //Call function to generate grid
   generateGrid();
   //declare an array to contain the clicked cells
   var clickedCells = [];
   //make an ajax request for a random number
   //when click on grid-cell
   $('.grid-cell').click(function(){
      //assign to a variable the value of cell
      var actualCell = $(this);
      //Check if the clicked cell is already clicked
      if(!clickedCells.includes(actualCell.index())){
         //push the index of the cell into the array
         clickedCells.push(actualCell.index());
         $.ajax({
            url: 'https://www.boolean.careers/api/random/int',
            method: 'GET',
            success: function(data){
               var randomNumb = data.response;
               if(data.response <= 5){
                  actualCell.addClass('yellow-backgr');
                  actualCell.text(randomNumb);

               }
               else{
                  actualCell.addClass('green-backgr');
                  actualCell.text(randomNumb);
               }
            },
            error: function(){

            }
         });
      }

   });
});

//FUNZIONI
//generate 6x6 grid
function generateGrid(){
   var gridCont = $('#grid-cnt');
   for (var i = 0; i < 36; i++) {
      gridCont.append('<div class="grid-cell">' + '</div>');
   }
}
