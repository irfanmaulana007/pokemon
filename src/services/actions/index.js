export const setPokemonList = (list) => {
	return {
		type: "SET_POKEMON_LIST",
		payload: list
	}
}

export const addPokemon = (pokemon) => {
	return {
		type: "ADD_POKEMON",
		payload: {
			name: pokemon.name,
			nickname: pokemon.nickname
		}
	}
}

export const releasePokemon = (nickname) => {
	return {
		type: "RELEASE_POKEMON",
		payload: nickname
	}
}

export const initSelectedPokemon = () => {
	return {
		type: "INIT_SELECTED_POKEMON"
	}
}

export const selectPokemon = (pokemon) => {
	return {
		type: "SELECT_POKEMON",
		payload: {
			name: pokemon.name,
			url: pokemon.url
		}
	}
}

export const setPokemonDetail = (detail) => {
	return {
		type: "SET_POKEMON_DETAIL",
		payload: detail
	}
}