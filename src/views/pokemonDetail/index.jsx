import React, { Component } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import _ from 'lodash'

// Bootstrap Component
import Modal from 'react-bootstrap/Modal'

import store from './../../services/store'
import { setPokemonDetail, addPokemon } from './../../services/actions'
import { pokemonService } from './../../services/api.service'

import imgLoading from './../../assets/images/loading.gif'
import imgPokeball from './../../assets/images/pokeball.png'
import './styles.css'


class index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            type: [],
            catch: '',
            loading: false,
            showModal: false,
            nickname : '',
            img: imgLoading
        }
    }

    getPokemonDetail = () => {
        const url = store.getState().pokemon.pokemonSelected.url
        if (url !== '') {
            pokemonService.detail(url)
            .then((res) => {
                store.dispatch(setPokemonDetail(res.data))

                const type = _
                    .chain(res.data.types)
                    .map((o) => {
                        return o.type.name
                    })
                    .value()
                this.setState({
                    type: _.join(type, ', '),
                    img: res.data.sprites.front_default
                })
            })
        }
    }

    catchPokemon = () => {
        const successRate = 50 //50%
        const random = _.random(0, 100)
        let status = ''
        let img = this.state.img
        
        if (random < successRate) {
            img = imgPokeball
            status = 'success'
        } else {
            status = 'missed'
        }
        
        this.setState({ loading: true, catch: '...' })
        setTimeout(() => {
            this.setState({
                loading: false, catch: status,
                img: img
            })
        }, 1000)
    }

    addToList = () => {
        store.dispatch(addPokemon({
            name: store.getState().pokemon.pokemonSelected.name,
            nickname: this.state.nickname
        }))

        this.handleCloseModal()
    }

	// Hide modal
	handleCloseModal = () => {
		this.setState({ showModal: false })
	}

	// Show modal
	handleShowModal = () => {
		this.setState({ showModal: true },
        () => {
            setTimeout(()=>{this.input && this.input.focus()}, 1); // Autofocus form after open modal
        })
    }
    
    handleNickname = (e) => {
        this.setState({ nickname: e.target.value })
    }

	// Enter key function after fill new table field
	handleKeyPress = (e) => {
		if(e.key === 'Enter'){
		    this.addToList()
		}
	}

    componentDidMount () {
        this.getPokemonDetail()
    }

    render () {
        const pokemon = store.getState().pokemon.pokemonSelected
	    if (pokemon.name === "") {
	       return <Redirect to='/pokemon/list'/>;
		}
        return (
            <div>
                <h4>Pokemon Detail</h4>
                <ul className="breadcrumb">
                    <li><NavLink to="/pokemon/list">Pokemon List</NavLink></li>
                    <li>{pokemon.name}</li>
                </ul>
                <div className="card">
                    <div className="card-body">
                        <h6 className="text-center text-capitalize"><b>{pokemon.name}</b></h6>
                        <h6 className="text-center small">
                            ({ this.state.type })
                        </h6>
                        <br/>
                        <div className={this.state.catch === 'missed' ? 'text-right' : 'text-center'}>
                            <img src={this.state.img} alt=""/>
                        </div>
                        <br/>
                        <h5 className="text-center text-uppercase"><b>{this.state.catch}</b></h5>
                        <center>
                            { this.state.catch === 'success' &&
                                <button className="btn bg-theme" onClick={this.handleShowModal}>Add to My List</button>
                            }
                        </center>
                    </div>
                </div>
                <br/>
                <button className="btn bg-theme btn-block" onClick={this.catchPokemon} disabled={this.state.catch === 'success'}>
                    Catch
                    { this.state.loading && <i className="fa fa-circle-o-notch fa-spin ml-1"></i> }
                </button>

				
				{/* Modal */}
				<Modal show={this.state.showModal} onHide={this.handleCloseModal} className="small">
		        	<Modal.Header closeButton>
		        		<Modal.Title>Add to My List</Modal.Title>
		        	</Modal.Header>
		        	<Modal.Body>
		        		<input type="text" className="form-control" placeholder="Nickname" onChange={this.handleNickname} onKeyPress={this.handleKeyPress} ref={(input) => { this.input = input; }}/>
		        	</Modal.Body>
		        	<Modal.Footer>
		        		<button className="btn btn-secondary" onClick={this.handleCloseModal}>Close</button>
		        		<button className="btn btn-primary" onClick={this.addToList}>Submit</button>
		        	</Modal.Footer>
		        </Modal>
            </div>
        )
    }
}

export default index