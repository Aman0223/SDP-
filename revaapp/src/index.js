import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Header from './components/header';
import reportWebVitals from './reportWebVitals';
import ContactCard from './components/Contact/Contact';
import MyClass from './components/DClass';
import Counter from './components/counter/counter';
import ControlledForm from './components/counter/form';
import Homepage from './components/Contact/home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header/>
    <ContactCard/>
    <MyClass/>
    <Counter/>
    <ControlledForm/>
    <Homepage/>
    
  </React.StrictMode>
);


reportWebVitals();
