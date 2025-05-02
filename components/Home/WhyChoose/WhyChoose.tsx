import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-16">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        How to Choose the Right Alternative
      </h2>
      <div className="text-center mt-6 w-[80%] mx-auto">
        <p>
          Choosing the right alternative to payday loans depends on several
          factors, such as the urgency of your situation, your credit score, and
          how much you need to borrow. Here’s a quick guide to help you make an
          informed decision:
        </p>
      </div>
      <div className="mt-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <WhyChooseCard
            image="/images/i1-1.png"
            title="Assess Your Need for Cash"
            content="How much do you need? If it's a small amount, Buy Now, Pay Later or Cash Advances from apps might be sufficient. For larger sums, consider personal loans or peer-to-peer lending."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <WhyChooseCard
            image="/images/i2-1.png"
            title="Consider the Terms"
            content="Always compare interest rates, repayment terms, and fees. Some options like credit unions or P2P lending might offer more favorable terms compared to high-interest payday loans."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/i3-1.png"
            title="Check for Flexibility"
            content="If you're uncertain about your ability to repay quickly, look for alternatives that offer longer repayment terms. Personal loans and credit union loans are great for flexibility."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="400"
        >
          <WhyChooseCard
            image="/images/i4-1.png"
            title="Consider Your Credit Score"
            content="Some lenders will still offer options to those with poor credit. If your credit is especially low, employer-based advances or local assistance programs may be your best bet"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
