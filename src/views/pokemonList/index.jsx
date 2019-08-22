import React, { Component } from 'react'
import _ from 'lodash'

import store from './../../services/store'
import { setPokemonList, initSelectedPokemon, selectPokemon } from './../../services/actions'
import { pokemonService } from './../../services/api.service'

class index extends Component {
    getPokemonList = () => {
        pokemonService.list()
        .then((res) => {
            const list = _.sortBy(res.data.results, 'name')
            store.dispatch(setPokemonList(list))
        })
    }
    
    detail = (e) => {
        store.dispatch(selectPokemon(e))

        let link = 'detail/' + e.name
        this.props.history.push(link)
    }
    
    componentDidMount () {
        store.dispatch(initSelectedPokemon())
        this.getPokemonList()
    }

    render () {
        const state = store.getState().pokemon
        return (
            <div>
                <h4>Pokemon List</h4>
                <br/>
                <table className="table table-hover">
                    <tbody>
                        {state.pokemonList.map((value, key) => 
                            <tr key={key} onClick={() => this.detail(value)}>
                                <td>{value.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default index