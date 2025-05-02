// app/loan-calculator/page.tsx
import React from "react";
import LoanCalculator from "@/components/LoanCalculator/LoanCalculator";
import { Metadata } from "next";
import WhyChoose from "@/components/Home/WhyChoose/WhyChoose";
import Review from "@/components/Home/Review/Review";
import HowItWork from "@/components/Home/HowItWork/HowItWork";
import Offer from "@/components/Home/Offer/Offer";

export const metadata: Metadata = {
  title: "Calculate Your Loan Interest | [Your Website Name]", // Replace with your actual website name
  description:
    "Use our free loan calculator to estimate your monthly payments, total interest, and total payable amount. Plan your finances effectively.",
};

const LoanCalculatorPage = () => {
  return (
    <>
      <LoanCalculator />;
      <WhyChoose />
      <Review />
      <HowItWork />
      <Offer />
    </>
  );
};

export default LoanCalculatorPage;