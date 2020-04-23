import React from 'react';
import '../scss/_card.scss';

// For selecting departments
function Card({ data, image, setActiveView }) {
    
    function changeView(entry){
        setActiveView(entry);
    }
    
    return (
        <div onClick={()=>{changeView(data.header)}} className='card'>
            <div className="card-details">
                <img className='card-details-icon' src={image}></img>
                <h1 className='card-details-title'>{data.header}</h1>
            </div>
        </div>
    );
}

export default Card; 