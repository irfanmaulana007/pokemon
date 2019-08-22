import { combineReducers } from 'redux'
import pokemonReducers from './pokemonReducers'

const rootReducer = combineReducers({
    
    pokemon: pokemonReducers,
  
})


export default rootReducer;