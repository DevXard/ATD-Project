import axios from 'axios';

const BASE_URL = "www.themealdb.com/api/json/v1/1/";

class Api {
    
    static async getByMainIngrediant(data){
        const res = await axios.get(`${BASE_URL}filter.php?i=${data.ingreadient}`)
        return res
    }
}

export default Api;