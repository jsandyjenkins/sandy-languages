var input = document.getElementById("wordInput");
input.placeholder = "Enter here";
var currentWord = Math.round(Math.random() * 94);
var tense = Math.round(Math.random());
const myHeading = document.querySelector('h1');
const errorBox = document.querySelector('p');
var obj;

fetch('./js/json/irreg_verbs.json')
    .then(res => res.json())
    .then((out) => {
        console.log('Output: ', out);
		obj=out;
		if (tense == 0) {
			myHeading.textContent = "Past Simple: " + obj.word_list[currentWord].infinitive;
		} else {
			myHeading.textContent = "Past Perfect: " + obj.word_list[currentWord].infinitive;
		}
}).catch(err => console.error(err));

input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		event.preventDefault();
		if (tense == 0){
			if (input.value === obj.word_list[currentWord].past_simple) {
				currentWord = Math.floor(Math.random() * 94);
				tense = Math.round(Math.random());
				if (tense == 0) {
					myHeading.textContent = "Past Simple: " + obj.word_list[currentWord].infinitive;
				} else {
					myHeading.textContent = "Past Perfect: " + obj.word_list[currentWord].infinitive;
				}
				input.value = "";
				errorBox.textContent = "";
			}else{
				errorBox.textContent = obj.word_list[currentWord].past_simple;
			}
		}else{
			if (input.value === obj.word_list[currentWord].past_participle) {
				currentWord = Math.floor(Math.random() * 94);
				tense = Math.round(Math.random());
				if (tense == 0) {
					myHeading.textContent = "Past Simple: " + obj.word_list[currentWord].infinitive;
				} else {
					myHeading.textContent = "Past Perfect: " + obj.word_list[currentWord].infinitive;
				}
				input.value = "";
				errorBox.textContent = "";
			}else{
				errorBox.textContent = obj.word_list[currentWord].past_participle;
			}
		}
	}
});

document.getElementById("myBtn").addEventListener("click", function() {
	event.preventDefault();
	if (tense == 0){
		if (input.value === obj.word_list[currentWord].past_simple) {
			currentWord = Math.floor(Math.random() * 94);
			tense = Math.round(Math.random());
			if (tense == 0) {
				myHeading.textContent = "Past Simple: " + obj.word_list[currentWord].infinitive;
			} else {
				myHeading.textContent = "Past Perfect: " + obj.word_list[currentWord].infinitive;
			}
			input.value = "";
			errorBox.textContent = "";
		}else{
			errorBox.textContent = obj.word_list[currentWord].past_simple;
		}
	}else{
		if (input.value === obj.word_list[currentWord].past_participle) {
			currentWord = Math.floor(Math.random() * 94);
			tense = Math.round(Math.random());
			if (tense == 0) {
				myHeading.textContent = "Past Simple: " + obj.word_list[currentWord].infinitive;
			} else {
				myHeading.textContent = "Past Perfect: " + obj.word_list[currentWord].infinitive;
			}
			input.value = "";
			errorBox.textContent = "";
		}else{
			errorBox.textContent = obj.word_list[currentWord].past_participle;
		}
	}
});




