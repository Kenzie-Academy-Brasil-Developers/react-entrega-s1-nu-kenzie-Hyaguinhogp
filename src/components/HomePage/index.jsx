import { useState } from 'react';
import Form from '../Form';
import HomePageHeader from '../HomePageHeader';
import List from '../List';
import TotalMoney from '../TotalMoney';
import './styles.css';

const HomePage = ({ setIsLoggedIn }) => {

    const [ listTransactions, setListTransactions] = useState([]);

    return (
        <div className='home-page__container'>
            <HomePageHeader setIsLoggedIn={setIsLoggedIn} />
            <div className='principal-container'>
                <div className='principal-container__content'>
                    <div className='content__left'>
                        <Form listTransactions={listTransactions} setListTransactions={setListTransactions} />
                        <TotalMoney listTransactions={listTransactions} />
                    </div>
                    <div className='content__right'>
                        <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;