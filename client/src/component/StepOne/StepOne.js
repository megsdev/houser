import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import '../../App.css'



export default class Wizard extends Component {
    constructor() {
        super()
    
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }

    }

    updatePropertyName = ( text ) => {
        this.setState({ property_name: text })
    }

    updateAddress = ( text ) => {
        this.setState({ address: text })
    }

    updateCity = ( text ) => {
        this.setState({ city: text })
    }

    updateState = ( text ) => {
        this.setState({ state: text })
    }

    updateZip = ( text ) => {
        this.setState({ zipcode: text })
    }

    render(){
        return(
            <div className="column-container">
                <div className="row-container">
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className="cancel-button" >Cancel</button></Link>
                </div>
                <h2>Property Name</h2>
                <input className="input-box"  onChange={ e => this.updatePropertyName(e.target.value)} />
                <h2>Address</h2>
                <input className="input-box"  onChange={ e => this.updateAddress(e.target.value)} />
                <h2>City</h2>
                <input className="input-box"  onChange={ e => this.updateCity(e.target.value)} />
                <h2>State</h2>
                <input className="input-box"  onChange={ e => this.updateState(e.target.value)} />
                <h2>Zip</h2>
                <input className="input-box"  placeholder="0" onChange={ e => this.updateZip(e.target.value)} />

                <Link to='/wizard/step2'><button className="navigation-button">Next Step</button></Link>
            </div>
        )
    }
}
