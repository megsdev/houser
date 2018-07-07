import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import {connect} from 'react-redux'

import { updateImageUrl } from '../../ducks/reducer'



class StepTwo extends Component {
    // constructor() {
    //     super()
    
    //     this.state = {
    //         image_url: '',
    //     }

    // }

    // updateImageURL = ( text ) => {
    //     this.setState({ image_url: text })
    // }


    render(){
        return(
            <div className="column-container">
                <div className="row-container">
                    <h1>Add New Listing</h1>
                    <Link to='/'><button className="cancel-button" >Cancel</button></Link>
                </div>
                <h2>Image URL</h2>
                <input className="input-box"  onChange={ e => this.props.updateImageUrl(e.target.value)} />
                <div>
                    <Link to='/wizard/step1'><button className="navigation-button">Previous Step</button></Link>
                    <Link to='/wizard/step3'><button className="navigation-button">Next Step</button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { image_url } = state

    return {
        image_url
    }
}

export default connect(mapStateToProps, {updateImageUrl})(StepTwo)