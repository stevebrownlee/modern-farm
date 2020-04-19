const plants = []

export const addPlant = seed => {
    if (Array.isArray(seed)) {
        seed.forEach(s => plants.push(s))
    }
    else {
        plants.push(seed)
    }
}

export const usePlants = () => plants.slice()