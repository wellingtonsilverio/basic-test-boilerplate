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
          <img src="${sun === "high" ? HighSunImage : sun === "low" ? LowSunImage : NoSunImage }" alt="${sun === "high" ? "High sun" : sun === "low" ? "Low sun" : "No sun" }">
          <img src="${water === "rarely" ? TreeDropImage : water === "daily" ? TwoDropImage : OneDropImage}" alt="${water === "rarely" ? "Rarely drop" : water === "daily" ? "Daily drop" : "Rarely drop"}">
          </span>
        </div>
      </div>
    </div>
  `
}