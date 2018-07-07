import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../App.css'


export default class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
           houses: [] 
        }
    }

    getHouses = () => {
        axios({
            method: 'GET',
            url: 'http://localhost:4000/api/houses'
        }).then(response => {
            this.setState({ houses: response.data })
        })
    }

    componentDidMount = () => {
        this.getHouses()
    }

    deleteHouse = ( id ) => {
        console.log('ehhhhhr', id)
        axios({
            method: 'DELETE',
            url: 'http://localhost:4000/api/houses/' + id,
        }).then(response => {
            this.getHouses()
        })
    }

    render(){
        console.log('this is this.state.houses: ', this.state.houses)
        return(
            <div className="column-container">
                <div className="row-container">
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'><button className="green-button">Add New Property</button></Link>
                </div>
                <House houseList={ this.state.houses } deleteHouseFN={ this.deleteHouse } />
            </div>
        )
    }
}

