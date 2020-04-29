import { createPlan } from "../src/scripts/plan.js"
import { plantSeeds } from "../src/scripts/tractor.js";
import { usePlants } from "../src/scripts/field.js";
import { createCorn } from "../src/scripts/seeds/corn.js";
import { createPotato } from "../src/scripts/seeds/potato.js";
import { createWheat } from "../src/scripts/seeds/wheat.js";
import { createSunflower } from "../src/scripts/seeds/sunflower.js";
import { createSoybean } from "../src/scripts/seeds/soybean.js";
import { createAsparagus } from "../src/scripts/seeds/asparagus.js";
import { harvestPlants } from "../src/scripts/harvester.js";

const plan = [
    ["Corn", "Potato"],
    ["Asparagus", "Soybean"],
    ["Sunflower", "Wheat"],
]

let plantedSeeds

beforeAll(() => {
    plantSeeds(plan)
    plantedSeeds = usePlants()
})

describe('Sowing the fields with seeds', () => {

    test('Corn has correct properties', () => {
        expect(createCorn())
            .toMatchObject([
                { type: "Corn", height: 180, output: 6 },
                { type: "Corn", height: 180, output: 6 }
            ])
    })

    test('Potato has correct properties', () => {
        expect(createPotato())
            .toMatchObject({ type: "Potato", height: 32, output: 2 })
    })

    test('Asparagus has correct properties', () => {
        expect(createAsparagus())
            .toMatchObject({ type: "Asparagus", height: 24, output: 4 })
    })

    test('Soybean has correct properties', () => {
        expect(createSoybean())
            .toMatchObject({ type: "Soybean", height: 20, output: 4 })
    })

    test('Sunflower has correct properties', () => {
        expect(createSunflower())
            .toMatchObject({ type: "Sunflower", height: 380, output: 3 })
    })

    test('Wheat has correct properties', () => {
        expect(createWheat())
            .toMatchObject({ type: "Wheat", height: 230, output: 6 })
    })

    test('Correct type and number of seeds sown', () => {
        expect(plantedSeeds)
            .toMatchObject(
                [
                    { type: "Corn", height: 180, output: 6 },
                    { type: "Corn", height: 180, output: 6 },
                    { type: "Potato", height: 32, output: 2 },
                    { type: "Asparagus", height: 24, output: 4 },
                    { type: "Soybean", height: 20, output: 4 },
                    { type: "Sunflower", height: 380, output: 3 },
                    { type: "Wheat", height: 230, output: 6 }
                ]
            )
    })
})

describe('Harvesting the grown plants', () => {
    let harvestedPlants

    beforeAll(() => {
        harvestedPlants = harvestPlants(plantedSeeds)
    })

    test('Harvested correct number of plants', () => {
        expect(harvestedPlants.length).toEqual(25)
    })
})


// [
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Corn', height: 180, output: 6},
//     { type: 'Potato', height: 32, output: 2},
//     { type: 'Potato', height: 32, output: 2},
//     { type: 'Asparagus', height: 24, output: 4},
//     { type: 'Asparagus', height: 24, output: 4},
//     { type: 'Asparagus', height: 24, output: 4},
//     { type: 'Asparagus', height: 24, output: 4},
//     { type: 'Soybean', height: 20, output: 4},
//     { type: 'Soybean', height: 20, output: 4},
//     { type: 'Soybean', height: 20, output: 4},
//     { type: 'Soybean', height: 20, output: 4},
//     { type: 'Sunflower', height: 380, output: 3},
//     { type: 'Sunflower', height: 380, output: 3},
//     { type: 'Sunflower', height: 380, output: 3},
//     { type: 'Wheat', height: 230, output: 6},
//     { type: 'Wheat', height: 230, output: 6},
//     { type: 'Wheat', height: 230, output: 6},
//     { type: 'Wheat', height: 230, output: 6},
//     { type: 'Wheat', height: 230, output: 6},
//     { type: 'Wheat', height: 230, output: 6}
// ]

// const puppeteer = require("puppeteer")

// test('Patients are rendered to DOM', async () => {
//     let doug = testPerson("Doug", 65, 102)
//     let mary = testPerson("Mary", 37, 100)
//     let candace = testPerson("Candace", 42, 103)

//     doug = diganose(doug, 4)
//     mary = diganose(mary, 2)
//     candace = diganose(candace, 2)

//     let browser = await puppeteer.launch({
//         headless: true
//     })
//     const page = await browser.newPage();
//     await page.goto('http://localhost:8080');
//     await page.waitForSelector('.patients')

//     let section = await page.$eval('.patients', _ => _.innerHTML)

//     section = section.replace(/\n/g, "")
//     section = section.replace(/\s{2,}/g, "")

//     try {
//         expect(section).toBe(`<section class="patient" id="patient--1"><h2 class="patient__name">Doug</h2><div class="patient__properties"><p>Age: 65</p><p>Temperature: 102</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: true</div></section><section class="patient" id="patient--2"><h2 class="patient__name">Mary</h2><div class="patient__properties"><p>Age: 37</p><p>Temperature: 100</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section><section class="patient" id="patient--3"><h2 class="patient__name">Candace</h2><div class="patient__properties"><p>Age: 42</p><p>Temperature: 103</p><p>Diagnosed: true</p></div><div class="patient_diagnosis">Infected: false</div></section>`);
//     }
//     catch (error) {
//         throw error
//     }
//     finally {
//         browser.close()
//     }

// })
