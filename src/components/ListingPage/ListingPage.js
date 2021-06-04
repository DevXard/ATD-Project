import {useSelector} from 'react-redux';
 
import {recepieSelector} from '../../store/slices/recepieSlice'
 
import ListingCard from './ListingCard';
 
const ListingPage = () => {
 
    const {recepies} = useSelector(recepieSelector)
 
    return(
        <div className="flex justify-center ">
            <div className=" w-11/12 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 justify-items-center  shadow-xl rounded-xl scroll-hide border border-gray-200">
            {recepies.map(data => <ListingCard key={data.idMeal} data={data} />)}
            </div> 
        </div>
    )
}
 
export default ListingPage;
