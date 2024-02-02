import React from 'react'
import Tip from './Tip'

const Box1 = ({handlePeople,zero,handleCustomTip,setTip,tip,handleBill,bill }) => {
  return (
    <div className='box box1'>
            <label htmlFor='bill'>Bill</label>
            <input type='number' className='bill-input' name='bill' style={{ border: `${bill > 0 ? "1px solid #26C2AD" : "none"}` }} placeholder='0' id='bill' onChange={handleBill} />
            <label htmlFor=''>Select Tip%</label>
            <div className='tip'>
              <Tip value="5" tip={tip} setTip={setTip} />
              <Tip value="10" tip={tip} setTip={setTip}/>
              <Tip value="15" tip={tip} setTip={setTip}/>
              <Tip value="25" tip={tip} setTip={setTip}/>
              <Tip value="50" tip={tip} setTip={setTip}/>
              <div className='tip-custom'>
                <input type="number" name="tip-custom" id="tipCustom" placeholder='CUSTOM' style={{ border: `${tip > 0 ? "1px solid #26C2AD" : "none"}` }} onChange={handleCustomTip} />
              </div>
            </div>
            <div className='flex-2'>
              <label htmlFor='people'>Number of People</label>
              <label style={{ display: `${zero ? "block" : "none"}`, color: "#B48372", textAlign: 'right', marginTop: "16px" }} >Can't be less than one</label>
            </div>
            <input type='number' name='people' id='people' className='people-input' style={{ border: `${zero ? "1px solid #B48372" : "none"}`, borderRadius: "" }} placeholder='1' onChange={handlePeople} />
          </div>
  )
}

export default Box1
