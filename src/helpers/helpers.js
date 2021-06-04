const getIngredients = (data) => {
    const ing = Object.keys(data).filter( key => key.indexOf('strIngredient') === 0)
        .reduce((newData, key) => {
        newData[key] = data[key]
        return newData
        }, {})
 
    const meas = Object.keys(data).filter( key => key.indexOf('strMeasure') === 0)
        .reduce((newData, key) => {
        newData[key] = data[key]
        return newData
        }, {})
 
 
    const ingList = Object.values(ing)
    const measList = Object.values(meas)
 
    const IngreadientAndMeasure = ingList.map((val, idx) => {
        if(val){
            return `${val}: ${measList[idx]}`
        }
        return null
    })
    return IngreadientAndMeasure
}
 
export default getIngredients;
