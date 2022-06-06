import Сarousel from '../carousel/Сarousel';
import './ourProjects.scss';


const OurProjects = () => {
    
    return (
        <section className='projects' id='projects'>
            <div className='container'>
                <div className='projects__wrapper'>
                    <div className='projects__descr'>
                        <h2 className='title'>Наши проекты</h2>
                        <p className='subtitle'> Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века.</p>
                    </div>
                    <div className='projects__carousel'>
                        <Сarousel />
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default OurProjects;

