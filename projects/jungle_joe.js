var joe = {
	name: "Joe",
	location: "99",

	// make integer coordinates accessible to player object (default values)
	locationX: 9,
	locationY: 9,

	health: 30,
	hide: function() {

		// enable hide button to reset game
		if (player.grenades < 4) {location.reload()}
		document.getElementById("health").innerHTML = (joe.health)
		document.getElementById("grenades").innerHTML = (player.grenades)

		// set random location
		var hideX=Math.floor(Math.random()*10)
		this.locationX=hideX
		var hideY=Math.floor(Math.random()*10)
		this.locationY=hideY
		var hidingSpot=(hideX.toString()+hideY.toString())
		this.location=hidingSpot
	}
}

// reveal joe's location
reveal = function() {document.getElementById(joe.location).innerHTML = ("<b id='joe'>" + joe.name + "</b>")}

var player = {
	grenades: 4,
	strike: function() {

		// set grenade coordinates per user selection
		var strikeX = document.getElementById("selectXCoord").options[document.getElementById("selectXCoord").selectedIndex].text
		var strikeY = document.getElementById("selectYCoord").options[document.getElementById("selectYCoord").selectedIndex].text

		// inflict damage (global) to joe's health based on grenade proximty
		damage=0
		if (10-Math.abs(joe.locationX-strikeX)-Math.abs(joe.locationY-strikeY)>0) {
			damage=(10-Math.abs(joe.locationX-strikeX)-Math.abs(joe.locationY-strikeY))
		}
		joe.health-=damage
		document.getElementById("health").innerHTML = (joe.health)
		var strikeCoords=(strikeX.toString()+strikeY.toString())
		document.getElementById(strikeCoords).innerHTML=("<b id='strike_spot'>" + damage +"</b>")
		this.grenades-=1
		document.getElementById("grenades").innerHTML = (this.grenades)

		// test for game ending conditions.
		if (strikeCoords===joe.location) {
			reveal()
			alert("Direct hit! You Win!")
			location.reload()
		}

		else if (joe.health<=0) {
			reveal()
			alert("Happy Hunting! You killed Joe!")
			location.reload()		
		}		
		
		else if (this.grenades<=0) {
			reveal()
			alert("Joe got away! You Lose!")
			location.reload()
		}	
	}
}

joe.hide()



