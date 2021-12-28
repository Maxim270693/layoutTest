import React, {ChangeEvent, useState} from 'react';
// @ts-ignore
import search from '../img/search.png';

const FormComponent = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)

    return (
        <form className="form">
            <div className='wrapper_search'>
                <div className='wrapper_search-item'>
                    <input type="text"
                           value={value}
                           onChange={onChangeHandler}
                           className='search'
                           required
                    />
                    <label className="form-label">Начать поиск</label>
                    <img className='form-icon' src={search} alt="search"/>
                    <span className='form_search'>Найти</span>
                </div>
            </div>
        </form>
    );
};

export default FormComponent;