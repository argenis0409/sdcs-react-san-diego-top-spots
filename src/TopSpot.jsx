import React from 'react';

export default props => (

    <div className='name well'>
        <h4>{props.name}</h4>
        <p>{props.description}</p>
        <a className='btn btn-primary' target='_blank' href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}` }>Open In Google Maps</a>
    </div>

);