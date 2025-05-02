"use client";

import { useEffect } from 'react';

const FormPage = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.id = 'form-init-vars';
    script1.textContent = `var _lg_form_init_ = { aid: "8595", template: "elvis-us" };`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.id = 'form-init-script';
    script2.src = 'https://loansaccount.com/form/applicationInit.js';
    script2.async = true;
    document.head.appendChild(script2);

    const cleanupScripts = () => {
      // Cleanup: Remove the scripts
      const varsScript = document.getElementById('form-init-vars');
      const mainScript = document.getElementById('form-init-script');

      if (varsScript) {
        varsScript.remove();
      }
      if (mainScript) {
        mainScript.remove();
      }
    };

    return cleanupScripts; // Return the cleanup function

  }, []);

  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div id="_lg_form_"></div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;