import React from 'react';
import './App.css';
import ProfilPhoto from './profile/ProfilPhoto';
import FullName from './profile/FullName';
import Adress from './profile/Adress';

function App() {
  return (
    <div className=''>
        <ProfilPhoto />
        <FullName />
        <Adress />
    </div>
  );
}

export default App;