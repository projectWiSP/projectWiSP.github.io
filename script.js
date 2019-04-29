const SLIDES_MAP = {
	0: "WiSP_conceptLogo.jpg",
	1: "1.PNG",
	2: "2.jpg",
	3: "3.png",
	4: "4.png",
	5: "5.png",
	6: "6.jpg",
	7: "7.jpg",
	8: "8.jpg",
	9: "9.jpg",
	10: "10.jpg",
	11: "11.jpg",
	12: "12.jpg",
	13: "13.jpg",
	14: "14.PNG",
}
function numberToSrc(number){
	console.log(SLIDES_MAP[number])
	document.getElementById("slideshow").src = SLIDES_MAP[number]
}
var currentSlide = 0
var maxslides = 14

function lastslide() {
	if(currentSlide!=0) {
		currentSlide -= 1
		numberToSrc(currentSlide)
		console.log(currentSlide)
	} else {
		currentSlide = maxslides
		numberToSrc(currentSlide)
		console.log(currentSlide)
	}
}

function nextslide() {
	if(currentSlide!=maxslides) {
		currentSlide += 1
		numberToSrc(currentSlide)
		console.log(currentSlide)
	} else {
		currentSlide = 0
		numberToSrc(currentSlide)
		console.log(currentSlide)
	}
}

function modal_3dm() {
	document.getElementById("modal_3dm").style.display = "block"
	document.getElementById("body").style.overflow = "hidden"
	createPlugin()
}

function modal_close() {
	document.getElementById("modal_3dm").style.display = "none"
	document.getElementById("body").style.overflow = "auto"
}

function createPlugin() {

}

function loadBook() {
	var parent = getElementById("bookFrame")
	parent.innerHTML = ""
	var frame document.createElement("iframe")
	frame.src="book/book.html"
	frame.width="960"
	frame.height="600"
}

function loadCheck() {
	var parent = getElementById("checkFrame")
	parent.innerHTML = ""
	var frame document.createElement("iframe")
	frame.src="check/check.html"
	frame.width="960"
	frame.height="600"
}