import { PropsWithChildren, useEffect } from 'react'
import ReactDOM from 'react-dom';
import './Modal.css';

type Props = {
    isOpen: boolean
    onClose: CallableFunction;
    overflow?: string;
}

const modalRoot = document.getElementById("modal-root");
const Modal = (props: PropsWithChildren<Props>) => {
    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [props.isOpen])
    const handleClose = () => {
        props.onClose(false);
    }

    return ReactDOM.createPortal(
        <div className="overlay" style={{ display: props.isOpen ? 'flex' : 'none', overflow: props.overflow ?? 'static' }}>
            <div className="close" onClick={handleClose}>
                <i className="fa fa-times fa-2x" />
            </div>
            {props.children}
        </div>,
        modalRoot!
    );
}

export default Modal