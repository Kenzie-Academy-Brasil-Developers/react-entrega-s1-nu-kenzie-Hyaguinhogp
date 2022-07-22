import './styles.css';
import '../HomePage/styles.css';

const TotalMoney = ({ listTransactions }) => {

    let totalMoney = listTransactions !== [] ? listTransactions.reduce((old, current) => {
        let value = parseFloat(current.value);
        if(current.typeValue === 'Despesa') return old - value;
        return old + value;
    }, 0) : 0;

    return (
        <div className='total-money__container default-component-card'>
            <div className='value-container'>
                <h2 className='value-container__text'>Valor Total:</h2>
                <h2 className='value-container__value pink'>$ {totalMoney}</h2>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    );
}

export default TotalMoney;