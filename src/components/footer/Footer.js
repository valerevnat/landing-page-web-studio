import message from '../../resources/icons/footer/message.svg';
import tel from '../../resources/icons/footer/tel.svg';
import location from '../../resources/icons/footer/location.svg';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="lists">                
                <div className="lists__container">
                    <div className='lists__contacts'>
                        <div className="lists__title">Контактная информация</div>
                        <ul className='lists__contacts_item' id='footer-contacts'>
                            <li className='email'>
                                <img src={message} alt='mail'/>
                                <a href='mailto:test@test.ru'> test@test.ru </a>
                            </li>
                            <li className='tel'>
                                <img src={tel} alt='tel'/>
                                <a href='tel:+77775556699'> +8 777 555 66 99 </a>
                            </li>
                            <li className='location'>
                                <img src={location} alt='location'/>
                                <a href='geo:55.648819893704044,37.3227085'> Москва, Бульвар Ленина 33 </a>
                            </li>
                        </ul>
                    </div>
                    <div className='lists__links'>
                        <div className="lists__title">Основные ссылки</div>
                        <ul className='lists__links_item'>
                            <li>
                                <a href='#'>Главная</a>
                            </li>
                            <li>
                                <a href='#projects'>Наши проекты</a>
                            </li>
                            <li>
                                <a href='#services'>Наши услуги</a>
                            </li>
                            <li>
                                <a href='#'>Контакты</a>
                            </li>
                        </ul>
                    </div>
                    <div className='lists__projects'>
                        <div className="lists__title">Наши проекты</div>
                        <ul className='lists__projects_item'>
                            <li>
                                <a href='#'>РосНано</a>
                            </li>
                            <li>
                                <a href='#'>Сколково</a>
                            </li>
                            <li>
                                <a href='#'>Проект “Восток”</a>
                            </li>
                            <li>
                                <a href='#'>ТЭЦ Калининграда</a>
                            </li>
                        </ul>
                    </div>
                    <div className='lists__networks'>
                        <div className="lists__title">Социальные сети</div>
                        <ul className='lists__networks-item'>
                            <li>
                                <a href='#'>VK.com</a>
                            </li>
                            <li>
                                <a href='#'>Instagram</a>
                            </li>
                            <li>
                                <a href='#'>Facebook</a>
                            </li>
                            <li>
                                <a href='#'>Twitter</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;