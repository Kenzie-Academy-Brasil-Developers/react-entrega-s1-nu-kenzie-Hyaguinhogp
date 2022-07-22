import './styles.css';

const HomePageHeader = ({ setIsLoggedIn }) => {
    return (
        <header className='header'>
            <div className='header-container'>
            <h2 className='header__logo'><span className='pink'>Nu</span> Kenzie</h2>
            <button
                id='header__button'
                onClick={(event) => {
                    event.preventDefault();
                    setIsLoggedIn(false);
                }}
            >Inicio</button>
            </div>
        </header>
    );
}

export default HomePageHeader;