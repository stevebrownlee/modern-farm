const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]

const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

export const createPlan = () => {
    const plan = []

    for (let index = 0; index < 4; index++) {
        const row = []
        for (let j = 0; j < 10; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan
}
