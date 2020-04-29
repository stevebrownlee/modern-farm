import { addPlant } from "./field.js"
import { createSoybean } from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"

export const plantSeeds = (plan) => {
    plan.forEach(row => {
        row.forEach(plantType => {
            switch (plantType) {
                case "Soybean":
                    addPlant(createSoybean())
                    break
                case "Corn":
                    addPlant(createCorn())
                    break
                case "Potato":
                    addPlant(createPotato())
                    break
                case "Sunflower":
                    addPlant(createSunflower())
                    break
                case "Wheat":
                    addPlant(createWheat())
                    break
                case "Asparagus":
                    addPlant(createAsparagus())
                    break
                default:
                    break
            }
        })
    })
}