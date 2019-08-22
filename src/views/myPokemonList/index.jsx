import React, { Component } from 'react'

import store from './../../services/store'
import { releasePokemon } from './../../services/actions'

class index extends Component {
    release = (nickname) => {
        store.dispatch(releasePokemon(nickname))
    }

    render () {
        const state = store.getState().pokemon
        return (
            <div>
                <h4>Pokemon List</h4>
                <br/>
                <table className="table table-hover">
                    <tbody>
                        {state.myPokemon.map((value, key) => 
                            <tr key={key}>
                                <td>{value.name}</td>
                                <td>{value.nickname}</td>
                                <td className="block"><button className="btn btn-danger btn-sm" onClick={() => this.release(value.nickname)}>Release</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default index