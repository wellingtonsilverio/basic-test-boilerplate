const NoSunImage = require('../images/icons/no-sun.svg')
const LowSunImage = require('../images/icons/low-sun.svg')
const HighSunImage = require('../images/icons/high-sun.svg')
const OneDropImage = require('../images/icons/1-drop.svg')
const TwoDropImage = require('../images/icons/2-drops.svg')
const TreeDropImage = require('../images/icons/3-drops.svg')
const PetDropImage = require('../images/icons/pet.svg')
const ToxicDropImage = require('../images/icons/toxic.svg')

module.exports = {
  generatePlant: (staffFavorite, name, sun, water, toxicity, imageUrl, price) => `
    <div ${staffFavorite ? 'id="highlight"' : ''} class="Result__Plants__Content">
      ${staffFavorite ? `<div class="Result__Plants__Content__Label">
      ✨ Staff favorite
    </div>` : ''}
      <img src="${imageUrl}" alt="${name}">
      <div class="Result__Plants__Content__Details">
      <h3>${name}</h3>
        <div class="Result__Plants__Content__Details__Info">
          <span class="Result__Plants__Content__Details__Info__Price">$${price}</span>
          <span class="Result__Plants__Content__Details__Info__Categories">
          <img src="${toxicity ? ToxicDropImage : PetDropImage}" alt="${toxicity ? "Toxic" : "Pet Friend"}">
          <img src="${getSunImage()}" alt="${getSunLabel()}">
          <img src="${getDropsImage()}" alt="${getDropsLabel()}">
          </span>
        </div>
      </div>
    </div>
  `
}

const getDropsImage = (water) => {
  if (water === "rarely") return OneDropImage
  if (water === "daily") return TwoDropImage
  return TreeDropImage
}
const getSunImage = (water) => {
  if (water === "high") return HighSunImage
  if (water === "low") return LowSunImage
  return NoSunImage
}

const getDropsLabel = (water) => {
  if (water === "rarely") return "Rarely drop"
  if (water === "daily") return "Daily drop"
  return "Regularly drop"
}
const getSunLabel = (water) => {
  if (water === "high") return "High sun"
  if (water === "low") return "Low sun"
  return "No sun"
}