import {API_URL} from './config'

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories.php');
    return await response.json()
}

const getRandomMeal = async () => {
    const response = await fetch(API_URL + 'random.php')
    return await response.json()
}

const getAllMeals = async (cat) => {
    const response = await fetch(API_URL + `filter.php?c=${cat}`)
    return await response.json()
}

const getOneMeal = async (id) => {
    const response = await fetch(API_URL + `lookup.php?i=${id}`)
    return await response.json()
}

const searchMeal = async (name) => {
    const result = await fetch(API_URL + `search.php?s=${name}`)
    return await result.json()
}

const getByArea = async (area) => {
    const response = await fetch(API_URL + `filter.php?a=${area}`)
    return await response.json()
}

export {getAllCategories, getRandomMeal, getAllMeals, getOneMeal, searchMeal, getByArea}