const getRandomArray = (arreglo) => {
    const indexRandom = Math.floor(Math.random() * arreglo.length)
    return arreglo[indexRandom]
}
export default getRandomArray