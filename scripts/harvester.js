export const harvestPlants = (allPlants) => {
    const foodToSell = []

    allPlants.forEach(plant => {
        let output = plant.output

        if (plant.type === "Corn") {
            output /= 2
        }

        for (let i = 0; i < output; i++) {
            foodToSell.push(plant)
        }
    })
    return foodToSell
}
