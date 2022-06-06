import data from '../../data';
import iconService from '../../resources/icons/services_icon.png';

import './companyServices.scss';
import '../../style/title.scss';
import { useState } from 'react';

const CompanyServices = () => {
    const [loaded, setLoaded] = useState(false)

    const {services, servicesLoaded} = data;
    const service = services.map((item, i) => {
        const {title, descr, altIcon} = item;
        return (
                <div className="services__list-item" key={i}>
                    <div className="services__list-circle-outside">
                        <div className="services__list-circle-inside">
                            <img src={iconService} alt={altIcon} />
                        </div>
                    </div>
                    <div className='services__list-item-desc'>
                        <div className="title title__mini">
                            {title}
                        </div>
                        <div className="subtitle subtitle__mini">
                            {descr}
                        </div>
                    </div>   
                </div>
            
        )
    })

    const loadedServices = servicesLoaded.map((item, i) => {
        const {title, descr, altIcon} = item;
        return (
                <div className="services__list-item" key={i} >
                    <div className="services__list-circle-outside">
                        <div className="services__list-circle-inside">
                            <img src={iconService} alt={altIcon} />
                        </div>
                    </div>
                    <div className='services__list-item-desc'>
                        <div className="title title__mini">
                            {title}
                        </div>
                        <div className="subtitle subtitle__mini">
                            {descr}
                        </div>
                    </div>   
                </div>
            
        )
    })

    return (
        <section className="services" id='services'>
            <div className="container">
                <div className="services__wrapper">
                    
                    <div className="services__descr">
                        <h2 className="title">Мы создаем мобильные приложения для крупных корпораций</h2>
                        <p className="subtitle"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ab autem non ducimus totam suscipit facere exercitationem sint incidunt nulla quas adipisci obcaecati voluptatibus voluptate dolore asperiores consectetur. nulla quas adipisci obcaecati voluptatibus voluptate dolore asperiores consectetur.nulla quas adipisci obcaecati voluptatibus voluptate dolore asperiores consectetur. </p>
                    </div>
                    <div className="services__list">
                        {service}
                    </div>
                    <div className={!loaded ? 'services__list services__list_loaded' : 'services__list'}>
                        {loadedServices}
                    </div>

                    <button className="button button_main button_custom-btn btn-1"
                            onClick={() => setLoaded(true)}>Все услуги</button>
                </div>
            </div>
        </section>
    )
}

export default CompanyServices;



    