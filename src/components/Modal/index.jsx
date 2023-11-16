import React, { useEffect } from "react";

import Portal from './Portal'

import { Overlay, Dialog } from "./styles";

const Modal = ({ children, open, onClose}) => {
    useEffect(() => {
        const onEsc = (e) => {
            if(e.keyCode === 27) onClose();
        }

        window.addEventListener('keydown', onEsc);

        //removendo a escuta do evento
        return () => {
            window.removeEventListener('keydown', onEsc);
        }
    }, [onClose]);

    const onOverlayClick = () => {
        onClose();
    }

    const onDialogClick = (e) => {
        e.stopPropagation()
    }


    return (
        <Portal>
            { open && 
                <Overlay onClick={onOverlayClick}>
                    <Dialog onClick={onDialogClick}>
                        {children}
                    </Dialog>
                </Overlay>
            }
        </Portal>
    );
};

export default Modal;