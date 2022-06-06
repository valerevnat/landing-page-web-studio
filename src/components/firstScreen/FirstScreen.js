import { useState } from 'react';

import Modal from '../modal/Modal';
import Carousel from '../carousel/Сarousel';

import './firstScreen.scss';
import '../../style/button.scss';

const FirstScreen = () => {
    const [modalActive, setModalActive] = useState(false);
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const hamburgerMenuHandler = () => {
        if(hamburgerMenu) {
            setHamburgerMenu(false)
        } else {
            setHamburgerMenu(true)
        }
    }

    const styleHamburgerMenuHandler = () => {
      if (hamburgerMenu && window.innerWidth >= '600') {
        return {display: 'flex'}}
        else if (hamburgerMenu && window.innerWidth < '600') {
          return {display: 'flex'}}
      console.log(window.innerWidth );
    } 

    const menu = [
        {
          href: '#',
          nameChapter: 'Главная'
        },
        {
          href: '#projects',
          nameChapter: 'Наши проекты'
        },
        {
          href: '#services',
          nameChapter: 'Услуги'
        },
        {
          href: '#news',
          nameChapter: 'Новости'
        },
        {
          href: '#footer-contacts',
          nameChapter: 'Контакты'
        }
    ]

    const itemMenu = menu.map((item, i) => {
        const { href, nameChapter, } = item;
        return (
          <li className="menu__list_item" 
              key={i}
              onClick={() => setHamburgerMenu(false)}>
            <a href={href} className="menu__list_link" >{nameChapter}</a>
          </li>
        )
    })

    return(
        <section className="promo">
            <header className={hamburgerMenu ? 'header header__click' : 'header'}>
                <div className="header__divider"></div>
                <nav>
                    <div className={hamburgerMenu  ? 'menu menu__click' : 'menu'}
                          style={styleHamburgerMenuHandler()}>
                        <ul className={hamburgerMenu ? 'menu__list menu__list_click' : 'menu__list'}>                        
                            {itemMenu}
                        </ul>
                    </div>
                </nav>
                <div className={hamburgerMenu ? 'header__hamburger header__hamburger_click' : 'header__hamburger'}
                     onClick={() => {hamburgerMenuHandler(); 
                                      console.log(hamburgerMenu);}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </header>

            <div className="promo__wrapper">
                <div className="promo__content">
                    <h1 className="promo__content_header">Передовая IT студия</h1>
                    <h2 className="promo__content_subheader">Мы создаем легкие решения сложных задач и проблем</h2>
                    <button data-modal="consultation" 
                            className="button button_main button_custom-btn btn-2"
                            onClick={() => setModalActive(true)}>Наши проекты</button>
                </div>
            </div>

            <Modal 
                active={modalActive} 
                setActive={setModalActive}>
                <button className='button button_mini'
                        onClick={() => setModalActive(false)}>X</button>
                <p  className='title'
                    style={{
                      textAlign: 'center'
                }}>Наши проекты</p>
                <Carousel />
            </Modal>
        </section>
    )
}


export default FirstScreen;
