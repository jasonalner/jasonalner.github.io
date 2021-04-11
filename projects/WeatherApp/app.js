const button = document.querySelector('.button')
const inputValue = document.querySelector('.inputValue')
const name = document.querySelector('.name')
const desc = document.querySelector('.desc')
const temp = document.querySelector('.temp')
const errorMsg = document.getElementById('errorMsg')

button.addEventListener('click', function() {
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=f68daa637db78a934561270ec0eff1fc')
	.then(response => response.json())
	.then(data => {
		let nameValue = data['name']
		let descValue = data['weather'][0]['description']
		let tempValue = data['main']['temp']

		name.innerHTML = nameValue
		desc.innerHTML = 'The weather right now is ' + descValue + '.'
		temp.innerHTML = tempValue + ' &#8451'
		console.log(data)
	})
	.catch(err => {
		errorMsg.innerHTML = 'Please enter a city name.';
		if (inputValue.value == "") {
        errorMsg.style.display = "none"
   		} 
	  })
})

