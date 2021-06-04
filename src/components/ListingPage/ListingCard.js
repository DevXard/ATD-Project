import { Link } from 'react-router-dom';
 
const ListingCard = ({data}) => {

    return (
        <div className="bg-gray-100 rounded-xl p-8 m-4 md:p-0 w-60 h-72 shadow-lg border border-gray-200">
            <Link to={`details/${data.idMeal}`}>
            <img className="w-full p-2 h-44 rounded-xl" 
            src={`${data.strMealThumb}`} alt="Generic"/>
            </Link>
            <h1 className="text-center text-base md:text-xl font-bold p-2">{data.strMeal}</h1>
            
            
            
        </div>
    )
}
 
export default ListingCard;
 
