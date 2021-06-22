import {useSelector} from 'react-redux';
 
import {recepieSelector} from '../../store/slices/recepieSlice'
 
import ListingCard from './ListingCard';
 
const ListingPage = () => {
 
    const {recepies, notFound} = useSelector(recepieSelector)
 
    
    if(notFound){
        return (
            <div className="flex justify-center">Sorry! recepie not Found</div>
        )
    }
 
    if(recepies.length < 1){
        return (
            <div className="flex justify-center ">
                <h1 className="text-2xl font-medium text center text-gray-600">
                Search for meals by your favorite Ingredients <br /> </h1>
            </div>
        )
    }
 
    return(
        <div className="flex justify-center ">
            <div className=" w-11/12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center  shadow-xl rounded-xl scroll-hide border border-gray-200">
            {recepies.map(data => <ListingCard key={data.idMeal} data={data} />)}
            </div> 
        </div>
    )
}
 
export default ListingPage;