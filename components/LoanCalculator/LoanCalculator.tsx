"use client";

import React, { useState, useEffect, useCallback } from "react";

// interface LoanCalculatorProps {}

interface LoanResult {
  monthlyPayment: number;
  totalPayable: number;
  totalInterest: number;
}

const LoanCalculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(2500);
  const [apr, setApr] = useState<number>(10);
  const [loanTerm, setLoanTerm] = useState<number>(1);
  const [feePercentage, setFeePercentage] = useState<number>(3);
  const [result, setResult] = useState<LoanResult | null>(null);

  const calculateLoan = useCallback(() => {
    if (amount <= 0 || apr < 0 || loanTerm <= 0 || feePercentage < 0) {
      setResult(null);
      return;
    }

    const monthlyInterestRate = apr / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const loanAmountWithFee = amount * (1 + feePercentage / 100);

    let monthlyPayment = 0;
    if (monthlyInterestRate > 0) {
      monthlyPayment =
        (loanAmountWithFee *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      monthlyPayment = loanAmountWithFee / numberOfPayments;
    }

    const totalPayable = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayable - loanAmountWithFee;

    setResult({
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalPayable: parseFloat(totalPayable.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    });
  }, [amount, apr, loanTerm, feePercentage, setResult]);

  useEffect(() => {
    calculateLoan();
  }, [calculateLoan]);

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Heading */}
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-4xl md:text-5xl mt-6 mb-6 font-bold md:leading-[3rem] lg:leading-[3.5rem]"
            >
              Loan Calculator
            </h1>
            <div className="mb-4">
              <label
                htmlFor="amount"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Loan Amount ($):
              </label>
              <input
                type="range"
                id="amount"
                min="100"
                max="10000"
                step="100"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-gray-500 text-sm mt-1">${amount}</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="apr"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                APR (%):
              </label>
              <input
                type="range"
                id="apr"
                min="0"
                max="30"
                step="0.1"
                value={apr}
                onChange={(e) => setApr(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-gray-500 text-sm mt-1">{apr}%</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="loanTerm"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Loan Term (Years):
              </label>
              <input
                type="range"
                id="loanTerm"
                min="1"
                max="30"
                step="1"
                value={loanTerm}
                onChange={(e) => setLoanTerm(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-gray-500 text-sm mt-1">{loanTerm} years</p>
            </div>

            <div className="mb-4">
              <label
                htmlFor="fee"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Fee (%):
              </label>
              <input
                type="range"
                id="fee"
                min="0"
                max="10"
                step="0.1"
                value={feePercentage}
                onChange={(e) => setFeePercentage(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-gray-500 text-sm mt-1">{feePercentage}%</p>
            </div>

            {result && (
              <div className="mt-6 p-4 bg-gray-100 rounded-md">
                <h3 className="text-lg font-semibold mb-2">Loan Summary</h3>
                <p>
                  Monthly Payment:{" "}
                  <span className="font-bold">${result.monthlyPayment}</span>
                </p>
                <p>
                  Total Amount Payable:{" "}
                  <span className="font-bold">${result.totalPayable}</span>
                </p>
                <p>
                  Total Interest:{" "}
                  <span className="font-bold">${result.totalInterest}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;