
import './modal.scss';

const Modal = ({active, setActive, children}) => {

    return (
        <div className={active ? 'modal modal__active' : 'modal'}
             onClick={() => setActive(false)}>
            <div className={active ? 'modal__content modal__content_active' : 'modal__content'}
                 onClick={e => e.stopPropagation()}>
                 {children}
            </div>
        </div>
    )
}

export default Modal;