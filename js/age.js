function calculateAge() {

	bday = new Date(1996,3,20);
	today = new Date();

	age = today.getFullYear() - bday.getFullYear();

	//Check if my bday has passed this year
	if (today.getMonth() < bday.getMonth()) {
		age -= 1;
	} else if (today.getMonth() == bday.getMonth()) {
		if(today.getDay() < bday.getDay()) {
			age -= 1;
		}
	}


	span = document.getElementById("my-age");
	txt = document.createTextNode(age);
	span.appendChild(txt);

	//removing default
	defaultAge = document.getElementById("age-default");
	defaultAge.parentNode.removeChild(defaultAge);

}