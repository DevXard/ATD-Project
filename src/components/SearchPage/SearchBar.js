import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getByIngredient, recepieSelector} from '../../store/slices/recepieSlice';

const SearchBar = () => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        ingreadient: ''
    })

    
    function handleChange(e){

        const {name, value} = e.target;

        setFormData(data => ({...data, [name]: value}) )
    }

    function handleSubmit(e){
        e.preventDefault();

        dispatch(getByIngredient(formData))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="ingreadient"
                value={formData.ingreadient}
                onChange={handleChange}
                type="text"
                placeholder="Search by ingreadient"
                 />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;