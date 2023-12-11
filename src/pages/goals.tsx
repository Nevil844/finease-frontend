import Header from '@/components/Header';
import React from 'react';
import Modal from '@/components/Modal';
import Button from '@/components/Button';
import { useState } from "react"
import { MouseEvent } from 'react';
import DynamicRadioButtons from '@/components/DynamicRadioButtons';


const options = [
    { label: 'Long Term', value: 'Long Term' },
    { label: 'Short Term', value: 'Short Term' },
];


function Goals() {
    const [showAddGoal, setAddGoal] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [goalName , setGoalName] = useState('');
    const [goalAmount , setGoalAmount] = useState(NaN);
    const [nameError , setNameError] = useState('');

    const handleOptionSelect = (value: string) => {
        setSelectedOption(value);
    };
    const handleCloseForm = () => {
        setAddGoal(false);
    }
    const handleOpenForm = () => {
        setAddGoal(true);
    }
    const handleSubmitForm = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log(goalAmount);
        console.log(goalName);
        console.log(selectedOption);
        
        setAddGoal(false);
    }
    const content = <>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
            <span>Type of Goal : </span> <DynamicRadioButtons options={options} onSelect={handleOptionSelect}></DynamicRadioButtons>
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
            <span>Name : </span> <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setGoalName(e.target.value)}} value={goalName} className='ml-2' type="text" />
        </div>
        <div className='mt-3 bg-[#A8DADC] p-1 rounded-[20px] flex-row flex justify-center'>
            <span> Amount : </span> <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setGoalAmount(+e.target.value)}} value={goalAmount} className='ml-2' type="number" />
        </div>
    </>;
    return (
        <main>
            <Header
                heading='Ownership Awaits, Start Calculating!'
                subheading='Know how you can acquire your goals'
            />
            <section className=' flex items-start justify-around space-x-6 mt-4'>
                <Modal submit={handleSubmitForm} show={showAddGoal} setShow={handleCloseForm} title={"Set Goals"} content={content}></Modal>
                (nameError) ? (<div>
                    </div>            ):
      <div></div>
                {/* Column 1 */}
                <div className='space-y-4'>
                    {/* Current Goals Card */}
                    <div className='flex flex-col h-fit w-[735px] bg-[#EDDEC8] card '>
                        <h2 className='text-xl text-[#1D3557] font-bold'>Your Goals </h2>
                        <div className='mt-5 card bg-green-300'>
                            <h2 className='text-l text-[#1D3557] font-semibold'>Goal Name</h2>
                            <h2 className='text-m text-[#1D3557] '>Amount Rs. 2,00,000</h2>
                            <h2 className='text-m text-[#1D3557] '>Estimated Time of Acquisition: 11 Months</h2>
                            <h2 className='text-m text-[#1D3557] '>Suggested way: Savings</h2>

                        </div>

                    </div>


                </div>
                {/* Column 2 */}
                <div className='space-y-4 w-full'>
                    {/* Add Goals Card */}
                    <div className='bg-[#FFF] card'>

                        <h2 className='text-xl text-[#1D3557] font-bold text-center'>Know how we help you acquire your goals</h2>
                        <div className='m-5 '>

                            <h2 className='text-l text-black text-center font-semibold'>Based on your income and the assets you already own, earnings and savings, we calculate the estimated time for you to acquire your dream goal and also help you manage the money required it.</h2>
                        </div>
                        <div className='w-3/6 m-auto'>
                            <Button handleClick={handleOpenForm} text='Add Goals'></Button>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Goals;
