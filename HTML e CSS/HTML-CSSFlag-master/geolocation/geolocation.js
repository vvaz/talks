var loc = document.getElementById('loc');

function localizacao() {
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		loc.innerHTML = "A sua localização não pode ser definida";
	}
}

function showPosition(position) {
	loc.innerHTML = "Longitude: " + position.coords.longitude + "<br />Latitude: " + position.coords.latitude;
}