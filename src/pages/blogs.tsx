import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

function blogs() {
  return (
    <main>
      <Header heading="Blogs" subheading="Blogs by Financial Experts" />
      <div className="bg-[#F1FAEE] card mt-6">
            <ul className="space-y-3 px-4">
              <li className="flex justify-between items-center border-b-2 border-black px-2 pb-2">
                <div className="flex items-center">
                  <Image
                    src="/author.jpg"
                    width={32}
                    height={32}
                    alt="Author"
                    className="mr-6 h-8 w-8"
                  />
                  <div>
                    <h3 className="text-black text-xl font-bold">Finance & Economics</h3>
                    <h1 className="text-black font-small">John Rick - April 2023</h1>
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 border-black px-2 pb-2">
                <div className="flex items-center">
                  <Image
                    src="/author.jpg"
                    width={32}
                    height={32}
                    alt="Author"
                    className="mr-6 h-8 w-8"
                  />
                  <div>
                    <h3 className="text-black text-xl font-bold">Finance & Economics</h3>
                    <h1 className="text-black font-small">John Rick - April 2023</h1>
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 border-black px-2 pb-2">
                <div className="flex items-center">
                  <Image
                    src="/author.jpg"
                    width={32}
                    height={32}
                    alt="Author"
                    className="mr-6 h-8 w-8"
                  />
                  <div>
                    <h3 className="text-black text-xl font-bold">Risk while investing</h3>
                    <h1 className="text-black font-small">John Rick - April 2023</h1>
                  </div>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 border-black px-2 pb-2">
                <div className="flex items-center">
                  <Image
                    src="/author.jpg"
                    width={32}
                    height={32}
                    alt="Author"
                    className="mr-6 h-8 w-8"
                  />
                  <div>
                    <h6 className="text-black text-xl font-bold">Secure Investments</h6>
                    <h1 className="text-black font-small">John Rick - April 2023</h1>
                  </div>
                </div>
              </li>
            </ul>
          </div>
    </main>
  );
}

export default blogs;
