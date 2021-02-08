import React from 'react'
import { Button, Modal } from '@material-ui/core';
import styled from 'styled-components';
import Proptype from 'prop-types';

const ModalLogin = (openModal) => {
    const { open, setOpen } = React.useState(openModal)
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
<Button color='primary'>Cancelar</Button>
        </Modal>
    );
}

export default ModalLogin