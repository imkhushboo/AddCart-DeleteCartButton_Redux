import React from 'react'
import { useDispatch } from 'react-redux';
import { actioncreator } from '../state/index';
import { bindActionCreators } from 'redux';



const Shop = () => {
    const dispatch = useDispatch();
    const { depositMoney, withdrawMoney } = bindActionCreators(actioncreator, dispatch);
    return (
        <div>
            <button type="button" className="btn btn-primary mx-2" onClick={() => { depositMoney(100) }}>+</button>
            <button type="button" className="btn btn-primary mx-2" onClick={() => { withdrawMoney(100) }}> -</button>
        </div >
    )
}

export default Shop
