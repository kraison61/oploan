import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  linkText?: string;
  content?: string;
};

const WhyChooseCard = ({ title, image, content }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="object-contain mx-auto"
      />
      <h3 className="text-center text-lg mt-5 mb-5 font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 text-center font-medium text-sm mb-7 ">
        {content}
      </p>
      <h4 className="text-center font-semibold text-blue-900 hover:text-blue-950 transition-all duration-200 cursor-pointer">
        <Link href="/application-form">GetNow</Link> &#8594;
      </h4>
    </div>
  );
};

export default WhyChooseCard;
