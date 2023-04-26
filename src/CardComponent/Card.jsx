import React from 'react';

export default function Card(props) {
  return (
    <>
    <div className='card'>
         <img src={props.card_img} alt="card_img" className='card_image'/>
         <div className='card_right'>
            <div className='card_top_inline'>
                     <img src="/src/images/placeholder.png" alt="placeholder" className='card_placeholder' />
                    <h6> {props.location}</h6>    
                     <a href={props.link} target='blank'>View on Google Maps</a>       
            </div>         
            <h1 className='card_heading'>{props.title}</h1>
            <p className='card_date'>{props.date}</p>
            <p className='card_descr'>{props.description}</p>        
         </div>     
    </div>
   
    </>
    
  )
}
