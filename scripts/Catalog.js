const Plant = plant => `<section class="plant">${plant.icon}</section>`

export const Catalog = plants => {
    document.querySelector(".container").innerHTML = plants.map(Plant).join("")
}