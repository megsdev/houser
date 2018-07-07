const initialState = {
    property_name: '',
    address: '',
    city: '',
    state: '',
    zipcode: 0,
    image_url: '',
    mortgage: '',
    rent: ''
}
const UPDATE_PROPERTY_NAME = "UPDATE_PROPERTY_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL"
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE"
const UPDATE_RENT = "UPDATE_RENT"
const CANCEL_BUTTON = "CANCEL"


function reducer( state = initialState, action ) {
    switch( action.type ) {

        case UPDATE_PROPERTY_NAME:
            return Object.assign( {}, state, {property_name: action.payload} )

        case UPDATE_ADDRESS:
            return Object.assign( {}, state, {address: action.payload} )

        case UPDATE_CITY:
            return Object.assign( {}, state, {city: action.payload} )

        case UPDATE_STATE:
            return Object.assign( {}, state, {state: action.payload} )

        case UPDATE_ZIPCODE:
            return Object.assign( {}, state, {zipcode: action.payload} )

        case UPDATE_IMAGE_URL:
            return Object.assign( {}, state, {image_url: action.payload} )

        case UPDATE_MORTGAGE:
            return Object.assign( {}, state, {mortgage: action.payload} )

        case UPDATE_RENT:
            return Object.assign( {}, state, {rent: action.payload} )
        
        case CANCEL_BUTTON: 
            return 
        
        default: return state

    }
}

export function updatePropertyName(property_name) {
    return {
        type: UPDATE_PROPERTY_NAME,
        payload: property_name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

export function updateImageUrl(image_url) {
    return {
        type: UPDATE_IMAGE_URL,
        payload: image_url
    }
}

export function updateMortgage(mortgage) {
    return {
        type: UPDATE_MORTGAGE,
        payload: mortgage
    }
}

export function updateRent(rent) {
    return {
        type: UPDATE_RENT,
        payload: rent
    }
}

export function cancelButton() {
    return {
        type: CANCEL_BUTTON,
        payload: initialState
    }
}

export default reducer