
// Capture name and post it when you load the website.

let userName = prompt("Please enter your name for a better experience?");
const h3 = document.createElement("h3")
if (userName !== null) {
    h3.textContent = `Welcome ${userName} to my personal Website`
    document.querySelector("body").appendChild(h3);
} else {
    h3.textContent = `Welcome  to my personal Website`
    document.querySelector("body").appendChild(h3);
}
