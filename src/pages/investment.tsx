import Header from "@/components/Header";
import React from "react";
import { MouseEvent } from 'react';
import Button from '@/components/Button';
import Modal from "@/components/Modal";
import { useState, use } from 'react'
import { useFormik } from 'formik';




function Investment() {
  const [showInvestment, setInvestment] = useState(false);
  const [investmentType, setInvestmentType] = useState('');
  const [Amount, setAmount] = useState(NaN);
  const [expectedAmount, setExpectedAmount] = useState(NaN);
  const [holdTime, setHoldTime] = useState(NaN);
  const [count, setCount] = useState(0);

  const [APY, setAPY] = useState(NaN);
  const [nameError, setNameError] = useState({ isNameError: true, message: 'Please enter the Name of the Goal' });
  const [amountError, setAmountError] = useState({ amountError: true, message: 'Please enter a valid value' });

  const handleSubmitForm = (event: MouseEvent<HTMLButtonElement>) => {
    formik.handle
    event.preventDefault();
    if (nameError.isNameError == false && count == 4) {
      setInvestment(false); setInvestmentType(''); setAmount(NaN); setCount(0);
    }
  }
  
  const validate = (values : { 
  investmentType:string,
  Amount:number,
  expectedAmount:number,
  timeOfReturn:Date,
  holdTime:number}
  ) => {

    const errors = {};

    if (!values.investmentType) {
      errors.investmentType = 'Type od investment is required ';
    } else if (values.investmentType.length > 15) {
      errors.investmentType = 'Must be 15 characters or less';
    }

   if(!values.Amount){
    errors.Amount = 'Amount of investment is Required';
   } else if (values.Amount <= 0) {
      errors.Amount = 'Amount must be greater than zero';
    }
   if(!values.expectedAmount){
    errors.expectedAmount = 'Expected Amount after investment is Required';
   } else if (values.expectedAmount <= 0) {
      errors.expectedAmount = 'Amount must be greater than zero';
    }
   if(!values.holdTime){
    errors.holdTime = 'Time period is a Required feild';
   } else if (values.holdTime <= 0) {
      errors.holdTime = 'Please enter valid time in months';
    }
    var date = new Date(values.timeOfReturn);
    var nowDate =  new Date();

    if (!values.timeOfReturn) {
      errors.timeOfReturn = 'Date of investment is a Required feild';
    }
    
    else if(0 >= (date.getTime()-nowDate.getTime())){
      errors.timeOfReturn = 'Enter a valid date ';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      investmentType: '',
      Amount: 0,
      expectedAmount: 0,
      holdTime: 0,
      // APY: '',
      timeOfReturn:'',
    },
    validate,
    onSubmit: (values:
      { 
        investmentType:string,
        Amount:number,
        expectedAmount:number,
        timeOfReturn:Date,
        holdTime:number}
      ) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const content = <>
    <form onSubmit={formik.handleSubmit}>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.investmentType ? <div>{formik.errors.investmentType}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.Amount ? <div>{formik.errors.Amount}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.expectedAmount ? <div>{formik.errors.expectedAmount}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.holdTime ? <div>{formik.errors.holdTime}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.timeOfReturn ? <div>{formik.errors.timeOfReturn}</div> : null}</h1>

      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="investmentType">investment Type</label>

        <input
          id="investmentType"
          name="investmentType"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.investmentType}
        />
      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="investmentType">Amount to invest</label>

        <input
          id="Amount"
          name="Amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Amount}
        />

      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="investmentType">expeccted Amount</label>

        <input
          id="expectedAmount"
          name="expectedAmount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.expectedAmount}
        />

      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="investmentType">Time of the holding: </label>

        <input
          id="holdTime"
          name="holdTime"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.holdTime}
        />

      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="investmentType">Time of the holding: </label>

        <input
          id="timeOfReturn"
          name="timeOfReturn"
          type="date"
          onChange={formik.handleChange}
          value={formik.values.timeOfReturn}
        />

      </div>
      {/* <button type="submit" onSubmit={formik.handleSubmit}>Submit</button> */}
      <div className="flex justify-center items-center mt-10 w-[20%] m-auto">
      <button type="submit" className='bg-[#1D3557] w-full p-2 rounded-[20px]'>
<h2 className='text-m text-white font-extrabold text-center '>Submit</h2>
</button>
      </div>
    </form>
  </>;

  return (
    <main>
      <Header
        heading="Invest, Track, Triumph!"
        subheading="Track your Investments here"
      />
      <Modal submit={handleSubmitForm} show={showInvestment} setShow={() => { setInvestment(false); }} title={"Add Investments"} content={content}></Modal>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-black table-auto mt-10">
          <thead>
            <tr>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Type of Investment
              </th>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Amount Invested
              </th>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Time of Holding
              </th>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Return Expected
              </th>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Time of Return
              </th>
              <th className="py-2 px-4 border-black border-b-2 w-1/6 text-center">
                Annual Percentage Yield
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
              <td className="py-2 px-4 border-black border-b w-1/6 text-center">
                Table Cell
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-10 w-[20%] m-auto">
        <Button handleClick={() => { setInvestment(true); }} text='Add Investment'></Button>
      </div>
    </main>
  );
}

export default Investment;
