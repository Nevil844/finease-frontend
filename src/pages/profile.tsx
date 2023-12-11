import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

function profile() {
  return (
    <main>
      <Header heading="Profile" subheading="Your profile details here" />

      <section className="flex items-start justify-around space-x-4 mt-4">
        <div className="space-y-4 w-full ]">
          {/* Heading */}
          <div className="bg-[#F1FAEE] card">
            <h1 className="text-2xl text-[#1D3557] font-bold ml-5 mb-4 mt-3 flex items-center justify-between">
              General
              <button className="bg-white rounded-full text-sm justify-center mr-6 p-3 border border-gray-400">
                <span>Edit</span>
              </button>
            </h1>

            {/* Content with Circular Image */}
            <div className="flex">
              {/* Circular Image */}
              <Image
                src="/author.jpg"
                alt="Profile"
                width={150}
                height={150}
                className="rounded-full object-cover border-4 border-white m-8"
              />

              {/* User Information */}
              <div className=" flex-1">
                <div className="grid grid-cols-2 gap-y-2 items-start">
                  <h2 className="text-black font-medium">Name:</h2>
                  <span className="text-gray-500">Jim</span>
                  <h2 className="text-black font-medium">Email:</h2>
                  <span className="text-gray-500">jim@gmail.com</span>
                  <h2 className="text-black font-medium">Phone:</h2>
                  <span className="text-gray-500">+91 1234567890</span>
                  <h2 className="text-black font-medium">Age:</h2>
                  <span className="text-gray-500">23</span>
                  <h2 className="text-black font-medium">Occupation:</h2>
                  <span className="text-gray-500">Student</span>
                  <h2 className="text-black font-medium">Marital Status:</h2>
                  <span className="text-gray-500">23</span>
                </div>
              </div>
            </div>
          </div>

          {/* Liabilities */}
          <div className="bg-white card">
          <h1 className="text-2xl text-[#1D3557] font-bold ml-5 mb-4 mt-3 flex items-center justify-between">
              Liabilities
              <button className="bg-white rounded-full text-sm mr-4 justify-center p-2 border border-gray-400">
                <span>Add More</span>
              </button>
            </h1>
            <ul className="space-y-3">
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h3 className="text-blue-900 font-medium">
                    Loan from HDFC Bank
                  </h3>
                  <div className="flex items-center">
                    {" "}
                    {/* Container for delete icon */}
                    <span className="text-gray-600 mr-2">Due Date</span>
                    <FaTrash className="text-red-500 cursor-pointer mt-5 ml-5" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h1 className="text-gray-600 font-small">
                    Worth Rs.2,00,000
                  </h1>
                  <span className="text-gray-600 mr-11">20th April 2026</span>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h3 className="text-blue-900 font-medium">Loan from Jack</h3>
                  <div className="flex items-center">
                    {" "}
                    {/* Container for delete icon */}
                    <span className="text-gray-600 mr-2">Due Date</span>
                    <FaTrash className="text-red-500 cursor-pointer mt-5 ml-5" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h1 className="text-gray-600 font-small">
                    Worth Rs.2,00,000
                  </h1>
                  <span className="text-gray-600 mr-11">20th April 2024</span>
                </div>
              </div>
            </ul>
          </div>

          {/* Assets */}
          <div className="bg-[#F1FAEE] card">
            <h1 className="text-2xl text-[#1D3557] font-bold ml-5 mb-4 mt-3 flex items-center justify-between">
              Assets
              <button className="bg-white rounded-full mr-4 text-sm justify-center p-2 border border-gray-400">
                <span>Add More</span>
              </button>
            </h1>

            <ul className="space-y-3">
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h3 className="text-blue-900 font-medium text-xl">Car</h3>
                  <div className="flex items-center">
                    {" "}
                    {/* Container for delete icon */}
                    <span className="text-gray-600 text-lg mr-2">
                      Worth Rs.6,00,000
                    </span>
                    <FaTrash className="text-red-500 cursor-pointer ml-5" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-between items-center p-0 px-6 rounded-md">
                  <h3 className="text-blue-900 font-medium text-xl">Bike</h3>
                  <div className="flex items-center">
                    {" "}
                    {/* Container for delete icon */}
                    <span className="text-gray-600 text-lg mr-2">
                      Worth Rs.40,000
                    </span>
                    <FaTrash className="text-red-500 cursor-pointer ml-5" />
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        <div className="bg-[#A8DADC] card">
          <h2 className="text-[#1D3557] font-bold ml-12 ">
            Finding difficulties?
          </h2>
          <div className="grid grid-cols-2 gap-y-2 items-start mx-auto">
            <h3 className="ml-12">
              For any queries email on: finease@gmail.com
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default profile;
