import React from 'react'

const House = (props) => {
    console.log(props)
    return (
        <div>
            {props.houseList.map( (house) => (
                <div className="house-container">
                    <img key={ house.id } src={ house.image_url } alt=' ' />
                    <h3>Address: {house.address}</h3>
                    <h3>Property Name: {house.property_name}</h3>
                    <h3>City: {house.city}</h3>
                    <h3>State: {house.state}</h3>
                    <h3>Zip: {house.zipcode}</h3>
                    <h3>Monthly Mortgage: </h3>
                    <h3>Desired Rent: </h3>
                    <button onClick={ () => props.deleteHouseFN(house.id)} >Delete</button>
                </div>
            ))}
        </div> 
    )
  }

  export default House
