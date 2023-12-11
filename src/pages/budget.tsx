import Header from "@/components/Header";
import React from "react";
import Piechart from "@/components/Piechart";

const data: { name: string; value: number }[] = [
  { value: 100, name: "Groceries" },
  { value: 435, name: "Internet bill" },
  { value: 484, name: "Pocket money" },
  { value: 300, name: "Paint Expense" },
  { value: 580, name: "Water bill" },
];

const title = {
  subtext: "Monthly Budget Distribution",
  text: "Janaury 2021",
  left: "center",
};

function budget() {
  return (
    <main>
      <Header
        heading="Budget Your Month, Own Your Future!"
        subheading="Create your monthly budgets here"
      />
      <div className="flex">
        <div className="card bg-white mr-6 w-1/2">
          <h3 className="text-xl mb-6 text-center">
            Budget Report For Current Month
          </h3>
          <Piechart data={data} title={title} />
          <div className="flex justify-center items-center mt-12">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create Budget
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
