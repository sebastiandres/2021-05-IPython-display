function launch_reveal(){
	var x = document.getElementById("my_button");
	x.style.display = "none";
	console.log("Starting the reveal slides");
	Reveal.initialize({ embedded: false });
}
