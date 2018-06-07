function updateColor() {
  console.log("Update");
  let colorInput = document.querySelector("#color");
  document.querySelector("body").style.background = colorInput.value;
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