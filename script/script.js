function calculateInsurance(name, age, horse, country) {
	
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var horse = document.getElementById("horsePower").value;
	var country = document.getElementById("selectBox").value;
	
	var cost = document.getElementById("result");

	if (country === "Austria") {
		var austria = Math.round((Number(horse) * 100) / (Number(age) + 50));
		cost.innerHTML = name + ", your insurance costs: " + austria + " €" ;
	}else if (country === "Hungary"){
		var hungary = Math.round((Number(horse) * 120) / (Number(age) + 100));
		cost.innerHTML = name + ", your insurance costs: " + hungary + " €";
	}else {
		var greece = Math.round((Number(horse) * 150) / ((Number(age)+3) + 150));
		cost.innerHTML =  name + ", your insurance costs: " + greece + " €";
	}

	if (age > 18) {
 		return;
 	} else {
 		cost.innerHTML = "You must be 18 or older!";
 	};

};

document.getElementById("button").addEventListener("click", calculateInsurance);