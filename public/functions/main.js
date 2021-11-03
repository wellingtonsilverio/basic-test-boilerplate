const templates = require('./templates')

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

  const onChangeSelect = () => {
    const sunValue = refSelectSun.options[refSelectSun.selectedIndex].id.toLowerCase()
    const waterValue = refSelectWater.options[refSelectWater.selectedIndex].id.toLowerCase()
    const petsValue = refSelectPets.options[refSelectPets.selectedIndex].id.toLowerCase()

    if (sunValue !== "" && waterValue !== "" && petsValue !== "") {
      fetch(`https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${sunValue}&water=${waterValue}&pets=${petsValue}`)
      .then(request => request.json())
      .then(populatePlants)
    }
  }

  refSelectSun.innerHTML += SUN.map(option => `<option id="${option}">${SUN_LABEL[option]}</option>`)
  refSelectWater.innerHTML += WATER.map(option => `<option id="${option}">${WATER_LABEL[option]}</option>`)
  refSelectPets.innerHTML += PETS.map(option => `<option id="${option}">${PETS_LABEL[option]}</option>`)

  refSelectSun.addEventListener('change', onChangeSelect)
  refSelectWater.addEventListener('change', onChangeSelect)
  refSelectPets.addEventListener('change', onChangeSelect)
}

const populatePlants = (data) => {
  const refPlantsWrapper = document.getElementById('plants')
  const refNoResults = document.getElementById('no-results')
  const refResults = document.getElementById('results')

  refNoResults.style = 'display: none'
  refResults.style = 'display: block'

  refPlantsWrapper.innerHTML = data.reduce((acc, plant) => {
    return acc + templates.generatePlant(plant.staff_favorite, plant.name, plant.sun, plant.water, plant.toxicity, plant.url, plant.price)
  }, '')

}
