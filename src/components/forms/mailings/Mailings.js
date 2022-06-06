import { useEffect, useState } from 'react';
import Modal from '../../modal/Modal';

import './mailings.scss';
import '../../../style/variables.scss';
import '../../../style/title.scss';


const Mailings = () => {

    const [modalActive, setModalActive] = useState(false);
    const [email, setEmail] = useState(''); 
    const [emailDirty, setEmailDitry] = useState(false); 
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError]);

    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email':
                setEmailDitry(true);
                break;
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    };

    const  handleSubmit = (e) => {
        e.preventDefault();
        setEmail('')
        console.log('Отправлена форма.');
    }

    return (
        <div className="mailing">
            <div className="mailing__wrapper">
                <div className='projects__descr'>
                    <h2 className='title title__mail'>Подпишитесь на нашу рассылку</h2>
                    <p className='subtitle subtitle__mail'>Полезные статьи, акции, новости - получите все это сейчас!</p>
                </div>
                <div className="mailing__form">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <input  value={email}
                                onBlur={e => blurHandler(e)}
                                onChange={e => emailHandler(e)}
                                type="text" 
                                name="email" 
                                placeholder='Ваш e-mail' 
                        />
                        <button className='button button__mail'
                                type='submit'
                                disabled={!formValid}
                                onClick={() => setModalActive(true)}>Registration</button>
                    </form>
                    
                </div>
                
                <div style={{marginTop: '15px'}}>
                    {emailDirty && emailError && <div style={{color: 'red'}}>{emailError}</div>}
                </div>                
                <div className='mailing__letter'>Мы не шлем спам, и передаем никому ваши данные.</div>
            </div>
            
            <Modal 
                active={modalActive} 
                setActive={setModalActive}>
                <button className='button button_mini'
                        onClick={() => setModalActive(false)}>X</button>
                <p style={{
                    textAlign: 'center'
                }}>Подписка оформлена</p>
            </Modal>
        </div>
        
    )
}

export default Mailings;