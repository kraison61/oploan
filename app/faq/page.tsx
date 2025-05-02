const page = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex items-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 items-center gap-12 pt-[4vh]">
          <h1 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
            FAQ
          </h1>

          <p>
            <strong>1) What is this website and how can I use it?</strong>
            <br />
            We are a totally free website where you can submit a loan request
            online and receive a decision in quick time. That’s right: you don’t
            have to pay us anything. And you don’t have to go anywhere or to
            stand in a long waiting line.
            <br />
            <strong>2) How can I submit my request with you?</strong>
            <br />
            We prepared a very simple form for you to fill in. When you’re done
            with it, just press one button to submit your request and wait a
            bit. Your request will be processed and answered soon.
            <br />
            <strong>
              3) What are the requirements for using your website?
            </strong>
            <br />
            <strong>We have a very short list of requirements here.</strong>
            <br />
            You can be eligible if you:
            <ol className="list-decimal mx-10">
              <li>legally reside in the United States</li>
              <li>are 18 years old or older</li>
              <li>have a stable source of income</li>
              <li>
                If you want to get more info about our website, visit the
                section for Terms of Use
              </li>
            </ol>
            <strong>4) And what about my credit score?</strong>
            <br />
            Every credit score is welcome here. We are going to be
            straightforward with you: it’s really easier to get a deal when your
            score is OK. But having a less-than-perfect one doesn’t prevent you
            from submitting a request. Try it out and see where it goes!
            <br />
            <strong>
              5) But if I don’t like the terms of my offer, what can I do?
            </strong>
            <br />
            If you received an offer that doesn’t satisfy you, you can always
            refuse to proceed. You are under no obligation to agree to it and
            proceed with this deal. There are no fines and penalties if you
            refuse to go on with this offer.
            <br />
            <strong>6) Is my information safe with you?</strong>
            <br />
            We are very serious about our reputation. We’ve implemented advanced
            safety measures and keep your personal details away from prying
            eyes. If you want to get more coverage on our data management, visit
            the section for Privacy Policy.
            <br />
            <strong>7) What is a personal loan?</strong>
            <br />
            It’s a credit product that allows you to borrow a large lump sum of
            money and repay it over a certain period. It typically comes with a
            fixed interest rate and is supposed to be repaid in fixed
            installments each month.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};
export default page;
