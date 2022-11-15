let prefersLightMode = true;

const container = document.getElementById("container")
const lightModeBtn = document.getElementById("light-mode-btn")
const darkModeBtn = document.getElementById("dark-mode-btn")
const lightModeSwitch = document.getElementById("light-mode-switch")
const darkModeSwitch = document.getElementById("dark-mode-switch")

function switchModes() {
  if (prefersLightMode) {
    lightModeOn()
  } else {
    darkModeOn()
  }
}

switchModes()

darkModeBtn.addEventListener("click", function() {
  prefersLightMode = false
  switchModes()
})

lightModeBtn.addEventListener("click", function() {
prefersLightMode = true
switchModes()
})

function lightModeOn() {
    lightModeSwitch.classList.add("light-mode-switch")
    lightModeBtn.classList.add("light-mode-btn")
    
    document.body.style.backgroundColor = "#e9edc9"
    container.classList.remove("dark-mode-container-background")
    darkModeSwitch.classList.remove("dark-mode-switch")
    darkModeBtn.classList.remove("dark-mode-btn")
}

function darkModeOn() {
    document.body.style.backgroundColor = "#242423"
    container.classList.add("dark-mode-container-background")
    darkModeSwitch.classList.add("dark-mode-switch")
    darkModeBtn.classList.add("dark-mode-btn")
    
    lightModeSwitch.classList.remove("light-mode-switch")
    lightModeBtn.classList.remove("light-mode-btn")
}

