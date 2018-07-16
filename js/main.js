function computeYIQ() {
	let bgColor = document.querySelector("body").style.background;
	let rgbRegex = /rgba?\((\d+), ?(\d+), ?(\d+)(?:, ([0-9\.]+))?\)/gi;
	let matches = rgbRegex.exec(bgColor);
	if (matches && matches.length >= 4) {
		let r = matches[1];
		let g = matches[2];
		let b = matches[3];
		let a = !Number.isNaN(parseFloat(matches[4])) ? parseFloat(matches[4]) : 1;
		let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
		return yiq >= 128 || a < 0.5 ? "black" : "white";
	}
	return "black";
}

function updateColor() {
  let colorInput = document.querySelector("#color");
  document.querySelector("body").style.background = colorInput.value;
  let yiqRes = computeYIQ();
  document.querySelector("#color").style.color = yiqRes;
  document.querySelector("#color").style.borderBottomColor = yiqRes;
  document.location.hash = document.querySelector("#color").value;
}

function updateHash() {
	if (window.location.hash) {
	  document.querySelector("#color").value = window.location.hash;
	  updateColor();
	}
}

updateHash();
updateColor();

window.addEventListener("hashchange", updateHash, false);