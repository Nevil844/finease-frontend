import Header from "@/components/Header";
import React from "react";

function Investment() {


  return (
    <main>
      <Header
        heading="Invest, Track, Triumph!"
        subheading="Track your Investments here"
      />
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
      <div className="flex justify-center items-center mt-10">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Investment
        </button>
      </div>
    </main>
  );
}

export default Investment;
