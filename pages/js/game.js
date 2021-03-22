var input = document.getElementById("wordInput");
input.placeholder = "Enter here";
var currentWord = Math.floor(Math.random() * 10);
const myHeading = document.querySelector('h1');

var data = '{ "translations" : ['+
'{ "id" : "1", "bulgarian" : "Kak si?", "english" : "How are you?" },'+
'{ "id" : "2", "bulgarian" : "Dobre sam, blagodarja, A ti?", "english" : "Fine thanks, how are you?" },'+
'{ "id" : "3", "bulgarian" : "Ne sam te vishdal mnogo vreme", "english" : "Long time, no see" },'+
'{ "id" : "4", "bulgarian" : "Kak se kazvash?", "english" : "Whats your name?" },'+
'{ "id" : "5", "bulgarian" : "Kazvam se", "english" : "My name is" },'+
'{ "id" : "6", "bulgarian" : "Otkade si?", "english" : "Where are you from?" },'+
'{ "id" : "7", "bulgarian" : "Az sam ot", "english" : "Im from" },'+
'{ "id" : "8", "bulgarian" : "Nazdrave!", "english" : "Cheers!" },'+
'{ "id" : "9", "bulgarian" : "Ne razbiram", "english" : "I dont understand" },'+
'{ "id" : "10", "bulgarian" : "Sashaljavam", "english" : "Sorry" }]}'

obj = JSON.parse(data);

myHeading.textContent = obj.translations[currentWord].bulgarian;

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		event.preventDefault();
		if (input.value === obj.translations[currentWord].english) {
			currentWord = Math.floor(Math.random() * 10)
			myHeading.textContent = obj.translations[currentWord].bulgarian;
			input.value = "";
		}
	}
});




