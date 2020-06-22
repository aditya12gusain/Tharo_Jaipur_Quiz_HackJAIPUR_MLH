window.onload = function() {
	show(0);
};

//Questions in JSON Format
let questions = [
	{
		id: 1,
		question: 'Jaipur is the home of the Jantar Mantar, a collection of constructions for making astronomical observations which was declared a UNESCO World Heritage Site in the year?',
		answer: '2010',
		options: [ '2010', '2011', '2008', '2012' ]
	},
	{
		id: 2,
		question: 'Jantar Mantar is a name from two Sanskrit words meaning what?',
		answer: 'Calculating machine',
		options: [ 'Measuring skies', 'Calculating machine', 'Seeing stars', 'Finding location' ]
	},
	{
		id: 3,
		question: 'Which Hindu Rajput ruler was responsible for the construction of Jantar Mantar in the early 18th century?',
		answer: 'Maharaja Sawai Jai Singh II',
		options: [ ' Shah Jahan', 'Maharaja Sawai Jai Singh II', 'Babur', 'Abul-Fath Jalal-ud-din Muhammad Akbar' ]
	},
	{
		id: 4,
		question: 'This is the Vrihat Samrat Yantra at Jaipur. Although the structure on the right may remind you of the stairway to nowhere seen briefly in an episode of "The Simpsons", it actually has a very specific function. Which of these describes it?',
		answer: 'It is the gnomon of the world`s largest sundial.',
		options: [ 'It provides access to the telescope room.', 'It allows better precision through elevation when making observations.', 'It allows supervisors a good view of the work on the instruments below.', 'It is the gnomon of the world`s largest sundial.' ]
	},
	{
		id: 5,
		question: 'On days when the Samrat Yantra cannot provide accurate sun position measurements, another structure called the Dakshin Bhitti Yantra is used. On which day or days does it get pressed into service?',
		answer: 'Vernal and autumnal equinoxes',
		options: [ 'Summer and winter solstices','Whenever there is a solar eclipse', 'When the cloud cover exceeds 90%', 'Vernal and autumnal equinoxes' ]
	},
	{
		id: 6,
		question: 'This is the Narivalaya Yantra, another monumental sundial that can be seen at Jantar Mantar. It consists of a circular dial, which is situated at an angle, on which a thin rod in its centre is pointed at one of the earth`s poles. What determines the angle of inclination needed for this instrument to produce accurate measurements of time?',
		answer: 'The latitude at which it is located',
		options: [ 'The phase of the moon', 'The longitude at which it is located', 'The latitude at which it is located', 'The time of the year' ]
	},
	{
		id: 7,
		question: 'The Chakra Yantra, pictured, is used for measuring the position of celestial objects that can be seen during the night?',
		answer: 'True',
		options: [ 'False', 'True', 'May Be', 'No exitence of place in Jaipur' ]
	},
	{
		id: 8,
		question: 'The Unnatasha Yantra at Jaipur, seen here, is designed to be used for observation of solar eclipses?',
		answer: 'False',
		options: [ 'False', 'True', 'May Be', 'No such place exists in Jaipur' ]
	},
	{
		id: 9,
		question: 'Which of these monuments is not found in Jaipur?',
		answer: 'Buland Darwaza',
		options: [ 'Hawa Mahal', 'Amer Fort', 'Nahargarh Fort', 'Buland Darwaza' ]
	},
	{
		id: 10,
		question: 'Jaipur is also known as?',
		answer: 'Pink City',
		options: [ 'Blue City', 'City Of Forts', 'Pink City', 'None of these' ]
	}
];

function submitForm(e) {
	e.preventDefault(); 
	let name = document.forms['welcome_form']['name'].value;
	sessionStorage.setItem('name', name);
	location.href = 'HTML/quiz.html';
}

let question_count = 0;
let point = 0;

function next() {
	let user_ans = document.querySelector('li.option.active').innerHTML;
	if (user_ans == questions[question_count].answer) {
		point += 10;
		sessionStorage.setItem('points', point);
	}
	if (question_count == questions.length - 1) {
		location.href = 'HTML/end.html';
		sessionStorage.setItem('time', `${minutes} minutes and ${seconds} seconds`);
		clearInterval(mytime);
		return;
	}

	question_count++;
	show(question_count);

}

function show(count) {
	let question = document.getElementById('questions');
	question.innerHTML = `
<h2>Q${question_count + 1}.${questions[count].question}</h2>
<ul class="option_group">
            <li class="option">${questions[count].options[0]}</li>
            <li class="option">${questions[count].options[1]}</li>
            <li class="option">${questions[count].options[2]}</li>
            <li class="option">${questions[count].options[3]}</li>
          </ul>`;
	toggleActive();
}

function toggleActive() {
	let option = document.querySelectorAll('li.option');
	for (let i = 0; i < option.length; i++) {
		option[i].onclick = function() {
			for (let j = 0; j < option.length; j++) {
				if (option[j].classList.contains('active')) {
					option[j].classList.remove('active');
				}
			}
			option[i].classList.add('active');
		};
	}
}
