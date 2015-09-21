

//a function that:
//Chooses the right element
//replaces it with a chosen word
//showing that word on hover only (with backround color)

// function whatWordOn(event){  //get the target of the event
// 	return event.target;
// 	console.log(target);
// }

// function showOrigin(){  		     //takes the word its on and returns the origin word
// var target; 				 //declaring vars
// target = whatWordOn(e); 				 //calling previous func to find the target item clicked/hovered
// target.style.color = 'blue';			 //change its backround color

// }


// //Set the event listener to call "showOrigin" on hover
// var suzanne = document.getElementById('su');
// suzanne.addEventListener('mouseover', function(e) {
// 	whatWordOn(e);
// 	}, false);

$(document).ready(checkWord)

function checkWord(){
			 //var targetWord = 
			 var word = document.getElementById('su'); //getElementsByClassName("you");
			  // this handler will be executed every time the cursor is moved over a different list item
			  word.addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "Sheril";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "Suzzane";
			      event.target.style.color = "";
			    }, 700);
			  }, false);
			}