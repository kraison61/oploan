"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

interface ReviewItemType {
  heading: string | null;
  content: string | null;
}

interface ReviewProps {
  blogSection?: ReviewItemType[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Review = ({ blogSection = [] }: ReviewProps) => {
  if (!blogSection || blogSection.length === 0) {
    return null; // ไม่แสดงอะไรถ้าไม่มีข้อมูล
  }

  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h2 className="mt-6 text-2xl md:text-3xl capitalize font-bold text-center">
        What client say about us
      </h2>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          infinite
          responsive={responsive}
          showDots={true}
        >
          {blogSection
            .filter(item => item.heading && item.content)
            .map((item, index) => (
              <ReviewCard 
                key={index} 
                blogSection={item}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;