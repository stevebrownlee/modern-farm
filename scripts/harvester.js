import { usePlants } from "./field.js"

export const harvestPlants = () => {
    const allPlants = usePlants()
    const foodToSell = []

    allPlants.forEach(plant => {
        for (let i = 0; i < plant.output; i++) {
            foodToSell.push(plant)
        }
    })
    return foodToSell
}