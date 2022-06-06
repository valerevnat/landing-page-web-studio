import Slider from "react-slick";

import ourProjects from '../../resources/img/our_projects.jpg';

import './carousel.scss';


const Сarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 3
    };

    if (window.innerWidth <= '1200' && window.innerWidth > '991' ) {
        settings.slidesToShow = 3
    } else if (window.innerWidth <= '991' && window.innerWidth > '601'){
        settings.slidesToShow = 2;
        settings.slidesToScroll = 2;
    } else if (window.innerWidth <= '600') {
        settings.slidesToShow = 1;
        settings.slidesToScroll = 1
    } else {
        settings.slidesToShow = 4;
        settings.slidesToScroll = 3
    }


    return (
        <Slider {...settings}>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
            <div>
                <img src={ourProjects} alt='project№' />
            </div>
        </Slider>
    );

}

export default Сarousel;