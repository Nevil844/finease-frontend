import Header from "@/components/Header";
import React from "react";
import {useState} from 'react';
import Modal from "@/components/Modal";
import Button from "@/components/Button";
import Piechart from "@/components/Piechart";
import validate from '@/components/BudgetValidation';
import {useFormik} from 'formik';


const data: { name: string; value: number }[] = [
  { value: 100, name: "Groceries" },
  { value: 435, name: "Internet bill" },
  { value: 484, name: "Pocket money" },
  { value: 300, name: "Paint Expense" },
  { value: 580, name: "Water bill" },
];
// category , description ,amount
const title = {
  subtext: "Monthly Budget Distribution",
  text: "Janaury 2021",
  left: "center",
};

function budget() {
  const [showBudget, setBudget] = useState(false);
  const formik = useFormik({
    initialValues: {
      category: '',
      Amount: 0,
      description: '',
    },
    validate,
    onSubmit: (values:
      { 
        category:string,
        Amount:number,
        description:string}
      ) => {
        setBudget(false);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const content = <>
    <form onSubmit={formik.handleSubmit}>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.category ? <div>{formik.errors.category}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.Amount ? <div>{formik.errors.Amount}</div> : null}</h1>
    <h1 className='text-center text-[#FF0000] text-[14px]'>{formik.errors.description ? <div>{formik.errors.description}</div> : null}</h1>


      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="category">Category: </label>

        <input
          id="category"
          name="category"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.category}
        />
      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="category">Amount allocated for the budget: </label>

        <input
          id="Amount"
          name="Amount"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.Amount}
        />

      </div>
      <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
        <label htmlFor="category">Description: </label>

        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
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
        heading="Budget Your Month, Own Your Future!"
        subheading="Create your monthly budgets here"
      />
      <Modal  show={showBudget} setShow={() => { setBudget(false); }} title={"Create Budget"} content={content}></Modal>

      <div className="flex">
        <div className="card bg-white mr-6 w-1/2">
          <h3 className="text-xl mb-6 text-center">
            Budget Report For Current Month
          </h3>
          <Piechart data={data} title={title} />
          <div className="flex justify-center items-center mt-12">
            <button onClick={() => { setBudget(true); }}  className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {/* <Button handleClick={() => { setBudget(true); }} text='Create Budget'></Button> */}
            <h2 className='text-m text-white font-extrabold text-center '>Create Budget</h2>

            </button>
          </div>
        </div>
        <div className="card bg-white w-1/2">
          <h3 className="text-xl mb-4">Budget Reports for Previous Months</h3>
          <div className="card bg-[#F1FAEE] mb-6">
            <Piechart data={data} title={title} />
          </div>
          <div className="card bg-[#F1FAEE]">
            <Piechart data={data} title={title} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default budget;
