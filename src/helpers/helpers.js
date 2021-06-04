const getIngredients = (data) => {
    // get all keys that have "StrIngreadiet in there name"
    const ing = Object.keys(data).filter( key => key.indexOf('strIngredient') === 0)
        .reduce((newData, key) => {
        newData[key] = data[key]
        return newData
        }, {})
    // get all keys that have strMeasure in there name
    const meas = Object.keys(data).filter( key => key.indexOf('strMeasure') === 0)
        .reduce((newData, key) => {
        newData[key] = data[key]
        return newData
        }, {})
 
    //convert the values of the object int an array
    const ingList = Object.values(ing)
    const measList = Object.values(meas)
 
    //transform the 2 arrays int one array with there values in to a string
    //and return an array
    const IngreadientAndMeasure = ingList.map((val, idx) => {
        if(val){
            return `${val}: ${measList[idx]}`
        }
        return null
    })
    return IngreadientAndMeasure
}
 
export default getIngredients;
