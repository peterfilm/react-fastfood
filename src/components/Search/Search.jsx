import './search.scss'
import { useEffect, useState } from 'react'

const Search = ({setFilteredMeals, allMeals}) => {

    const [seachInput, setSearchInput] = useState('')

    useEffect(() => {
        filterMeals()
        //eslint-disable-next-line
    }, [seachInput])

    const filterMeals = () => {
        if (!seachInput) {
            setFilteredMeals(allMeals)
        } else {
            const reg = new RegExp(seachInput, 'gi')
            const newMeals = allMeals.filter(item => item.strMeal.match(reg))
            setFilteredMeals(newMeals)
        }
    }

    const handleSeach = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <>
        <div className="search__Area">
            
              <input 
                    className='search__input'
                    type="search"
                    placeholder="Search you Meal"
                    value={seachInput}
                    onChange={handleSeach}/>
          </div>
        </>
    )
}
export default Search