import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

import { updatePropertyName, updateAddress, updateCity, updateState, updateZipcode, } from '../../ducks/reducer'

import '../../App.css'



class StepOne extends Component {

    render(){
        console.log('props', this.props)
        return(
            <div className="column-container">
                <div className="row-container">
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className="cancel-button" >Cancel</button></Link>
                </div>
                <h2>Property Name</h2>
                <input onChange={ e => this.props.updatePropertyName(e.target.value)} />
                <h2>Address</h2>
                <input onChange={ e => this.props.updateAddress(e.target.value)} />
                <h2>City</h2>
                <input onChange={ e => this.props.updateCity(e.target.value)} />
                <h2>State</h2>
                <input onChange={ e => this.props.updateState(e.target.value)} />
                <h2>Zip</h2>
                <input placeholder="0" onChange={ e => this.props.updateZipcode(e.target.value)} />

                <Link to='/wizard/step2'><button className="navigation-button">Next Step</button></Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { property_name, address, city, state: st, zipcode } = state

    return {
        property_name,
        address,
        city,
        st,
        zipcode
    }
}

export default connect(mapStateToProps, {updatePropertyName, updateAddress, updateCity, updateState, updateZipcode})(StepOne)