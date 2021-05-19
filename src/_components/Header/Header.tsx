import React from 'react';
import {CustomHeader} from './Header.style'
import {ReactComponent as Lugares} from './../../images/Lugares.svg';

export default function Header(){
    return(
        <CustomHeader>
            <Lugares></Lugares>
        </CustomHeader>
    )
}

