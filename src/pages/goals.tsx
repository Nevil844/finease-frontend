import Header from '@/components/Header';
import React from 'react';

function budget() {
    return (
        <main>
            <Header
                heading='Ownership Awaits, Start Calculating!'
                subheading='Know how you can acquire your goals'
            />
            {/* <div className='min-h-screen flex flex-row'>
<div className='h-436 w-3/6 absolute left-601px bg-yellow-200' id='goals-card'>
goals
nwkxnw

</div>
<div className='w-2 h-3' id='create-goals-card'>
create goals 
</div>
      </div> */}
            <section className=' flex items-start justify-around space-x-6 mt-4'>
                {/* Column 1 */}
                <div className='space-y-4'>
                    {/* Balance Card */}
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
                    {/* Profile Card */}
                    <div className='bg-[#FFF] card'>

                    <h2 className='text-xl text-[#1D3557] font-bold text-center'>Know how we help you acquire your goals</h2>
                    <div className='m-5 '>

                        <h2 className='text-l text-black text-center font-semibold'>Based on your income and the assets you already own, earnings and savings, we calculate the estimated time for you to acquire your dream goal and also help you manage the money required it.</h2>
                    </div>
                    <div className='w-3/6 m-auto'>

                    <button className='bg-[#1D3557] w-full p-2 rounded-[20px]'>
                        
                    <h2 className='text-m text-white font-extrabold text-center '>Create Goals</h2>
                    </button>
                    </div>

                    </div>


                </div>
            </section>
        </main>
    );
}

export default budget;
