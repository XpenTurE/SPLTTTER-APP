import React, { useState, useEffect } from 'react';
import Box1 from './Box1';
import Box2 from './Box2';

const Splitter = () => {
  const defaultBill = 0.0;
  const defaultTip = 0;
  const defaultPeople = '1';

  const [bill, setBill] = useState(defaultBill);
  const [tip, setTip] = useState(defaultTip);
  const [people, setPeople] = useState(defaultPeople);
  const [totalBillWithTip, setTotalBillWithTip] = useState(defaultBill);
  const [tipPerPerson, setTipPerPerson] = useState(0.0);
  const [totalPerPerson, setTotalPerPerson] = useState(0.0);
  const [zero, setZero] = useState(false);

  useEffect(() => {
    calculateTotalAmount();
  }, [bill, tip, people]);

  function calculateTotalAmount() {
    const tipPercentage = tip === 'custom' ? parseFloat(prompt('Enter custom tip percentage')) : tip;
    const tipAmountValue = (bill * tipPercentage) / 100;
    const totalBillWithTipValue = bill + tipAmountValue;
    const tipPerPersonValue = tipAmountValue / parseInt(people);
    const totalPerPersonValue = totalBillWithTipValue / parseInt(people);

    setTotalBillWithTip(totalBillWithTipValue.toFixed(2));
    setTipPerPerson(tipPerPersonValue.toFixed(2));
    setTotalPerPerson(totalPerPersonValue.toFixed(2));
  }

  function handlePeople(e) {
    if (e.target.value < 1) {
      setPeople(defaultPeople);
      setZero(true);
      return;
    }
    setPeople(e.target.value);
    setZero(false);
  }

  function handleBill(e) {

    if (e.target.value < 1) {
      setBill(defaultBill);
      return;
    }

    setBill(parseFloat(e.target.value))

  }

  function handleCustomTip(e) {
    if (parseInt(e.target.value) < 1) {

      setTip(defaultTip)
      return;
    }
    // console.log("reached")
    setTip(e.target.value)
  }

  function handleReset() {
    setBill(defaultBill);
    setTip(defaultTip);
    setPeople(defaultPeople);
    setTotalBillWithTip(defaultBill);
    setTipPerPerson(0.0);
    setTotalPerPerson(0.0);
    var arr = document.getElementsByTagName("input")
    for (var i = 0; i < arr.length; i++) {
      arr[i].value = ""
    }

  }

  return (
    <div className='container'>
      <center>
        <div className='title'>
          <h1>SPLT<br></br>TTER</h1>
        </div>
      </center>
      <center>
        <div className='content'>
        <Box1 bill={bill} handleBill = {handleBill} tip={tip} setTip={setTip} handleCustomTip={handleCustomTip} zero={zero} handlePeople={handlePeople}    />
          <Box2 totalPerPerson={totalPerPerson} handleReset={handleReset} tipPerPerson={tipPerPerson}/>
        </div>
      </center>
    </div>
  );
};

export default Splitter;
