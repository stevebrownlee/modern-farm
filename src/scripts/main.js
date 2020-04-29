import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./Catalog.js"

const plan = createPlan()
console.log(plan)

plantSeeds(plan)

const plantedSeeds = usePlants()
console.log(plantedSeeds)

const harvestedPlants = harvestPlants(plantedSeeds)
console.log(harvestedPlants)

Catalog(harvestedPlants)