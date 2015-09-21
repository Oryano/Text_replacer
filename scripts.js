

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

document.addEventListener("DOMContentLoaded", function(event) {  //wait for document to load


			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('su').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "Country";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "Suzzane";
			      event.target.style.color = "";
			    }, 700);
			  }, false);
			

			  document.getElementById('place').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "House";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "place";
			      event.target.style.color = "";
			    }, 700);
			  }, false);


			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('river').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "stream";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "river";
			      event.target.style.color = "";
			    }, 700);
			  }, false);


			  // //  handler to be executed when cursor is moved over these elements
			  // document.getElementById("you").addEventListener("mouseover", function( event ) {   
			  //   // highlight the mouseover target
			  //   event.target.innerHTML = "Rachel";
			  //   event.target.style.color = "blue";

			  //   // reset the color after a short delay
			  //   setTimeout(function() {
			  //     event.target.innerHTML = "you";
			  //     event.target.style.color = "";
			  //   }, 700);
			  // }, false);


			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('boats').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "the Lakes";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "boats";
			      event.target.style.color = "";
			    }, 700);
			  }, false);


			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('night').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "stars";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "night";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			  // //  handler to be executed when cursor is moved over this element
			  // document.getElementById('she').addEventListener("mouseover", function( event ) {   
			  //   // highlight the mouseover target
			  //   event.target.innerHTML = "pretty";
			  //   event.target.style.color = "blue";

			  //   // reset the color after a short delay
			  //   setTimeout(function() {
			  //     event.target.innerHTML = "she";
			  //     event.target.style.color = "";
			  //   }, 700);
			  // }, false);


			   //  handler to be executed when cursor is moved over this element
			  document.getElementById('tea').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "sleepy";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "tea";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			   //  handler to be executed when cursor is moved over this element
			  document.getElementById('oranges').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "blood";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "oranges";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			   //  handler to be executed when cursor is moved over this element
			  document.getElementById('china').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "Asian";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "China";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			  			   //  handler to be executed when cursor is moved over this element
			  document.getElementById('love').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "peace";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "love";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('jesus').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "God";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "Jesus";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('water').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "lake";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "water";
			      event.target.style.color = "";
			    }, 700);
			  }, false);


			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('tower').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "radio";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "tower";
			      event.target.style.color = "";
			    }, 700);
			  }, false);

			  			  //  handler to be executed when cursor is moved over this element
			  document.getElementById('sea').addEventListener("mouseover", function( event ) {   
			    // highlight the mouseover target
			    event.target.innerHTML = "ocean";
			    event.target.style.color = "blue";

			    // reset the color after a short delay
			    setTimeout(function() {
			      event.target.innerHTML = "sea";
			      event.target.style.color = "";
			    }, 700);
			  }, false);








			  //  handler to be executed when cursor is moved over these elements
			  var youClass = document.getElementsByClassName("you");  //a list of the class elemnts
			  for(var i = 0; i < youClass.length; i++){
			  youClass[i].addEventListener("mouseover", function( event ) {   
			    
                //youClass[i].innerText= "Rachel";    // Change the content
                //youClass[i].style.color = "blue";
                
                for (var j = 0; j < youClass.length; j++) {
	                youClass[j].innerText= "Rachel";    // Change the content
	                youClass[j].style.color = "blue";
                }

			    // // reset the color after a short delay
			    // setTimeout(function() {
			    //   event.target.innerHTML = "you";
			    //   event.target.style.color = "";
			    // }, 700);
			  }, false);
			}



			





});







	




