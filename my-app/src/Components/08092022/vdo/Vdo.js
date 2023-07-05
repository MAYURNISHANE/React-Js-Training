import React from 'react';

const Vdo = (props) => {
  return (
    <div>
      <video controls className={`vdo vdo-${props.variation}`} source src={props.vdo} />   
    </div>
  )
}

export default Vdo;