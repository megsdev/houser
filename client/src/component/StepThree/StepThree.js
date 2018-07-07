import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../../App.css'



export default class Wizard extends Component {
    constructor() {
        super()
    
        this.state = {
            mortgage: '',
            rent: ''
        }

    }

    updateMortgage = ( text ) => {
        this.setState({ mortgage: text })
    }

    updateRent = ( text ) => {
        this.setState({ rent: text })
    }

    createListing = () => {
        axios({
            method: 'POST',
            url: 'http://localhost:4000/api/houses',
            data: this.state
        }).then(() => {
            this.props.history.push('/')
        })
    }


    render(){
        return(
            <div className="column-container">
                <div className="row-container">
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className="cancel-button" >Cancel</button></Link>
                </div>
                <h3>Recommended Rent: $0</h3>
                <h2>Monthly Mortgage Amount</h2>
                <input className="input-box" onChange={ e => this.updateMortgage(e.target.value)} />

                <h2>Desired Monthly Rent</h2>
                <input className="input-box"  onChange={ e => this.updateRent(e.target.value)} />
                <div>
                    <Link to='/wizard/step2'><button className="navigation-button">Previous Step</button></Link>
                    <button className="green-button" onClick={ this.createListing}>Complete</button>
                </div>
            </div>
        )
    }
}
