import { FaTrash } from 'react-icons/fa';
import './styles.css';

const Card = ({ transaction, setListTransactions, actualFilter }) => {

    let show = transaction.typeValue === actualFilter || actualFilter === 'todos';

    return (
        <>
        {show &&      
            <li className={`transaction-card ${transaction.typeValue}`}>
                <div className='transaction-card__left'>
                    <h2 className='transaction-card__description'>{transaction.description}</h2>
                    <small className='transaction-card__value-type'>{transaction.typeValue}</small>
                </div>

                <div className='transaction-card__right'>
                    <p className="transaction-card__value">R$ {transaction.value}</p>
                    <button
                        className='transaction-card__delete-button'
                        onClick={(event) => {
                            event.preventDefault();
                            setListTransactions((oldTransactions) => {
                                return oldTransactions.filter((old) => old !== transaction);
                            })
                        }}
                    > <FaTrash /> </button>
                </div>
            </li>
        }
        </>



    );
}

export default Card;