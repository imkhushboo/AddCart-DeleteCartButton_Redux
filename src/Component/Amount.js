import React from 'react'
import { useSelector } from 'react-redux'

const Amount = () => {
    const amount = useSelector(state => state.amount)
    return (
        <div>
            <h3>Your Amount: {amount}</h3>
        </div>
    )
}

export default Amount
