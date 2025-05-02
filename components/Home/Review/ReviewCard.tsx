

interface ReviewItemType {
  heading: string | null;
  content: string | null;
}

const ReviewCard = ({ blogSection }: { blogSection: ReviewItemType }) => {
  // const sanitizedHtml = DOMPurify.sanitize(review);
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        {/* Text Content  */}
        <div className="col-span-5 order-2 lg:order-1">
          <div
            className="text-2xl font-semibold mt-8"
            dangerouslySetInnerHTML={{ __html: blogSection.heading || '' }}
          ></div>
          <div
            dangerouslySetInnerHTML={{ __html: blogSection.content || '' }}
            className="prose mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default ReviewCard;
