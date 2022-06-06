import data from '../../data';

import aboutIconProject from '../../resources/icons/aboutIcon.png';
import aboutImg from '../../resources/img/about_us.png';

import './aboutUs.scss';

const AboutUs = () => {
    const {aboutUs} = data;
    const projects = aboutUs.map((item, i) => {
        const {title, descrNumber} = item;
        return (
            <div className='about__projects-item' key={i}>
                <img src={aboutIconProject} alt='web' />
                <div className='title title__normal title__normal-projects'> {descrNumber} </div>
                <div className='subtitle subtitle-projects'>
                    {title}
                </div>
            </div>
        )
    })
    return (
        <section className='about' id='news'>
            <div className='container'>
                <div className='about__wrapper'>
                    <div className='about__content'>
                        <div className='about__content_descr'>
                            <h2 className='title title__left'>Высокие стандарты разработки</h2>
                            <p className='subtitle subtitle__left'> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.  стандартной "рыбой" для текстов на латинице с начала XVI века. </p>
                            <span className='about__content_descr-link'>Подробнее о компании</span>
                        </div>
                        <div className='about__content_photo'>
                            <img src={aboutImg} alt="aboutUs" />
                        </div>
                    </div>
                    <div className='about__wrapper_divider'></div>
                    
                    <div className='about__projects'>
                        {projects}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;