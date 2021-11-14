/*
var el = document.createElement('div'); 
document.body.appendChild(el); 
eruda.init({ 
    container: el, 
    tool: ['console', 'elements','info','snippets'], 
    useShadowDom: true 
});
*/
const d = document,
	controls = d.getElementById("controls"),
	itemsSlider = d.querySelectorAll(".testimonials .wrap-slider .slider .item"),
	slider = d.querySelector(".testimonials .wrap-slider .slider"),
	wrapSlider = d.querySelector(".testimonials .wrap-slider");
cssNumSlider = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--numSlider'));
console.log(slider.style)


window.addEventListener('resize', () => {
	let btnsSlider = controls.querySelectorAll(".control");
	
	if (btnsSlider.length != itemsSlider.length / parseInt(getComputedStyle(document.documentElement).getPropertyValue('--numSlider')) ) {
	cssNumSlider = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--numSlider'));
	addControls()
	}
})
addControls()
controls.addEventListener("click", (e) => {
	let target = e.target;
	widthSlider = slider.offsetWidth;
	if (target.localName == "button") {
		controls.querySelectorAll(".control").forEach((elem) => {
			if (target != elem) {
				elem.classList.remove("active")
			}
			target.classList.add("active")

		})
		slider.style.transform = `translateX(-${widthSlider * target.id}px)`
	}

})


function addControls() {
	
	let templateControls= "";
	for (let i = 0; i < itemsSlider.length / cssNumSlider; i++) {
		if (i == 0) {
			templateControls += `<button class="control active" id="${i}"></button>`;
		} else {
			templateControls += `<button class="control" id="${i}"></button>`;
		}
//console.log(i)
	}
//console.log("----")
	controls.innerHTML = templateControls;
	templateControls= "";
}
