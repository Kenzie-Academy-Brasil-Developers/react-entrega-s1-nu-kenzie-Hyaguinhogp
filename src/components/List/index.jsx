import { useState } from 'react';
import Card from '../Card';
import './styles.css';

const List = ({ listTransactions, setListTransactions }) => {

    let [actualFilter, setActualFilter] = useState('todos');
    let [buttonAllActive, setButtonAllActive] = useState(true);
    let [buttonEntryActive, setButtonEntryActive] = useState(false);
    let [buttonExpenseActive, setButtonExpenseActive] = useState(false);
    const buttonActive = 'button-active';

    function buttonsController(button) {

    }

    return (
        <div className='list-container'>
            <div className='list-content'>
                <div className='list-header'>
                    <h2 className="list-header__title">Resumo financeiro</h2>
                    <div className='list-filters'>
                        <button 
                            id="filter-all" 
                            className={`filter-button ${buttonAllActive && buttonActive}`}
                            onClick={() => {
                                setButtonAllActive(true);
                                setButtonEntryActive(false);
                                setButtonExpenseActive(false);
                                setActualFilter('todos');
                            }}
                            >Todos</button>
                        <button 
                            id="filter-entries" 
                            className={`filter-button ${buttonEntryActive && buttonActive}`}
                            onClick={() => {
                                setButtonAllActive(false);
                                setButtonEntryActive(true);
                                setButtonExpenseActive(false);
                                setActualFilter('Entrada');
                            }}
                            >Entradas</button>
                        <button 
                            id="filter-expenses" 
                            className={`filter-button ${buttonExpenseActive && buttonActive}`}
                            onClick={() => {
                                setButtonAllActive(false);
                                setButtonEntryActive(false);
                                setButtonExpenseActive(true);
                                setActualFilter('Despesa');
                            }}
                            >Despesas</button>
                    </div>
                </div>

                <ul id='list-transactions'>
                    {
                        listTransactions.map((transaction, id) => {
                            return <Card transaction={transaction} setListTransactions={setListTransactions} actualFilter={actualFilter} key={id} />
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default List;