import Header from '@/components/Header';
import React from 'react';
import { MouseEvent } from 'react';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { useState, use } from 'react';
import { useFormik } from 'formik';
import validate from '@/components/InvestmentValidation';
import Investment from '@/models/Investment';
import InvestmentService from '@/service/investmentService';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from '@/store/authSlice';
import { selectUserData, setUserData } from '@/store/userSlice';

function InvestmentPage() {
  const [showInvestment, setInvestment] = useState(false);
  const [count, setCount] = useState(0);
  const [APY, setAPY] = useState(NaN);
  const authToken = useSelector(selectAuthToken);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const [nameError, setNameError] = useState({
    isNameError: true,
    message: 'Please enter the Name of the Goal',
  });

  const handleSubmitForm = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (nameError.isNameError == false && count == 4) {
      setInvestment(false);
      // setInvestmentType(''); setAmount(NaN);
      setCount(0);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      type_of_investment: '',
      amount: 0,
      date_of_acquisition: new Date(),
      date_of_return: new Date(),
      apy: 0,
      // investmentType: '',
      // Amount: 0,
      // expectedAmount: 0,
      // holdTime: 0,
      // // APY: '',
      // timeOfReturn: '',
    },
    validate,
    onSubmit: (values) => {
      // console.log(values);
      InvestmentService.postInvestment(authToken, values).then((res) => {
        console.log(res);
        dispatch(setUserData(res.user));
      });

      setInvestment(false);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  if (!userData) {
    return <div>Loading...</div>;
  }
  const content = (
    <>
      <form onSubmit={formik.handleSubmit}>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.type_of_investment ? (
            <div>{formik.errors.type_of_investment}</div>
          ) : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.amount ? <div>{formik.errors.amount}</div> : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.apy ? <div>{formik.errors.apy}</div> : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.date_of_acquisition ? (
            <div>{formik.errors.date_of_acquisition as string}</div>
          ) : null}
        </h1>
        <h1 className='text-center text-[#FF0000] text-[14px]'>
          {formik.errors.date_of_return ? (
            <div>{formik.errors.date_of_return as string}</div>
          ) : null}
        </h1>

        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='name'>Name</label>

          <input
            id='name'
            name='name'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='description'>Description</label>

          <input
            id='description'
            name='description'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.description}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='type_of_investment'>investment Type</label>

          <input
            id='type_of_investment'
            name='type_of_investment'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.type_of_investment}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='type_of_investment'>Amount to invest</label>

          <input
            id='amount'
            name='amount'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.amount}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='type_of_investment'>APY</label>

          <input
            id='apy'
            name='apy'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.apy}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='date_of_acquisition'>Time of the holding: </label>

          <input
            id='date_of_acquisition'
            name='date_of_acquisition'
            type='date'
            onChange={formik.handleChange}
            value={formik.values.date_of_acquisition}
          />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
          <label htmlFor='date_of_return'>Time of the holding: </label>

          <input
            id='date_of_return'
            name='date_of_return'
            type='date'
            onChange={formik.handleChange}
            value={formik.values.date_of_return}
          />
        </div>
        {/* <button type="submit" onSubmit={formik.handleSubmit}>Submit</button> */}
        <div className='flex justify-center items-center mt-10 w-[20%] m-auto'>
          <button
            type='submit'
            className='bg-[#1D3557] w-full p-2 rounded-[20px]'
          >
            <h2 className='text-m text-white font-extrabold text-center '>
              Submit
            </h2>
          </button>
        </div>
      </form>
    </>
  );

  return (
    <main>
      <Header
        heading='Invest, Track, Triumph!'
        subheading='Track your Investments here'
      />
      <Modal
        show={showInvestment}
        setShow={() => {
          setInvestment(false);
        }}
        title={'Add Investments'}
        content={content}
      ></Modal>

      <div className='overflow-x-auto'>
        <table className='min-w-full border border-black table-auto mt-10'>
          <thead>
            <tr>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Name{' '}
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Description{' '}
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Type of Investement{' '}
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Amount
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Date of Acquisition{' '}
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                Date of Return{' '}
              </th>
              <th className='py-2 px-4 border-black border-b-2 w-1/6 text-center'>
                APY{' '}
              </th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
            </tr>
            <tr>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
              <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                Table Cell
              </td>
            </tr> */}
            {userData.investments.map((investment: Investment) => {
              return (
                <tr key={investment.id}>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.name}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.description}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.type_of_investment}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.amount}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.date_of_acquisition.toString()}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.date_of_return.toString()}
                  </td>
                  <td className='py-2 px-4 border-black border-b w-1/6 text-center'>
                    {investment.apy}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center items-center mt-10 w-[20%] m-auto'>
        <Button
          handleClick={() => {
            setInvestment(true);
          }}
          text='Add Investment'
        ></Button>
      </div>
    </main>
  );
}

export default InvestmentPage;
