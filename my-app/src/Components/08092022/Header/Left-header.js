import React from 'react';
import Input from '../Input/Input';
import Photo from '../Photo/Photo';
import Logo from '../imgs/logo1.png';


const Left_header = () => {
    return (
        <div>
            <div className='header-left'>
                <Photo variation="logo" photo={Logo} />
                <span><Input />
                   
                </span>
            </div>
        </div>
    )
}

export default Left_header;