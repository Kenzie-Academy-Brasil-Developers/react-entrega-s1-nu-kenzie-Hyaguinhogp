import './styles.css';
import '../HomePage/styles.css';

const Form = ({ listTransactions, setListTransactions }) => {

    let newTransaction = { description: '', value: 0, typeValue: '' };

    return (
        <form className='transaction-form default-component-card' action=''>
            <div className='form__input-container'>
                <label htmlFor='description'>Descrição</label>
                <input
                    className='form__input'
                    type='text'
                    name='description'
                    id='input-description'
                    placeholder='Digite aqui sua descrição'
                    onChange={(event) => {
                        newTransaction.description = event.target.value;
                    }}
                />
                <small className='small-tip'>Ex: Compra de roupas</small>
            </div>

            <div className='form-two-inputs'>
                <div className='form__input-container'>
                    <label htmlFor='value'>Valor</label>
                    <input
                        className='form__input'
                        type='number'
                        name='value'
                        id='input-value'
                        placeholder='0'
                        onChange={(event) => {
                            newTransaction.value = parseFloat(event.target.value);
                        }}
                    />
                </div>

                <div className='form__input-container'>
                    <label htmlFor='type-value'>Tipo de valor</label>
                    <select
                        className='form__input'
                        name="type-value"
                        id="input-type-value"
                        onChange={(event) => {
                            newTransaction.typeValue = event.target.value;
                        }}
                        >
                        <option value="Entrada">Entrada</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>
            </div>

            <button
                className='form__button'
                onClick={(event) => {
                    event.preventDefault();
                    setListTransactions(() => [...listTransactions, newTransaction]);
                }}
            >Inserir Valor</button>
        </form>
    );
}

export default Form;