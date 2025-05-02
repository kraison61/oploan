import React from "react";
import WhyChooseCard from "../WhyChoose/WhyChooseCard";

const HowItWork = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
      How Does a Cash Advance Work?
      </h2>
      <p className="text-center w-[90%] sm:w-[80%] mx-auto text-gray-600">When you request a cash advance, you are essentially borrowing a small amount of money that you agree to repay within a short period, usually by your next payday. The process is straightforward:</p>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/i1.png"
            title="Request a Loan"
            content="You provide basic information about yourself and your financial needs. This step is simple and can often be completed online."
            
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/i2.png"
            title="Receive a Decision"
            content="Once your request is submitted, you may receive a decision within minutes. If approved, the terms of the loan, including the repayment schedule and fees, will be presented to you."
            
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <WhyChooseCard
            image="/images/i4.png"
            title="Receive Funds"
            content="If you accept the terms, the funds can be deposited into your account as soon as the same business day, depending on the lender and your bank’s processing times."
            
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
