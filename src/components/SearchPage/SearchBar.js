import {useState} from 'react';
import {useDispatch} from 'react-redux';
 
import {getByIngredient} from '../../store/slices/recepieSlice';
 
const SearchBar = () => {
 
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        ingreadient: ''
    })
 
    function handleChange(e){
 
        const {name, value} = e.target;
 
        setFormData(data => ({...data, [name]: value}) )
    }
 
    async function handleSubmit(e){
        e.preventDefault();
 
        dispatch(getByIngredient(formData))
    }
    return (
        <div className="p-8 mb-5 flex justify-center">
            <form className="bg-white w-10/12 flex items-center rounded-full shadow-xl border border-gray-100"
             onSubmit={handleSubmit}>
                <input 
                className="rounded-l-full w-full py-4 px-6 leading-tight focus:outline-none"
                name="ingreadient"
                value={formData.ingreadient}
                onChange={handleChange}
                type="text"
                placeholder="Search by ingreadient"
                 />
                 <div className="p-4">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center text-sm" >Search</button>
                 </div>
            </form>
        </div>
    )
}
 
export default SearchBar;