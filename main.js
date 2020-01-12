const toggleBtn = document.querySelector(".slider");
const yearly = Array.from(document.querySelectorAll(".yearly"));
const monthly = Array.from(document.querySelectorAll(".monthly"));
const chkBox = document.querySelector("input[type=checkbox]");
console.log(chkBox);
chkBox.focus();
let isMonthly = true;

//const sliderBtn = document.querySelector(":before");
let elePos = window.getComputedStyle(
	document.querySelector('.slider'), ':before'
).getPropertyValue('transform')
console.log(elePos);
//console.log(sliderBtn);

console.log(toggleBtn);
console.log(yearly);
function toggleItems() {
    
    if (isMonthly) {
        monthly.forEach(element => {
            console.log(element);
            element.style.visibility = "hidden";
        })
        yearly.forEach(element => {
            console.log(element);
            element.style.visibility = "visible";
        })
        isMonthly = false;
    } else {
        monthly.forEach(element => {
            element.style.visibility = "visible";
        })
        yearly.forEach(element => {
            element.style.visibility = "hidden";
        })
        isMonthly = true;
    }

}

toggleBtn.addEventListener("click", () => {
    console.log("button clicked");
    // toggleBtn.style.transform = "translateX(26px)";
    toggleItems();
})

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    
    console.log(keyName);
    if (keyName === " ") {       
        console.log("Yes enter");
        toggleItems();
    }
})