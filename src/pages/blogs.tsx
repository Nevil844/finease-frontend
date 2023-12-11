import Header from "@/components/Header";
import React from "react";

function blogs() {
  return (
    <main>
      <Header heading="Blogs" subheading="Blogs by Financial Experts" />
      <div className="card bg-[#F1FAEE] mt-6">
        <div className="flex justify-between items-center">
          <h3 className="text-3xl mb-6 ml-4">Secure Investments</h3>
          <h6 className="text-md mt-2 mb-6 ml-4 mr-20">John Rick - April 2023</h6>
        </div>

        <p className="text-xl mb-6 mr-8 ml-8">
          Morgan Housel is an amazing writer who produces insights that are as
          eye-opening as they are simple. Taking a few steps back, he surveys a
          wide range of economic and historical factors to mold and support his
          long-form opinion pieces, which are produced weekly. His perspective
          on macro-economics is really unique, as is the subject matter of his
          weekly post. <br />
          <br />
          Morgan Housel is an amazing writer who produces insights that are as
          eye-opening as they are simple. Taking a few steps back, he surveys a
          wide range of economic and historical factors to mold and support his
          long-form opinion pieces, which are produced weekly. His perspective
          on macro-economics is really unique, as is the subject matter of his
          weekly post. <br />
          <br />A behemoth of an investing blog, news site, stock advisor,
          educational resource and everything in between all rolled into one,
          The Motley Fool should be a resource in any retail investors arsenal.
          With an impressive team of writers and analysts on board, The Fool
          provides an endless stream of content. It's our one-stop-shop for the
          latest stock market news, especially around earnings season.
        </p>
      </div>
    </main>
  );
}

export default blogs;
