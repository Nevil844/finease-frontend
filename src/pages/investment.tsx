import Header from '@/components/Header';
import Piechart from '@/components/Piechart';
import React from 'react';

const data: { name: string; value: number }[] = [
  { value: 100, name: 'Groceries' },
  { value: 435, name: 'Internet bill' },
  { value: 484, name: 'Pocket money' },
  { value: 300, name: 'Paint Expense' },
  { value: 580, name: 'Water bill' },
];

const title = {
  subtext: 'Monthly Budget Distribution',
  text: 'Janaury 2021',
  left: 'center',
};

function Investment() {
  return (
    <main>
      <Header
        heading='Invest, Track, Triumph!'
        subheading='Track your Investments here'
      />

      <div className='card bg-white mt-6'>
        <Piechart data={data} title={title} />
      </div>
    </main>
  );
}

export default Investment;
