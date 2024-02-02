import React from 'react'

const Tip = ({value,tip,setTip}) => {
    return (
        <>
            <div className={`tips ${tip === parseInt(value) ? 'active-tip' : ''}`} onClick={() => setTip(parseInt(value))}>
                {value}%
            </div>
        </>
        
    )
}

export default Tip
