import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
 
import {recepieSelector, getById} from '../../store/slices/recepieSlice';
import IngreadientAndMeasure from '../../helpers/helpers';
 
const DetailsPage = () => {
 
    const { id } = useParams();
    const dispatch = useDispatch();
    const {recepie} = useSelector(recepieSelector)
 
    useEffect(() => {
        dispatch(getById(id))
    },[dispatch, id])
 
    
 
    const ing = IngreadientAndMeasure(recepie)
    
    
    return (
        <div className='m-8 px-8' >
        <div className="flex shadow-lg ">
        <div className="flex-none w-48 relative">
          <img src={recepie.strMealThumb} alt="" className="absolute inset-0 w-full h-2/5 object-cover p-3 border border-gray-100"/>
        </div>
        <form  className="flex-auto p-6">
          <div className="flex flex-wrap">
            <h1 className="flex-auto text-base font-medium text-gray-500">
              Recepie Area:  
              <span className="font-semibold ml-1 text-gray-700">
               {recepie.strArea}
              </span>
            </h1>
            <h1 className="flex-auto text-2xl font-semibold">
              {recepie.strMeal}
            </h1>
            <div className="text-xl font-semibold text-gray-500">
              <a href={recepie.strYoutube}>YouTube</a>
            </div>
            <div className="w-full flex-none text-sm font-medium text-gray-500 mt-2">
              Categry: {recepie.strCategory}
              
            </div>
            
          </div>
          <div className="grid grid-cols-3 gap-4 ">
           <div className="text-xl font-bold">
            Ingrediants:
            <div className="text-base font-semibold">
            {ing.map( (data, idx) => <p key={idx}>{data}</p>)}
            </div>
            
           </div>
            <div className="col-span-2">
                <h1 className="text-xl font-bold">Instructions</h1>
                <p>{recepie.strInstructions}</p>
            </div>
          </div>
            
        </form>
      </div>
      <div >
      
      </div>
 
      
        </div>
    )
}
 
export default DetailsPage;