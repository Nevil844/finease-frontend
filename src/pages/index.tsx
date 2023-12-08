import Header from '@/components/Header';

export default function Home() {
  return (
    <main className=''>
      <Header heading='Dashboard' subheading='Overview of your finances' />
      <section className='flex items-start justify-around space-x-4 mt-4'>
        {/* Column 1 */}
        <div className='space-y-4 w-full'>
          {/* Balance Card */}
          <div className='bg-[#F1FAEE] card'>
            <h2 className='text-lg text-gray-500 text-bold'>Your Balance</h2>
            <h1 className='text-4xl font-bold'>₹ 0.00</h1>
          </div>

          {/* Incomes Card */}
          <div className='bg-[#A8DADC] card'>
            <h2 className='text-lg text-bold mb-3'>Five Heads of Incomes</h2>
            <ul className='space-y-3'>
              <li className='bg-[#DBEBEC] flex justify-between items-center p-2 px-6 rounded-md'>
                <h3 className='text-black font-medium'>Salary</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='bg-[#DBEBEC] flex justify-between items-center p-2 px-6 rounded-md'>
                <h3 className='text-black font-medium'>House Property</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='bg-[#DBEBEC] flex justify-between items-center p-2 px-6 rounded-md'>
                <h3 className='text-black font-medium'>Capital Gains</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='bg-[#DBEBEC] flex justify-between items-center p-2 px-6 rounded-md'>
                <h3 className='text-black font-medium'>
                  Business and Profession
                </h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='bg-[#DBEBEC] flex justify-between items-center p-2 px-6 rounded-md'>
                <h3 className='text-black font-medium'>Other Income</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Column 2 */}
        <div className='space-y-4 w-full'>
          {/* Profile Card */}
          <div className='bg-[#FFF] card'>
            <div className='grid grid-cols-2 gap-y-2 items-start max-w-[350px] mx-auto'>
              <h2 className='text-black font-medium'>Name:</h2>
              <span className='text-gray-500'> Jim</span>
              <h2 className='text-black font-medium'>Email:</h2>
              <span className='text-gray-500'>jim@gmail.com</span>
              <h2 className='text-black font-medium'>Phone:</h2>
              <span className='text-gray-500'>+91 1234567890</span>
              <h2 className='text-black font-medium'>Address:</h2>
              <span className='text-gray-500'>123, Lorem Ipsum</span>
            </div>
          </div>

          {/* Assets Card */}
          <div className='bg-[#F5DEDC] card'>
            <h2 className='text-lg text-bold mb-3'>Assets</h2>
            <ul className='space-y-3 px-4'>
              <li className='flex justify-between items-center border-b-2 border-gray-400 px-2 pb-2'>
                <h3 className='text-black font-medium'>Cash in Hand</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='flex justify-between items-center border-b-2 border-gray-400 px-2 pb-2'>
                <h3 className='text-black font-medium'>Bike</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='flex justify-between items-center border-b-2 border-gray-400 px-2 pb-2'>
                <h3 className='text-black font-medium'>Car</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
              <li className='flex justify-between items-center px-2 pb-2'>
                <h3 className='text-black font-medium'>House</h3>
                <span className='text-gray-600'>₹ 0.00</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
