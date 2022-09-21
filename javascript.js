//alert("Hello");
//Data: assume we have a list of top 5 movies - a list of JAVASCRIPT Objects
let topMovies = [{id: 0, title: "The Shawshank Redemption", year: 1994, image_url: "MEDIA/movie0.jpg"},
				 {id: 1, title: "The Godfather ", year: 1972, image_url: "MEDIA/movie1.jpg"},
				 {id: 2, title: "The Dark Knight", year: 2008, image_url: "MEDIA/movie2.jpg"},
			     {id: 3, title: "12 Angry Men", year: 1957, image_url: "MEDIA/movie3.jpg"},
			     {id: 4, title: " Schindler\'s List", year: 1993, image_url: "MEDIA/movie4.jpg"},
				];

//Link to JSON File (faqs.json) stored on the Internet at http://danieldangs.com/itwd6408/json/faqs.json
let proxy = 'https://cors-anywhere.herokuapp.com/' ;
let json_url = "http://danieldangs.com/itwd6408/json/faqs.json";
//CORS Access Request
//<p>Request CORS access <a href="https://cors-anywhere.herokuapp.com/corsdemo">CORS REQUEST</a></p>

$('h1').css('color', 'red');
$('h1').css({
	'background-color': 'yellow',
	'text-align': 'center',
	'padding': '1.5em'
});

$("h2").css({
	'color': 'blue',
	'margin-top': '2.0em'
});

//Get element by class-name
$('.topic').css('background-color', 'gray');

//Get element by id
$('#topic-text').css({
	'padding': '2.0em',
	'font-size': '1.2em',
	'color': 'pink'
});

//JQUERY: HTML EVENT METHODS
$('#box').css({
	'width': '150px',
	'height': '150px',
	'background-color': 'red'
});

$('#btn1').click(function(){
	//Hide the box
	$('#box').hide(2000).show(2000);
});

$('#btn2').on('click', function(){
	//Show the box
	$('#box').show(2000);
});

$('#btn3').on('click', function(){
	$('#box').toggle(1000);
});


//JQUERY: EFFECTS AND ANIMATION
$('#demo-content').css({
	'width': '400px',
	'height': '150px',
	'background-color': 'green',
	'position': 'relative'
});

//Effects
$('#btn4').click(function() {
	$('#demo-content').slideToggle(2000);
});

//Animation
$('#btn5').on('click', function() {
	$('#demo-content').animate({
		left: 200
	});
});

//JQERUY: DOM MANIPULATION
$('#add-customer').click(function() {
	//Get endered data
	let enteredData = $('#new-customer').val();
	$('.error').remove();
	
	//Check if the entered data is empty,
	//show and error message
	if (enteredData == "" || enteredData == null) {
		//Create an error message
		$('#add-customer').after('<p class="error" style="color: red">Please enter a name</p>');
	} else {
		//Else, add new customer to list
		$('#customer-list').append('<li>' + enteredData + '</li>');
		$('.error').remove();
	}
});

//Add "focus" event to the input "new-customer
$('#new-customer').on('focus', function() {
	$(this).css('background', 'pink');
});

$('#new-customer').on('blur', function() {
	$(this).css('background', 'white');
});