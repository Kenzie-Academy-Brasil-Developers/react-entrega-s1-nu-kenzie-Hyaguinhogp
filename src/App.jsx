import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import InitialPage from './components/InitialPage';

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {
        isLoggedIn ?
          (<HomePage setIsLoggedIn={setIsLoggedIn} />)
        :
          (<InitialPage setIsLoggedIn={setIsLoggedIn} />)
      }
    </>
  );
}

export default App;
