import React from 'react';

const Photo = (props) => {
  return (
    <div>
         <img className={`img img-${props.variation}`} src={props.photo} alt="" />
    </div>
  );
}

export default Photo;