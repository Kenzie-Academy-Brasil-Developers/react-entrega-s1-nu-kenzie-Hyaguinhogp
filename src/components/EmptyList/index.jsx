import './styles.css';

const EmptyList = () => {
    return (
        <div className='empty-list__container'>
            <h1 className='empty-list__title'>Você ainda não possui nenhum lançamento</h1>

            <div className='empty-card'>
                <div className='empty-text long'></div>
                <div className='empty-text short'></div>
            </div>

            <div className='empty-card'>
                <div className='empty-text long'></div>
                <div className='empty-text short'></div>
            </div>

            <div className='empty-card'>
                <div className='empty-text long'></div>
                <div className='empty-text short'></div>
            </div>
        </div>
    )
}

export default EmptyList;