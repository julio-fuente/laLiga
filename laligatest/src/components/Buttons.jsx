import React from 'react'
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import Proptype from 'prop-types';

//import '../assets/styles/buttons.css'

const Buttons = ({ desc, type, clickHandler }) => {

    return (
        <Button color={type}onClick={clickHandler}>
            {desc}
        </Button>
    )
}
 Buttons.prototype = {
    desc: Proptype.string.isRequired,
    type: Proptype.string,
    clickHandler: Proptype.func.isRequired
} 

export default Buttons