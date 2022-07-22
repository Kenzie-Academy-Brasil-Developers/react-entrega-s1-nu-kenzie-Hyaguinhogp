import {ReactComponent as Image} from '../../assets/images/image.svg';
import './styles.css';

const InitialPage = ({setIsLoggedIn}) => {
    return (
        <div className='initial-page__container'>
            <div className='initial-page__card'>
                <Image className='initial-page__image' />
                <div className='initial-page__text'>
                    <h3 className='initial-page__logo'><span className='pink'>Nu</span> Kenzie</h3>
                    <h2 className='initial-page__info'>Centralize o controle das suas finanças</h2>
                    <p className='initial-page__p'>de forma rápida e segura</p>
                    <button 
                        className='initial-page__button' 
                        onClick={(event) =>{
                            event.preventDefault();
                            setIsLoggedIn('true');
                        }}>Iniciar</button>
                </div>
            </div>
        </div>
    );
}

export default InitialPage;