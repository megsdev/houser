import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import '../../App.css'

import { updateMortgage, updateRent } from '../../ducks/reducer'


class StepThree extends Component {
    constructor() {
        super()
    
        this.state = {
            mortgage: '',
            rent: ''
        }

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
                <input className="input-box" onChange={ e => this.props.updateMortgage(e.target.value)} />

                <h2>Desired Monthly Rent</h2>
                <input className="input-box"  onChange={ e => this.props.updateRent(e.target.value)} />
                <div>
                    <Link to='/wizard/step2'><button className="navigation-button">Previous Step</button></Link>
                    <button className="green-button" onClick={ this.createListing}>Complete</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { mortgage, rent } = state

    return {
        mortgage,
        rent
    }
}

export default connect(mapStateToProps, {updateMortgage, updateRent})(StepThree)