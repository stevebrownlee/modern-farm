import { createPlan } from "./plan.js";
import { plantSeeds } from "./tractor.js";
import { usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";

const plan = createPlan()
plantSeeds(plan)
const plantedSeeds = usePlants()
const allOutput = harvestPlants(plantedSeeds)

console.log(plan)
console.log(plantedSeeds)
console.log(allOutput)
