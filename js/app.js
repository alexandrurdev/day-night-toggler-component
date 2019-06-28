// stock the input atrs checked/unchecked in variables for easy manipulation
// if/else || switch || ternary operator for verification and display the right icon + change the bg of body DOM element

var body = document.body;
var toggler = document.getElementById('toggleJS');
var sunIcon = document.getElementById('sunIconJS');
var moonIcon = document.getElementById('moonIconJS');
var d = new Date();
var n = d.getHours();


if(n <= 9) {
	sunIcon.style.display = 'none';
	moonIcon.style.display = 'block';
	body.classList.add("darkMode");
	toggleJS.classList.remove('checked');
} else {
	sunIcon.style.display = 'block';
	moonIcon.style.display = 'none';
	body.classList.remove("darkMode");
	toggleJS.classList.add('checked');
}


toggler.addEventListener('click', () => {
	toggler.classList.toggle('checked');
	if(toggler.classList.contains('checked')) {
		console.log('checked');
		day();
	} else {
		console.log('unchecked');
		night();
	}
});

function day() {
	moonIcon.style.display = 'none';
	sunIcon.style.display = 'block';
	body.classList.add("darkMode");
}

function night() {
	sunIcon.style.display = 'none';
	moonIcon.style.display = 'block';
	body.classList.remove("darkMode");
}