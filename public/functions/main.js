const SUN = [
  "NO",
  "LOW",
  "HIGH"
]
const WATER = [
  "REGULARLY",
  "DAILY",
  "RARELY"
]
const PETS = [
  "TRUE",
  "FALSE"
]
const SUN_LABEL = {
  "NO": "No",
  "LOW": "Low",
  "HIGH": "High"
}
const WATER_LABEL = {
  "REGULARLY": "Regularly",
  "DAILY": "Daily",
  "RARELY": "Rarely"
}
const PETS_LABEL = {
  "TRUE": "Yes",
  "FALSE": "No"
}

window.onload = () => {
  const refSelectSun = document.getElementById('select-sunlight')
  const refSelectWater = document.getElementById('select-wateringcan')
  const refSelectPets = document.getElementById('select-pets')

  refSelectSun.innerHTML += SUN.map(option => `<option id="${option}">${SUN_LABEL[option]}</option>`)
  refSelectWater.innerHTML += WATER.map(option => `<option id="${option}">${WATER_LABEL[option]}</option>`)
  refSelectPets.innerHTML += PETS.map(option => `<option id="${option}">${PETS_LABEL[option]}</option>`)

}