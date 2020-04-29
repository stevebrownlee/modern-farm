const Plant = plant => `<section class="plant">${plant.type}</section>`

export const Catalog = plants => {
    document.querySelector(".container").innerHTML = plants.map(Plant).join("")
}