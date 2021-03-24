var input = document.getElementById("wordInput");
input.placeholder = "Enter here";
var currentWord = Math.floor(Math.random() * 94);
const myHeading = document.querySelector('h1');
var obj;

fetch('./js/json/irreg_verbs.json')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
		obj=out;
		myHeading.textContent = obj.word_list[currentWord].infinitive;
}).catch(err => console.error(err));

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		event.preventDefault();
		if (input.value === obj.word_list[currentWord].past_simple) {
			currentWord = Math.floor(Math.random() * 94);
			myHeading.textContent = obj.word_list[currentWord].infinitive;
			input.value = "";
		}
	}
});

document.getElementById("myBtn").addEventListener("click", function() {
	event.preventDefault();
	if (input.value === obj.word_list[currentWord].past_simple) {
		currentWord = Math.floor(Math.random() * 94);
		myHeading.textContent = obj.word_list[currentWord].infinitive;
		input.value = "";
	}
});




