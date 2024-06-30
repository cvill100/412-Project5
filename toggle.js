function toggleStyle() {
	ele = document.getElementById("stylelink");
	filename = ele.getAttribute("href");
	
	if (filename == "style1.css") {
		newfilename = "style2.css";
	} else {
		newfilename = "style1.css";
	}
	
	ele.setAttribute("href",newfilename);
	localStorage.setItem("currStyle", newfilename);	
}

window.onload = function() {
	filename = localStorage.getItem("currStyle");
	
	if (filename == null) {
		filename = "style1.css";
	}
	
	ele = document.getElementById("stylelink");
	ele.setAttribute("href", filename);
}