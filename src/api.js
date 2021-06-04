import axios from 'axios';
 
const BASE_URL = process.env.REACT_APP_BASE_URL ||  "https://www.themealdb.com/api/json/v1/1/";
 
class Api {
    
    //Get Recepie by main ingreadient
    static async getByMainIngrediant(data){
        const res = await axios.get(`${BASE_URL}filter.php?i=${data.ingreadient}`)
        return res
    }
    
    // Get recepie by ID
    static async getById(id){
        const res = await axios.get(`${BASE_URL}lookup.php?i=${id}`)
        return res
    }
}
 
export default Api;
