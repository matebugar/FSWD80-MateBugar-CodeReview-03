var team = JSON.parse(teamMembers);
	for(i=0; i < team.length; i++){
		document.getElementById("staff").innerHTML += "<div><p>Name: "+ team[i].name + "</p><p>E-mail: " + team[i].email + "</p><p>Job: " + team[i].job + "</p><p><img src='img/person" +(i+1)+ ".jpg'></p></div>"
	}
