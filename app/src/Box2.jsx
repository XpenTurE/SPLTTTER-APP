import React from 'react'

const Box2 = ({handleReset,totalPerPerson,tipPerPerson}) => {
  return (
    <div className='box box2'>
            <div className='combine'>
              <div className='tipMain'>
                <div className='tipText'>
                  <p className='tipAmount'>Tip Amount</p>
                  <p className='person person1' style={{ marginLeft: "-45px" }}>/Person</p>
                </div>
                <div className='totalAmount tipAmountNumber'>
                  ${tipPerPerson}
                </div>
              </div>
              <div className='tipMain'>
                <div className='tipText'>
                  <p className='tipAmount'>Total</p>
                  <p className='person'> /Person</p>
                </div>
                <div className='totalAmount tipAmountNumber'>
                  ${totalPerPerson}
                </div>
              </div>
            </div>

            <center>
              <div className='reset' onClick={handleReset}>
                RESET
              </div>
            </center>
          </div>
  )
}

export default Box2
