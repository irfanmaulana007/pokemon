import _ from 'lodash'

const initialState = {
    pokemonList: [],
	myPokemon: [],
	pokemonSelected: {
		name: '',
		url: '',
		detail: {
			types: [],
			sprites: {
				front_default: ''
			}
		}
	}
}

export default function pokemonReducers(state = initialState, action) {
	switch(action.type) {
		case "SET_POKEMON_LIST":
			return {
				...state,
				pokemonList: action.payload
			}

		case "ADD_POKEMON": 
			return {
				...state,
				myPokemon: [
                    ...state.myPokemon,
                    action.payload
                ]
			}

		case "RELEASE_POKEMON":
			const releasedPokemon =	_.filter(state.myPokemon, (o) => {
				return o.nickname !== action.payload
			})

			return {
				...state,
				myPokemon: releasedPokemon
			}

		case "INIT_SELECTED_POKEMON":
			return {
				...state,
				pokemonSelected: {
					name: '',
					url: '',
					detail: { types: [] }
				}
			}

		case "SELECT_POKEMON":
			return {
				...state,
				pokemonSelected: { ...action.payload }
			}

		case "SET_POKEMON_DETAIL":
			return {
				...state,
				pokemonSelected: {
					...state.pokemonSelected,
					detail: action.payload
				}
			}

		default: return state
	}
}