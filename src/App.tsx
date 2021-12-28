import React from 'react';
import './App.scss';
import FormComponent from "./components/FormComponent";

function App() {
    const banner = require('./img/banner.png');
    const back = require('./img/Stroke 3.png');

    return (
        <div className="App">
            <div className="mobileHeader">
                <img className="App_backIcon" src={back} alt="back"/>
            </div>
            <FormComponent/>
            <div className='App_items'>
                <div className='App_text'>
                    <p>Представляем</p>
                    <h1>Все лучшее впереди</h1>
                </div>
                <img className='App_items_img' src={String(banner)} alt="banner"/>
            </div>
        </div>
    );
}

export default App;
